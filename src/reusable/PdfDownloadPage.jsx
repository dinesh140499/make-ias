import React from "react";
import pdffile from '../assets/pdfs/pdf.pdf'
import { Link } from "react-router-dom";

const PdfDownloadPage = () => {
    const pdfURL = pdffile;
    return (
        <>
            <iframe
                src={pdfURL}
                className="w-full h-[500px] rounded-lg mb-4"
                title="PDF Preview"
            ></iframe>
        </>
    );
};

export default PdfDownloadPage;
