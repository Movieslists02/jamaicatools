import DocumentWorkspace from "./DocumentWorkspace";

const MAX_DOCUMENT_SIZE = 25 * 1024 * 1024;

const ACCEPTED_WORD_TYPES = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ACCEPTED_WORD_EXTENSIONS = [
  ".doc",
  ".docx",
];

function WordToPDF() {
  return (
    <DocumentWorkspace
      title="Word to PDF"
      headerTitle="📘 Word to PDF"
      headerSubtitle="Convert Microsoft Word documents into PDF files."
      actionLabel="Convert to PDF"
      uploadTitle="Drag and drop your Word document here"
      uploadDescription="Upload one DOC or DOCX file up to 25 MB."
      browseLabel="Browse Word File"
      filesTitle="Word Document"
      fileTypeLabel="Word document"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_DOCUMENT_SIZE}
      acceptedTypes={ACCEPTED_WORD_TYPES}
      acceptedExtensions={ACCEPTED_WORD_EXTENSIONS}
    />
  );
}

export default WordToPDF;
