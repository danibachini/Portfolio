
export async function POST (req : Request) {

  const body = await req.json();

  if (body.name && body.email && body.text && body.isSliderActive === true ) {

    const email = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;
    const nodemailer = require ('nodemailer');
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth : {
        user: email,
        pass,
      }
    });

    const mailOptions = {
    from: body.email,
    to: email,
    subject: 'Contact Via Portfolio',
    text: 'Name: ' + body.name + '\nEmail: ' + body.email + '\nMessage: ' + body.text
    }

    try {
      // Use async/await to send the email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);

      // Return a successful response
      return new Response(JSON.stringify({ message: "Success" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);

      // Return an error response
      return new Response(JSON.stringify({ error: "Email not sent" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    
  } else {
    // Return an error response
    return new Response(JSON.stringify({ error: "Invalid request data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}