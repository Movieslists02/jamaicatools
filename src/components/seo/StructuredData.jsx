import { Helmet } from "react-helmet-async";

function StructuredData({ data }) {
  if (!data) {
    return null;
  }

  const entries = Array.isArray(data) ? data : [data];

  return (
    <Helmet>
      {entries.filter(Boolean).map((entry, index) => (
        <script
          key={`${entry["@type"] ?? "schema"}-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}

export default StructuredData;
