'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function submitLead(formData: FormData) {
  // Graceful fallback if variables aren't deployed on Vercel yet
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase credentials missing! Running in mock mode.");
    await new Promise(r => setTimeout(r, 1000));
    return { success: true, message: "Debug successful. Please add environment variables on Vercel." };
  }

  // Initialize client dynamically inside action to prevent server boot issues if missing env
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString();
  const type = formData.get('type')?.toString() || 'consultation';

  if (!email) {
    return { success: false, message: "Email is required." };
  }

  const { error } = await supabase
    .from('bob_wiley_leads')
    .insert([{ name, email, lead_type: type }]);

  if (error) {
    console.error("Supabase DB Insert Error:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }

  console.log(`🚀 DATABASE SUCCESS: Saved lead ${email} [Type: ${type}]`);

  return { 
    success: true, 
    message: "Thank you! We've received your request." 
  };
}
