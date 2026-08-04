import { useEffect, useRef, useState } from "react";
import CalculatorActions from "../../common/CalculatorActions";
import CalculatorHeader from "../../common/CalculatorHeader";
import CalculatorShell from "../../common/CalculatorShell";
import InlineMessage from "../../common/InlineMessage";

const DEFAULT_ACCEPTED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
];

const DEFAULT_MAX_FILE_SIZE = 10 * 1024 * 1024;

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function ImageCollectionWorkspace({
  title = "Image Collection",
  headerTitle = "🖼️ Upload Images",
  headerSubtitle = "Select images to begin.",
  actionLabel = "Process Images",
  uploadTitle = "Drag and drop your images here",
  uploadDescription = "Upload PNG, JPG/JPEG, or WEBP images up to 10 MB each.",
  browseLabel = "Browse Images",
  filesTitle = "Selected Images",
  minimumFiles = 1,
  acceptedTypes = DEFAULT_ACCEPTED_TYPES,
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  onProcess,
}) {
  const inputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const urls = selectedFiles.map((file) => URL.createObjectURL(file));

    setPreviewUrls(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [selectedFiles]);

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
      (file) => !acceptedTypes.includes(file.type),
    );

    if (invalidFile) {
      setError("Please select PNG, JPG/JPEG, or WEBP images only.");
      return;
    }

    const oversizedFile = incomingFiles.find(
      (file) => file.size > maxFileSize,
    );

    if (oversizedFile) {
      setError(
        `Each image must be smaller than ${formatFileSize(maxFileSize)}.`,
      );
      return;
    }

    setSelectedFiles((currentFiles) => {
      const combinedFiles = [...currentFiles, ...incomingFiles];

      return combinedFiles.filter(
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

  const moveFile = (index, direction) => {
    setSelectedFiles((currentFiles) => {
      const targetIndex = index + direction;

      if (
        targetIndex < 0 ||
        targetIndex >= currentFiles.length
      ) {
        return currentFiles;
      }

      const nextFiles = [...currentFiles];
      const [movedFile] = nextFiles.splice(index, 1);

      nextFiles.splice(targetIndex, 0, movedFile);

      return nextFiles;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFiles.length < minimumFiles) {
      setError(
        minimumFiles === 1
          ? "Please select an image before continuing."
          : `Please select at least ${minimumFiles} images before continuing.`,
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
            id="image-collection-files"
            type="file"
            accept=".png,.jpg,.jpeg,.webp,image/png,image/jpeg,image/webp"
            multiple
            onChange={(event) => handleFiles(event.target.files)}
            className="sr-only"
          />

          <div
            aria-hidden="true"
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl"
          >
            🖼️
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
                {selectedFiles.length === 1 ? "image" : "images"} selected
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {selectedFiles.map((file, index) => (
                <div
                  key={`${file.name}-${file.size}-${file.lastModified}`}
                  className="grid gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[96px_1fr_auto] sm:items-center"
                >
                  <div className="flex h-24 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-2">
                    {previewUrls[index] && (
                      <img
                        src={previewUrls[index]}
                        alt={`Preview of ${file.name}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="break-all font-semibold text-slate-900">
                      {index + 1}. {file.name}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => moveFile(index, -1)}
                      disabled={index === 0}
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Up
                    </button>

                    <button
                      type="button"
                      onClick={() => moveFile(index, 1)}
                      disabled={index === selectedFiles.length - 1}
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Down
                    </button>

                    <button
                      type="button"
                      onClick={() => removeFile(file)}
                      className="rounded-xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                    >
                      Remove
                    </button>
                  </div>
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

export default ImageCollectionWorkspace;
