function ToolDisclaimer({ children }) {
  return (
    <div className="mt-8 rounded-xl bg-slate-100 p-4 text-sm text-slate-600">
      <strong>Disclaimer:</strong> {children}
    </div>
  );
}

export default ToolDisclaimer;