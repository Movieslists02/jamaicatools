function CalculatorSection({
  title,
  subtitle,
  children,
  tone = "white",
}) {
  const tones = {
    white: "border-slate-200 bg-white",
    green: "border-green-100 bg-white",
    slate: "border-slate-200 bg-slate-50",
    blue: "border-blue-200 bg-blue-50",
  };

  return (
    <section
      className={`mt-8 rounded-2xl border p-6 ${
        tones[tone] || tones.white
      }`}
    >
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
      )}

      <div className="mt-5">{children}</div>
    </section>
  );
}

export default CalculatorSection;