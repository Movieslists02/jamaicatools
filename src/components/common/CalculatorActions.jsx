function CalculatorActions({
  onCalculate,
  onReset,
  onCopy,
  disableCopy = false,
  calculateLabel = "Calculate",
  resetLabel = "Reset",
  copyLabel = "📋 Copy Results",
  copiedLabel = "✅ Copied!",
  isCopied = false,
  calculateType = "button",
}) {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <button
        type={calculateType}
        onClick={onCalculate}
        className="h-14 flex-1 rounded-xl bg-green-700 px-8 font-semibold text-white transition hover:bg-green-800"
      >
        {calculateLabel}
      </button>

      <button
        type="button"
        onClick={onReset}
        className="h-14 rounded-xl border border-slate-300 px-8 font-semibold text-slate-700 transition hover:border-green-700 hover:text-green-700"
      >
        {resetLabel}
      </button>

      {onCopy && (
        <button
          type="button"
          onClick={onCopy}
          disabled={disableCopy}
          className={`h-14 rounded-xl px-8 font-semibold transition-all duration-300 ${
            isCopied
              ? "border border-green-600 bg-green-600 text-white"
              : "border border-blue-300 text-blue-700 hover:bg-blue-50"
          } disabled:cursor-not-allowed disabled:opacity-40`}
        >
          {isCopied ? copiedLabel : copyLabel}
        </button>
      )}
    </div>
  );
}

export default CalculatorActions;