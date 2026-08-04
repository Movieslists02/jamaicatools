import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function PDFToWord() {
  return (
    <PDFWorkspace
      title="PDF to Word"
      headerTitle="📝 PDF to Word"
      headerSubtitle="Convert a PDF document into an editable Word file."
      actionLabel="Convert to Word"
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

export default PDFToWord;
