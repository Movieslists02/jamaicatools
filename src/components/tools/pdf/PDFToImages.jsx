import PDFWorkspace from "./PDFWorkspace";

const MAX_PDF_SIZE = 25 * 1024 * 1024;

function PDFToImages() {
  return (
    <PDFWorkspace
      title="PDF to Images"
      headerTitle="🖼️ PDF to Images"
      headerSubtitle="Convert PDF pages into downloadable image files."
      actionLabel="Convert to Images"
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

export default PDFToImages;
