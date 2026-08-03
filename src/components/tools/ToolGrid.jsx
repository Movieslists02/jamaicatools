import ToolCard from "./ToolCard";

function ToolGrid({ tools }) {
  if (tools.length === 0) {
    return (
      <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">No tools found</h2>

        <p className="mt-3 text-slate-600">
          Try another keyword or browse all available categories.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default ToolGrid;
