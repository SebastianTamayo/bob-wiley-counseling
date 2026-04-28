import { submitLead } from './src/app/actions.ts';


// Mock FormData for the server action
const formData = new FormData();
formData.append('name', 'Sebastian Tamayo');
formData.append('email', 'sebtamayo93@gmail.com');
formData.append('type', 'ebook-download');

// Since we are running outside Next.js, we need to polyfill FormData if it doesn't work, but actually we can just pass a Web standard FormData. Let's use the built-in FormData if available in Node 18+.

async function testSubmit() {
  const data = new globalThis.FormData();
  data.append('name', 'Sebastian Tamayo Test');
  data.append('email', 'sebtamayo93@gmail.com');
  data.append('type', 'ebook-download');
  
  console.log("Calling submitLead...");
  const res = await submitLead(data);
  console.log("submitLead result:", res);
}

testSubmit();
