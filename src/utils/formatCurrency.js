export function formatCurrency(value, currency = "JMD") {
  return new Intl.NumberFormat("en-JM", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}