function CalculatorActions({
  onCalculate,
  onReset,
  onCopy,
  disableCopy,
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={onCalculate}
        className="h-14 flex-1 rounded-xl bg-green-700 px-8 font-semibold text-white transition hover:bg-green-800"
      >
        Calculate
      </button>

      <button
        onClick={onReset}
        className="h-14 rounded-xl border border-slate-300 px-8 font-semibold"
      >
        Reset
      </button>

      <button
        onClick={onCopy}
        disabled={disableCopy}
        className="h-14 rounded-xl border border-blue-300 px-8 font-semibold text-blue-700 disabled:opacity-40"
      >
        📋 Copy Results
      </button>
    </div>
  );
}

export default CalculatorActions;