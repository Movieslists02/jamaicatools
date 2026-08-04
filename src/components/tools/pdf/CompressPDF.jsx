import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function CompressPDF() {
  return (
    <PDFWorkspace
      title="Compress PDF"
      headerTitle="🗜️ Compress PDF"
      headerSubtitle="Reduce PDF file size while preserving readability and quality."
      actionLabel="Compress PDF"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Compress"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default CompressPDF;
