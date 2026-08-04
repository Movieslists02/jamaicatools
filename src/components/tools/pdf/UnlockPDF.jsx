import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function UnlockPDF() {
  return (
    <PDFWorkspace
      title="Unlock PDF"
      headerTitle="🔓 Unlock PDF"
      headerSubtitle="Remove password protection from an authorized PDF document."
      actionLabel="Unlock PDF"
      uploadTitle="Drag and drop your protected PDF here"
      uploadDescription="Upload one password-protected PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="Protected PDF"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default UnlockPDF;
