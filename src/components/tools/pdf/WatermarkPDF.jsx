import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function WatermarkPDF() {
  return (
    <PDFWorkspace
      title="Watermark PDF"
      headerTitle="©️ Watermark PDF"
      headerSubtitle="Add text, branding or ownership marks to a PDF document."
      actionLabel="Add Watermark"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Watermark"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default WatermarkPDF;
