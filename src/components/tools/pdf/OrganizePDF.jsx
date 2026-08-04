import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function OrganizePDF() {
  return (
    <PDFWorkspace
      title="Organize PDF"
      headerTitle="🗂️ Organize PDF"
      headerSubtitle="Reorder, remove and arrange PDF pages into the sequence you need."
      actionLabel="Organize PDF"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Organize"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default OrganizePDF;
