function CalculatorSummary({ title, items }) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      <div className="mt-5 divide-y divide-slate-200">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between gap-4 py-3">
            <span className={`font-semibold ${item.color || "text-slate-600"}`}>
              {item.label}
            </span>

            <strong className="text-right">{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalculatorSummary;