import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function ExtractPDFPages() {
  return (
    <PDFWorkspace
      title="Extract PDF Pages"
      headerTitle="📑 Extract PDF Pages"
      headerSubtitle="Select and extract specific pages from a PDF document."
      actionLabel="Extract Pages"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Extract From"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default ExtractPDFPages;
