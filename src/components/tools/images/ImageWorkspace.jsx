import { useEffect, useRef, useState } from "react";
import CalculatorActions from "../../common/CalculatorActions";
import CalculatorHeader from "../../common/CalculatorHeader";
import CalculatorShell from "../../common/CalculatorShell";
import InlineMessage from "../../common/InlineMessage";

const ACCEPTED_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function ImageWorkspace({
  title = "Image Workspace",
  headerTitle = "🖼️ Upload Your Image",
  headerSubtitle = "Choose an image to begin processing.",
  actionLabel = "Process Image",
  onProcess,
}) {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const clearPreview = () => {
    setSelectedFile(null);
    setPreviewUrl("");
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleFile = (file) => {
    setError("");

    if (!file) {
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setError("Please select a PNG, JPG, JPEG or WEBP image.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Please select an image smaller than 10 MB.");
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select an image before continuing.");
      return;
    }

    setError("");

    if (onProcess) {
      onProcess(selectedFile);
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
            handleFile(event.dataTransfer.files[0]);
          }}
          className={`rounded-2xl border-2 border-dashed p-8 text-center transition sm:p-10 ${
            isDragging
              ? "border-green-600 bg-green-50"
              : "border-slate-300 bg-slate-50 hover:border-green-500"
          }`}
        >
          <input
            ref={inputRef}
            id="image-workspace-file"
            type="file"
            accept=".png,.jpg,.jpeg,.webp,image/png,image/jpeg,image/webp"
            onChange={(event) => handleFile(event.target.files[0])}
            className="sr-only"
          />

          <div
            aria-hidden="true"
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl"
          >
            🖼️
          </div>

          <h3 className="mt-5 text-xl font-bold text-slate-900">
            Drag and drop your image here
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Upload a PNG, JPG, JPEG or WEBP image up to 10 MB.
          </p>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-6 h-12 rounded-xl bg-green-700 px-6 font-semibold text-white transition hover:bg-green-800"
          >
            Browse Image
          </button>
        </div>

        {error && <InlineMessage type="error">{error}</InlineMessage>}

        {selectedFile && previewUrl && (
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Image Preview
                </h3>

                <div className="mt-4 flex min-h-64 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <img
                    src={previewUrl}
                    alt={`Preview of ${selectedFile.name}`}
                    className="max-h-96 max-w-full object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  File Information
                </h3>

                <dl className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 px-4">
                  <div className="flex justify-between gap-4 py-4">
                    <dt className="font-semibold text-slate-600">Name</dt>
                    <dd className="break-all text-right font-medium text-slate-900">
                      {selectedFile.name}
                    </dd>
                  </div>

                  <div className="flex justify-between gap-4 py-4">
                    <dt className="font-semibold text-slate-600">Type</dt>
                    <dd className="text-right font-medium text-slate-900">
                      {selectedFile.type}
                    </dd>
                  </div>

                  <div className="flex justify-between gap-4 py-4">
                    <dt className="font-semibold text-slate-600">Size</dt>
                    <dd className="text-right font-medium text-slate-900">
                      {formatFileSize(selectedFile.size)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        )}

        <CalculatorActions
          onReset={clearPreview}
          calculateLabel={actionLabel}
          calculateType="submit"
        />
      </form>
    </CalculatorShell>
  );
}

export default ImageWorkspace;
