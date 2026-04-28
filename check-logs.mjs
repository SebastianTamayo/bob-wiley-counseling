import { Resend } from 'resend';

async function checkEmails() {
  console.log("Checking Resend emails...");
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing Resend API Key");
    return;
  }
  
  const resend = new Resend(apiKey);
  try {
    const response = await fetch('https://api.resend.com/emails', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    const data = await response.json();
    
    console.log(JSON.stringify(data, null, 2));
    
  } catch (e) {
    console.error("Exception:", e);
  }
}

checkEmails();
