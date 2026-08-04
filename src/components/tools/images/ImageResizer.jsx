import ImageWorkspace from "./ImageWorkspace";

const ACCEPTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
];

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

function ImageResizer() {
  return (
    <ImageWorkspace
      title="Image Resizer"
      headerTitle="📐 Image Resizer"
      headerSubtitle="Resize images for websites, social media, documents and printing."
      actionLabel="Resize Image"
      uploadTitle="Drag and drop your image here"
      uploadDescription="Upload a PNG, JPG/JPEG, or WEBP image up to 10 MB."
      browseLabel="Browse Image"
      previewTitle="Original Image"
      detailsTitle="Image Information"
      acceptedTypes={ACCEPTED_IMAGE_TYPES}
      maxFileSize={MAX_IMAGE_SIZE}
    />
  );
}

export default ImageResizer;
