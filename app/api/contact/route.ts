
import { error } from "console";
import { NextResponse } from "next/server";

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
    
        transporter.sendMail(mailOptions, function(error: any , info: any) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    
        return NextResponse.json ({message: 'Success'})
        
    } else {
        return (error)
    }
}