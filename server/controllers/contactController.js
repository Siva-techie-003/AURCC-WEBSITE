import nodemailer from "nodemailer";
import Contact from "../models/contactModel.js";

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // 1. Save to Database
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });
    await newContact.save();

    // 2. Prepare SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || "ucedean-kovai@annauniv.edu";

    let emailSent = false;
    let emailStatusInfo = "";

    if (smtpHost && smtpUser && smtpPass) {
      try {
        // Create Nodemailer Transporter
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort),
          secure: parseInt(smtpPort) === 465, // true for 465, false for other ports like 587
          auth: {
            user: smtpUser,
            pass: smtpPass
          }
        });

        // Set up email details
        const mailOptions = {
          from: `"${name}" <${email}>`, // sender address
          to: contactEmail, // receiver
          replyTo: email, // reply-to user email
          subject: `Contact Form Submission: ${subject}`,
          text: `You have received a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
              <h2 style="color: #732828; border-bottom: 2px solid #732828; padding-bottom: 10px;">New Contact Form Message</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
                  <td style="padding: 8px 0;">${subject}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #732828; font-style: italic;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              <p style="margin-top: 30px; font-size: 11px; color: #777; border-top: 1px solid #eee; padding-top: 10px;">
                This email was sent automatically from the AURCC website contact form.
              </p>
            </div>
          `
        };

        // Send mail
        await transporter.sendMail(mailOptions);
        emailSent = true;
        emailStatusInfo = "Email sent successfully.";
        console.log(`[Contact] Email successfully sent to ${contactEmail} for message from ${email}`);
      } catch (err) {
        console.error("[Contact] Error sending email via Nodemailer:", err.message);
        emailStatusInfo = `SMTP configuration is present but sending failed: ${err.message}`;
      }
    } else {
      console.warn(
        `[Contact] SMTP credentials not configured. Skipping email delivery to ${contactEmail}.`
      );
      emailStatusInfo = "SMTP credentials not configured. Email delivery skipped but saved to database.";
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been received.",
      emailSent,
      info: emailStatusInfo,
      contactEmail,
      data: newContact
    });

  } catch (error) {
    console.error("[Contact] Controller error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your message."
    });
  }
};
