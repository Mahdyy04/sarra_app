import PDFFile from "../../components/PDFFile";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { generatePdfBlob, convertBlobToBase64 } from "../../utils/pdfUtils";
import sendEmail from "../../services/emailService";
import { useState,useEffect } from "react";

const PdfGenerated = () => {

  const [cahierData, setCahierData] = useState({});
  const [clientData, setClientData] = useState({});

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("cahierData"));
    const clientData = JSON.parse(localStorage.getItem("userData"));

    setCahierData(formData);
    setClientData(clientData);
  }, []);

  const handleSend = async () => {
    try {
      alert("votre commande est envoyée")
      // Generate PDF Blob
      const pdfBlob = await generatePdfBlob(<PDFFile cahierData={cahierData} clientData={clientData}/>);
      const base64Data = await convertBlobToBase64(pdfBlob);

      // Send email
      const response = await sendEmail(clientData.email, base64Data, "pdfFile.pdf");
      console.log("Email sent successfully!", response);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <PDFFile cahierData={cahierData} clientData={clientData}/>
      </PDFViewer>
      <PDFDownloadLink document={<PDFFile cahierData={cahierData} clientData={clientData}/>} fileName="cahierDesCahrges">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button style={{margin:10, color:"red"}}>Télécharger</button>
          )
        }
      </PDFDownloadLink>
      <button onClick={handleSend} style={{color:"green",marginLeft:10}}>Envoyer</button>
    </>
  );
};

export default PdfGenerated;
