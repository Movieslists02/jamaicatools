import ImageWorkspace from "./ImageWorkspace";

const ACCEPTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
];

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

function BackgroundRemover() {
  return (
    <ImageWorkspace
      title="Background Remover"
      headerTitle="🪄 AI Background Remover"
      headerSubtitle="Upload an image and prepare it for background removal."
      actionLabel="Remove Background"
      uploadTitle="Drag and drop your image here"
      uploadDescription="Upload a PNG, JPG, JPEG or WEBP image up to 10 MB."
      browseLabel="Browse Image"
      previewTitle="Image Preview"
      detailsTitle="File Information"
      acceptedTypes={ACCEPTED_IMAGE_TYPES}
      maxFileSize={MAX_IMAGE_SIZE}
    />
  );
}

export default BackgroundRemover;
