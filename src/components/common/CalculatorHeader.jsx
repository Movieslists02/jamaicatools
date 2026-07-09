function CalculatorHeader({ title, subtitle }) {
  return (
    <div className="mb-8 rounded-xl border border-green-200 bg-green-50 p-4">
      <p className="font-semibold text-green-700">
        {title}
      </p>

      <p className="mt-1 text-sm text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}

export default CalculatorHeader;