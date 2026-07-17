import {
  ANNUAL_TAX_FREE_THRESHOLD,
  UPPER_TAX_BRACKET_START,
  STANDARD_INCOME_TAX_RATE,
  UPPER_INCOME_TAX_RATE,
} from "../constants/jamaicaPayroll";

export function calculateIncomeTax(annualIncome) {
  const taxableIncome = Math.max(
    annualIncome - ANNUAL_TAX_FREE_THRESHOLD,
    0
  );

  const incomeTaxAt25Percent =
    Math.min(taxableIncome, UPPER_TAX_BRACKET_START) *
    STANDARD_INCOME_TAX_RATE;

  const incomeTaxAt30Percent =
    Math.max(taxableIncome - UPPER_TAX_BRACKET_START, 0) *
    UPPER_INCOME_TAX_RATE;

  const totalIncomeTax =
    incomeTaxAt25Percent + incomeTaxAt30Percent;

  const afterTaxIncome =
    annualIncome - totalIncomeTax;

  const effectiveTaxRate =
    annualIncome > 0
      ? (totalIncomeTax / annualIncome) * 100
      : 0;

  const marginalTaxRate =
    taxableIncome <= 0
      ? 0
      : taxableIncome <= UPPER_TAX_BRACKET_START
        ? STANDARD_INCOME_TAX_RATE * 100
        : UPPER_INCOME_TAX_RATE * 100;

  return {
    annualIncome,
    taxableIncome,
    incomeTaxAt25Percent,
    incomeTaxAt30Percent,
    totalIncomeTax,
    afterTaxIncome,
    effectiveTaxRate,
    marginalTaxRate,
  };
}