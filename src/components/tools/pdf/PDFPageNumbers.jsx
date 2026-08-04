import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function PDFPageNumbers() {
  return (
    <PDFWorkspace
      title="PDF Page Numbers"
      headerTitle="🔢 PDF Page Numbers"
      headerSubtitle="Add page numbers to a PDF document."
      actionLabel="Add Page Numbers"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Number"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default PDFPageNumbers;
