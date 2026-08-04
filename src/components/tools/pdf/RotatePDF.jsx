import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function RotatePDF() {
  return (
    <PDFWorkspace
      title="Rotate PDF"
      headerTitle="🔄 Rotate PDF"
      headerSubtitle="Rotate every page in a PDF clockwise or counterclockwise."
      actionLabel="Rotate PDF"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Rotate"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default RotatePDF;
