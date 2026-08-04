import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function DeletePDFPages() {
  return (
    <PDFWorkspace
      title="Delete PDF Pages"
      headerTitle="🗑️ Delete PDF Pages"
      headerSubtitle="Remove unwanted pages from a PDF document."
      actionLabel="Delete Pages"
      uploadTitle="Drag and drop your PDF here"
      uploadDescription="Upload one PDF file up to 25 MB."
      browseLabel="Browse PDF"
      filesTitle="PDF to Edit"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default DeletePDFPages;
