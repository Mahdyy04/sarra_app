// File: /backend/server.js
import express from "express";
import cors from "cors";
import json from "body-parser";
import { createTransport } from "nodemailer";
import 'dotenv/config'

const app = express();
app.use(cors());
app.use(json());

app.get("/",(req,res)=>{
  res.send("Server is running")
})

// Endpoint to send PDF via email
app.post("/send-pdf", async (req, res) => {
  const { email, pdfData, filename } = req.body;

  const transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "hachemmeddeb89@gmail.com",
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "hachemmeddeb89@gmail.com",
    to: email,
    subject: "Votre commande",
    text: `Bonjour,

Nous vous remercions pour votre commande et la confiance que vous accordez à nous.
Votre système habilis personnalisé est maintenant en cours de traitement. Nous mettons tout en œuvre pour répondre à vos attentes et vous livrer un produit parfaitement adapté à vos besoins.
Nous vous tiendrons informé(e) des étapes de la conception de votre système. En attendant, si vous avez des questions ou souhaitez apporter des précisions à votre commande, n'hésitez pas à nous contacter.
Encore merci pour votre confiance,

Cordialement
    `,
    attachments: [
      {
        filename,
        content: Buffer.from(pdfData, "base64"),
        contentType: "application/pdf",
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).send("Failed to send email.");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
