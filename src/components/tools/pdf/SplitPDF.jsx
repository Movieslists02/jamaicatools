import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function SplitPDF() {
  return (
    <PDFWorkspace
      title="Split PDF"
      headerTitle="✂️ Split PDF"
      headerSubtitle="Separate one PDF into individual pages or selected page ranges."
      actionLabel="Split PDF"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Split"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default SplitPDF;
