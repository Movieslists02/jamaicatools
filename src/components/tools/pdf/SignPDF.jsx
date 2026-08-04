import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function SignPDF() {
  return (
    <PDFWorkspace
      title="Sign PDF"
      headerTitle="✍️ Sign PDF"
      headerSubtitle="Add a signature to a PDF document."
      actionLabel="Sign PDF"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Sign"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default SignPDF;
