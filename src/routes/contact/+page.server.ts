import { SLACK_CONTACT_FORM_HOOK_URL } from '$env/static/private';
import { format } from 'date-fns';
import nodemailer from 'nodemailer';

// TODO: DO Vite & PreRendering research
export const prerender = false;
const formattedDate = format(new Date(), 'MMMM do, yyyy');

// Tracking state to ensure only 1 message is sent to slack at a time.
let formSubmitted = false;

async function submitFormData(name: string, email: string, message: string) {
    // TODO: Sanitize Input
    console.clear();
    console.log(name);
    console.log(email);
    console.log(message);
    

    // Email
    const transporter = await nodemailer.createTransport({   
        host:   'smtp.gmail.com', // e.g., 'smtp.gmail.com'
        port: 587, // or the appropriate port for your provider
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'eddielacrosse2@gmail.com',
            pass: 'kakx alqa trcr kjnn'
        }
      });
    
    const mailOptions = {
        // From = admin@finalbossxr.com
      from: 'eddielacrosse2@gmail.com',
      to: email,
      subject: '✉️ FinalBossXR Contact Message',
      text: 'Your message has been recieved, and we will contact you soon! 🙏🏾'
    };

    await transporter.verify((error, success) => {
        if (success) { // Email is valid
            console.log(mailOptions);
            
          transporter.sendMail(mailOptions);
          console.log('Email sent:', success);
          return;

        } else { // Email is invalid
          console.error('Invalid email address:', email);
          console.log(error);
          throw new Error('Invalid email address'); // Or handle the error in a way suitable for your application
        }
  
      });

    if(!formSubmitted) {
        formSubmitted = true;
        const response = await fetch(SLACK_CONTACT_FORM_HOOK_URL, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    text: `
                    ✉️ FinalBossXR Contact Message\n--- \nDate: ${formattedDate}\nName: ${name} \nEmail: ${email} \nMessage: \n\n"${message}"\n---`
                  })
        });
    
        if (response.ok) {
                const responseData = await response; // Parse the response if it's JSON
                console.log('POST request successful:', responseData);
                setTimeout(() => {
                    formSubmitted = false
                }, 1000);
                return;
        } else {
                console.error('POST request failed:', response);
                return;
        }
    } else {
        // TODO: ???
    }
}

export const actions = {
	default: async ({ request }) => {  
	  console.clear();
	  console.log('Sending Contact Message:');

      try {
        const data = await request.formData();
        const name = data.get('name') as string;
        const email = data.get('email') as string;
        const message = data.get('message') as string;
        console.log('Form data:', { name, email, message });
  
        if(name == '' || email == '' || message == '') {
            // Toast
            return console.log('Please fill out entire form');
        }
        
        submitFormData(name, email, message);
        return { success: true };
        
      } catch (error) {
        throw error;
      }
	}
}
