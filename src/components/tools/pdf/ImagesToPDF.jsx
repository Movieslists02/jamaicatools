import ImageCollectionWorkspace from "../images/ImageCollectionWorkspace";

const ACCEPTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
];

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

function ImagesToPDF() {
  return (
    <ImageCollectionWorkspace
      title="Images to PDF"
      headerTitle="📄 Images to PDF"
      headerSubtitle="Combine multiple images into one organized PDF document."
      actionLabel="Create PDF"
      uploadTitle="Drag and drop your images here"
      uploadDescription="Upload PNG, JPG/JPEG, or WEBP images up to 10 MB each."
      browseLabel="Browse Images"
      filesTitle="Images for PDF"
      minimumFiles={1}
      acceptedTypes={ACCEPTED_IMAGE_TYPES}
      maxFileSize={MAX_IMAGE_SIZE}
    />
  );
}

export default ImagesToPDF;
