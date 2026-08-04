import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function PDFToPowerPoint() {
  return (
    <PDFWorkspace
      title="PDF to PowerPoint"
      headerTitle="📽️ PDF to PowerPoint"
      headerSubtitle="Convert PDF pages into an editable PowerPoint presentation."
      actionLabel="Convert to PowerPoint"
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

export default PDFToPowerPoint;
