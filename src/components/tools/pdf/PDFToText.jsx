import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function PDFToText() {
  return (
    <PDFWorkspace
      title="PDF to Text"
      headerTitle="📄 PDF to Text"
      headerSubtitle="Extract readable text from a PDF document."
      actionLabel="Extract Text"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Convert"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default PDFToText;
