import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function ProtectPDF() {
  return (
    <PDFWorkspace
      title="Protect PDF"
      headerTitle="🔒 Protect PDF"
      headerSubtitle="Add password protection to a PDF document."
      actionLabel="Protect PDF"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Protect"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default ProtectPDF;
