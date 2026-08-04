import { useRef, useState } from "react";
import CalculatorActions from "../../common/CalculatorActions";
import CalculatorHeader from "../../common/CalculatorHeader";
import CalculatorShell from "../../common/CalculatorShell";
import InlineMessage from "../../common/InlineMessage";

const DEFAULT_MAX_FILE_SIZE = 25 * 1024 * 1024;

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function PDFWorkspace({
  title = "PDF Workspace",
  headerTitle = "📄 PDF Tool",
  headerSubtitle = "Upload your PDF documents to begin.",
  actionLabel = "Process PDFs",
  uploadTitle = "Drag and drop your PDF files here",
  uploadDescription = "Upload PDF files up to 25 MB each.",
  browseLabel = "Browse PDFs",
  filesTitle = "Selected PDF Files",
  allowMultiple = true,
  minimumFiles = 1,
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  onProcess,
}) {
  const inputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const clearFiles = () => {
    setSelectedFiles([]);
    setError("");
    setIsDragging(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleFiles = (fileList) => {
    setError("");

    const incomingFiles = Array.from(fileList || []);

    if (incomingFiles.length === 0) {
      return;
    }

    const invalidFile = incomingFiles.find(
      (file) =>
        file.type !== "application/pdf" &&
        !file.name.toLowerCase().endsWith(".pdf"),
    );

    if (invalidFile) {
      setError("Please select PDF files only.");
      return;
    }

    const oversizedFile = incomingFiles.find(
      (file) => file.size > maxFileSize,
    );

    if (oversizedFile) {
      setError(
        `Each PDF must be smaller than ${formatFileSize(maxFileSize)}.`,
      );
      return;
    }

    setSelectedFiles((currentFiles) => {
      const nextFiles = allowMultiple
        ? [...currentFiles, ...incomingFiles]
        : incomingFiles.slice(0, 1);

      return nextFiles.filter(
        (file, index, files) =>
          files.findIndex(
            (candidate) =>
              candidate.name === file.name &&
              candidate.size === file.size &&
              candidate.lastModified === file.lastModified,
          ) === index,
      );
    });
  };

  const removeFile = (fileToRemove) => {
    setSelectedFiles((currentFiles) =>
      currentFiles.filter((file) => file !== fileToRemove),
    );
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFiles.length < minimumFiles) {
      setError(
        minimumFiles === 1
          ? "Please select a PDF before continuing."
          : `Please select at least ${minimumFiles} PDF files before continuing.`,
      );
      return;
    }

    setError("");

    if (onProcess) {
      onProcess(selectedFiles);
    }
  };

  return (
    <CalculatorShell title={title}>
      <CalculatorHeader
        title={headerTitle}
        subtitle={headerSubtitle}
      />

      <form noValidate onSubmit={handleSubmit}>
        <div
          onDragEnter={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();

            if (event.currentTarget === event.target) {
              setIsDragging(false);
            }
          }}
          onDrop={(event) => {
            event.preventDefault();
            setIsDragging(false);
            handleFiles(event.dataTransfer.files);
          }}
          className={`rounded-2xl border-2 border-dashed p-8 text-center transition sm:p-10 ${
            isDragging
              ? "border-green-600 bg-green-50"
              : "border-slate-300 bg-slate-50 hover:border-green-500"
          }`}
        >
          <input
            ref={inputRef}
            id="pdf-workspace-files"
            type="file"
            accept=".pdf,application/pdf"
            multiple={allowMultiple}
            onChange={(event) => handleFiles(event.target.files)}
            className="sr-only"
          />

          <div
            aria-hidden="true"
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl"
          >
            📄
          </div>

          <h3 className="mt-5 text-xl font-bold text-slate-900">
            {uploadTitle}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {uploadDescription}
          </p>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-6 h-12 rounded-xl bg-green-700 px-6 font-semibold text-white transition hover:bg-green-800"
          >
            {browseLabel}
          </button>
        </div>

        {error && <InlineMessage type="error">{error}</InlineMessage>}

        {selectedFiles.length > 0 && (
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                {filesTitle}
              </h3>

              <p className="text-sm font-semibold text-green-700">
                {selectedFiles.length}{" "}
                {selectedFiles.length === 1 ? "file" : "files"} selected
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {selectedFiles.map((file, index) => (
                <div
                  key={`${file.name}-${file.size}-${file.lastModified}`}
                  className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900">
                      {index + 1}. {file.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFile(file)}
                    className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        <CalculatorActions
          onReset={clearFiles}
          calculateLabel={actionLabel}
          calculateType="submit"
        />
      </form>
    </CalculatorShell>
  );
}

export default PDFWorkspace;
