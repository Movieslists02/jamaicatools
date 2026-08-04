import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function RepairPDF() {
  return (
    <PDFWorkspace
      title="Repair PDF"
      headerTitle="🛠️ Repair PDF"
      headerSubtitle="Attempt to recover readable content from damaged or corrupted PDF files."
      actionLabel="Repair PDF"
      uploadTitle="Drag and drop your damaged PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Repair"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default RepairPDF;
