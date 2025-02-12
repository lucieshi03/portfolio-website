import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// const express = require('express');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-message", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // my email
            pass: process.env.PASSWORD, // my password, both stored in .env
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Message from ${name}`,
        text: `
            You have a new message from ${name} (${email}):

            ${message}
        `,

    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Message sent!" });
        
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send message." });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));