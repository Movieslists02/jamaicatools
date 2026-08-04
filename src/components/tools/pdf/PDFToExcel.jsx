import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function PDFToExcel() {
  return (
    <PDFWorkspace
      title="PDF to Excel"
      headerTitle="📊 PDF to Excel"
      headerSubtitle="Convert tables and structured data from a PDF into an editable Excel spreadsheet."
      actionLabel="Convert to Excel"
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

export default PDFToExcel;
