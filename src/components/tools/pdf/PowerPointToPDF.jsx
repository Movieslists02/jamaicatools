import DocumentWorkspace from "./DocumentWorkspace";

const MAX_DOCUMENT_SIZE = 25 * 1024 * 1024;

const ACCEPTED_POWERPOINT_TYPES = [
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

const ACCEPTED_POWERPOINT_EXTENSIONS = [
  ".ppt",
  ".pptx",
];

function PowerPointToPDF() {
  return (
    <DocumentWorkspace
      title="PowerPoint to PDF"
      headerTitle="📙 PowerPoint to PDF"
      headerSubtitle="Convert Microsoft PowerPoint presentations into PDF documents."
      actionLabel="Convert to PDF"
      uploadTitle="Drag and drop your PowerPoint presentation here"
      uploadDescription="Upload one PPT or PPTX file up to 25 MB."
      browseLabel="Browse PowerPoint File"
      filesTitle="PowerPoint Presentation"
      fileTypeLabel="PowerPoint presentation"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_DOCUMENT_SIZE}
      acceptedTypes={ACCEPTED_POWERPOINT_TYPES}
      acceptedExtensions={ACCEPTED_POWERPOINT_EXTENSIONS}
    />
  );
}

export default PowerPointToPDF;
