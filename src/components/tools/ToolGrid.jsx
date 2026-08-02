import tools from "../../data/tools";
import ToolCard from "./ToolCard";

function ToolGrid() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}

export default ToolGrid;
