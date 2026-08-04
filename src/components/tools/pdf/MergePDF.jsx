import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function MergePDF() {
  return (
    <PDFWorkspace
      title="Merge PDF"
      headerTitle="📚 Merge PDF"
      headerSubtitle="Combine multiple PDF files into one document."
      actionLabel="Merge PDFs"
      uploadTitle="Drag and drop your PDF files here"
      uploadDescription="Upload two or more PDF files up to 25 MB each."
      browseLabel="Browse PDFs"
      filesTitle="PDFs to Merge"
      allowMultiple
      minimumFiles={2}
      maxFileSize={MAX_PDF_SIZE}
    />
  );
}

export default MergePDF;
