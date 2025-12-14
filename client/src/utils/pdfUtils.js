// File: /src/utils/pdfUtils.js
import { pdf } from "@react-pdf/renderer";

export const generatePdfBlob = async (PDFFileComponent) => {
  return pdf(PDFFileComponent).toBlob();
};

export const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]); // Extract base64 string
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
