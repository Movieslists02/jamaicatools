import DocumentWorkspace from "./DocumentWorkspace";

const MAX_DOCUMENT_SIZE = 25 * 1024 * 1024;

const ACCEPTED_EXCEL_TYPES = [
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

const ACCEPTED_EXCEL_EXTENSIONS = [
  ".xls",
  ".xlsx",
];

function ExcelToPDF() {
  return (
    <DocumentWorkspace
      title="Excel to PDF"
      headerTitle="📗 Excel to PDF"
      headerSubtitle="Convert Microsoft Excel spreadsheets into PDF documents."
      actionLabel="Convert to PDF"
      uploadTitle="Drag and drop your Excel spreadsheet here"
      uploadDescription="Upload one XLS or XLSX file up to 25 MB."
      browseLabel="Browse Excel File"
      filesTitle="Excel Spreadsheet"
      fileTypeLabel="Excel spreadsheet"
      allowMultiple={false}
      minimumFiles={1}
      maxFileSize={MAX_DOCUMENT_SIZE}
      acceptedTypes={ACCEPTED_EXCEL_TYPES}
      acceptedExtensions={ACCEPTED_EXCEL_EXTENSIONS}
    />
  );
}

export default ExcelToPDF;
