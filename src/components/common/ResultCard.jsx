function ResultCard({ label, value, helper, color = "green" }) {
  const colors = {
    green: "bg-green-50 text-green-700",
    blue: "bg-blue-50 text-blue-700",
    orange: "bg-orange-50 text-orange-700",
    red: "bg-red-50 text-red-700",
    purple: "bg-purple-50 text-purple-700",
    slate: "bg-slate-50 text-slate-900",
  };

  return (
    <div className={`min-w-0 rounded-xl p-6 ${colors[color]}`}>
      <p className="text-sm text-slate-500">{label}</p>

      <h3 className="mt-2 break-words text-lg font-bold sm:text-xl">
        {value}
      </h3>

      {helper && (
        <p className="mt-2 text-sm text-slate-500">
          {helper}
        </p>
      )}
    </div>
  );
}

export default ResultCard;