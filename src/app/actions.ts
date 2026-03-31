'use server'

export async function submitLead(formData: FormData) {
  // Simulate network delay for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  const name = formData.get('name');
  const email = formData.get('email');
  const type = formData.get('type') || 'consultation'; // 'consult' or 'ebook'

  // This is where we would connect to Supabase, SendGrid, etc.
  console.log(`🚀 LEAD CAPTURED | Type: ${type} | Name: ${name || 'N/A'} | Email: ${email}`);

  return { 
    success: true, 
    message: "Thank you! We've received your request." 
  };
}
