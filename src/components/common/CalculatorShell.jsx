function CalculatorShell({ title, children }) {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      {children}
    </div>
  );
}

export default CalculatorShell;