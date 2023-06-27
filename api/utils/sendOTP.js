import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendOtp = async (email, subject, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      // host: process.env.HOST,
      service: "gmail",
      port: 465,
      secure: true,
      // logger: true,
      // debug:true,
      secureConnection: false,
      auth: {
        user: "engineerfranklyn@gmail.com",
        pass: process.env.PASS
      },
      tls: {
        rejectUnauthorized: true
      }
    });
    
     await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      html: `<!DOCTYPE html>
      <html lang="en" >
      <head>
        <meta charset="UTF-8">
        <title>myReddit - Email verification</title>
        
      
      </head>
      <body>
      <!-- partial:index.partial.html -->
      <div style="font-family: Helvetica,Arial,sans-serif;min-width:800px;overflow:auto;line-height:2">
        <div style="margin:5px ;width:60%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: orangered;text-decoration:none;font-weight:600">myReddit</a>
          </div>
          <p style="font-size:2em">Hi,</p>
          <p style="font-size:1.2em">Thank you for choosing myreddit. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
          <p style="background: rgb(226, 161, 161);text-decoration:none; margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</p>
          <p style="font-size:0.9em;">Regards,<br />myReddit</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            
          </div>
        </div>
      </div>
      <!-- partial -->
        
      </body>
      </html>`,
    });
    

    console.log("OTP send successfully");
  } catch (error) {
    console.log("OTP not sent");
    console.log(error);
  }
};
