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

const FILE_TYPE_LABELS = {
  "image/png": "PNG",
  "image/jpeg": "JPG or JPEG",
  "image/webp": "WEBP",
};

const FILE_TYPE_EXTENSIONS = {
  "image/png": [".png"],
  "image/jpeg": [".jpg", ".jpeg"],
  "image/webp": [".webp"],
};

function formatFileSize(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatAcceptedTypes(acceptedTypes) {
  const labels = acceptedTypes.map(
    (type) => FILE_TYPE_LABELS[type] || type,
  );

  if (labels.length === 1) {
    return labels[0];
  }

  if (labels.length === 2) {
    return labels.join(" or ");
  }

  return `${labels.slice(0, -1).join(", ")} or ${labels.at(-1)}`;
}

function buildAcceptAttribute(acceptedTypes) {
  const values = acceptedTypes.flatMap((type) => [
    ...(FILE_TYPE_EXTENSIONS[type] || []),
    type,
  ]);

  return values.join(",");
}

function ImageWorkspace({
  title = "Image Workspace",
  headerTitle = "🖼️ Upload Your Image",
  headerSubtitle = "Choose an image to begin processing.",
  actionLabel = "Process Image",
  uploadTitle = "Drag and drop your image here",
  uploadDescription,
  browseLabel = "Browse Image",
  previewTitle = "Image Preview",
  detailsTitle = "File Information",
  acceptedTypes = DEFAULT_ACCEPTED_TYPES,
  maxFileSize = 10 * 1024 * 1024,
  onProcess,
}) {
  const inputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const acceptedTypesLabel = formatAcceptedTypes(acceptedTypes);
  const maximumFileSizeLabel = formatFileSize(maxFileSize);
  const acceptedFiles = buildAcceptAttribute(acceptedTypes);

  const resolvedUploadDescription =
    uploadDescription ||
    `Upload a ${acceptedTypesLabel} image up to ${maximumFileSizeLabel}.`;

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
    setIsDragging(false);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleFile = (file) => {
    setError("");

    if (!file) {
      return;
    }

    if (!acceptedTypes.includes(file.type)) {
      setError(`Please select a ${acceptedTypesLabel} image.`);
      return;
    }

    if (file.size > maxFileSize) {
      setError(
        `Please select an image smaller than ${maximumFileSizeLabel}.`,
      );
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
            accept={acceptedFiles}
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
            {uploadTitle}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {resolvedUploadDescription}
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

        {selectedFile && previewUrl && (
          <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {previewTitle}
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
                  {detailsTitle}
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
