function InlineMessage({ children, type = "success" }) {
  const styles = {
    success:
      "border-green-200 bg-green-50 text-green-700",

    error:
      "border-red-200 bg-red-50 text-red-700",

    info:
      "border-blue-200 bg-blue-50 text-blue-700",
  };

  return (
    <div
      className={`mt-6 rounded-xl border px-5 py-4 text-sm font-medium transition-all duration-300 ${styles[type]}`}
    >
      {children}
    </div>
  );
}

export default InlineMessage;