import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function OCRPDF() {
  return (
    <PDFWorkspace
      title="OCR PDF"
      headerTitle="🔍 OCR PDF"
      headerSubtitle="Recognize text in scanned PDF documents and make it searchable."
      actionLabel="Run OCR"
      uploadTitle="Drag and drop your scanned PDF here"
      uploadDescription="Upload one scanned PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF for OCR"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default OCRPDF;
