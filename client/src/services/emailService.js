// File: /src/services/emailService.js
const sendEmail = async (email, pdfData, filename) => {
  try {
    const response = await fetch("https://cahierpro-server.onrender.com/send-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, pdfData, filename }),
    });

    if (!response.ok) throw new Error("Failed to send email");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default sendEmail;
