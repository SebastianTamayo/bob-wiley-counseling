'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod';
import { Resend } from 'resend';
import { EbookTemplate } from '@/components/emails/EbookTemplate';
import { LeadNotificationTemplate } from '@/components/emails/LeadNotificationTemplate';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

// Initialize Resend conditionally so build doesn't crash if env is missing
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const teamEmail = process.env.TEAM_NOTIFICATION_EMAIL || 'bob@bobwileycounseling.com';

const leadSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  type: z.string().default('consultation'),
  details: z.string().optional()
});

export async function submitLead(formData: FormData) {
  console.log("-----------------------------------------");
  console.log("📩 INCOMING LEAD AT:", new Date().toLocaleTimeString());
  
  // Honeypot check for bots
  const honeypot = formData.get('_botcheck')?.toString();
  if (honeypot) {
    // If honeypot is filled, it's a bot. Silently return success to fool it.
    console.warn("Bot detected via honeypot field.");
    return { success: true, message: "Request received." };
  }

  // Parse and validate input
  const parsed = leadSchema.safeParse({
    name: formData.get('name')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    type: formData.get('type')?.toString() || 'consultation',
    details: formData.get('details')?.toString() || ''
  });

  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0].message };
  }

  const { name, email, type, details } = parsed.data;

  // Graceful fallback if variables aren't deployed on Vercel yet
  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase credentials missing! Running in mock mode.");
    await new Promise(r => setTimeout(r, 1000));
    return { success: true, message: "Debug successful. Please add environment variables on Vercel." };
  }

  // Initialize client dynamically inside action
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase
    .from('bob_wiley_leads')
    .insert([{ name, email, lead_type: type, details: details || null }]);

  if (error) {
    console.error("❌ SUPABASE INSERT ERROR:", error.message, error.details, error.hint);
    return { success: false, message: `Database error: ${error.message}. Please try again.` };
  }

  console.log(`🚀 DATABASE SUCCESS: Saved lead ${email} [Type: ${type}]`);

  // Handle Emails via Resend if configured
  if (resend) {
    try {
      if (type === 'ebook-download') {
        console.log(`📧 SENDING USER EMAIL to ${email}...`);
        await resend.emails.send({
          from: 'Bob Wiley <ebook@bobwileycounseling.com>',
          to: email,
          subject: 'Here is the guide you requested',
          react: await EbookTemplate({ firstName: name.split(' ')[0] }),
        });
        console.log(`✅ USER EMAIL SENT to ${email}`);
      }
    } catch (e: any) {
      console.error("❌ RESEND USER EMAIL FAILED:", e.message);
    }

    try {
      console.log(`📧 SENDING TEAM ALERT to ${teamEmail}...`);
      await resend.emails.send({
        from: 'Website <alerts@bobwileycounseling.com>',
        to: teamEmail,
        subject: `New Lead: ${name} (${type})`,
        react: await LeadNotificationTemplate({ name, email, type, details }),
      });
      console.log(`✅ TEAM ALERT SENT to ${teamEmail}`);
    } catch (e: any) {
      console.error("❌ RESEND TEAM ALERT FAILED:", e.message);
    }
  } else {
    console.warn("Resend API key missing. Skipping email delivery.");
  }

  return { 
    success: true, 
    message: type === 'ebook-download' 
      ? "Check your inbox in a few minutes for the download link." 
      : "Thank you! We've received your request." 
  };
}
