function LoadingOverlay({ show, text }) {
  if (!show) return null;

  return (
    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">
      <div className="flex items-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-green-700 border-t-transparent" />

        <span className="font-medium text-green-700">
          {text}
        </span>
      </div>
    </div>
  );
}

export default LoadingOverlay;