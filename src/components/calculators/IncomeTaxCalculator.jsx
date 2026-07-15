import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import CalculatorActions from "../common/CalculatorActions";
import CalculatorHeader from "../common/CalculatorHeader";
import CalculatorSection from "../common/CalculatorSection";
import CalculatorShell from "../common/CalculatorShell";
import CalculatorSummary from "../common/CalculatorSummary";
import InlineMessage from "../common/InlineMessage";
import ResultCard from "../common/ResultCard";
import ToolDisclaimer from "../common/ToolDisclaimer";

const ANNUAL_TAX_FREE_THRESHOLD = 1876614;
const UPPER_TAX_BRACKET_START = 6000000;
const STANDARD_TAX_RATE = 0.25;
const UPPER_TAX_RATE = 0.3;

function IncomeTaxCalculator() {
  const [income, setIncome] = useState("");
  const [period, setPeriod] = useState("annual");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const clearResults = () => {
    setResult(null);
    setError("");
  };

  const resetCalculator = () => {
    setIncome("");
    setPeriod("annual");
    clearResults();
  };

  const calculateTax = () => {
    const enteredIncome = Number.parseFloat(income);

    if (!Number.isFinite(enteredIncome) || enteredIncome <= 0) {
      clearResults();
      setError("Please enter a valid income amount.");
      return;
    }

    if (enteredIncome > 1000000000) {
      clearResults();
      setError("Please enter a realistic income amount.");
      return;
    }

    const annualIncome =
      period === "monthly"
        ? enteredIncome * 12
        : period === "fortnightly"
          ? enteredIncome * 26
          : period === "weekly"
            ? enteredIncome * 52
            : enteredIncome;

    const taxableIncome = Math.max(
      annualIncome - ANNUAL_TAX_FREE_THRESHOLD,
      0,
    );

    const incomeTaxAt25Percent =
      Math.min(taxableIncome, UPPER_TAX_BRACKET_START) * STANDARD_TAX_RATE;

    const incomeTaxAt30Percent =
      Math.max(taxableIncome - UPPER_TAX_BRACKET_START, 0) * UPPER_TAX_RATE;

    const totalIncomeTax = incomeTaxAt25Percent + incomeTaxAt30Percent;
    const afterTaxIncome = annualIncome - totalIncomeTax;

    const effectiveTaxRate =
      annualIncome > 0 ? (totalIncomeTax / annualIncome) * 100 : 0;

    const marginalTaxRate =
      taxableIncome <= 0
        ? 0
        : taxableIncome <= UPPER_TAX_BRACKET_START
          ? 25
          : 30;

    setError("");
    setResult({
      annualIncome,
      taxableIncome,
      incomeTaxAt25Percent,
      incomeTaxAt30Percent,
      totalIncomeTax,
      afterTaxIncome,
      effectiveTaxRate,
      marginalTaxRate,
    });
  };

  return (
    <CalculatorShell title="Jamaica Income Tax Calculator">
      <CalculatorHeader
        title="🇯🇲 Income Tax Estimate"
        subtitle="Estimate Jamaican income tax based on your annualised income."
      />

      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          calculateTax();
        }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold" htmlFor="income">
              Income
            </label>

            <input
              id="income"
              type="number"
              min="1"
              step="1"
              value={income}
              onChange={(event) => {
                setIncome(event.target.value);
                clearResults();
              }}
              placeholder="Example: 2500000"
              className="h-14 w-full rounded-xl border px-4"
            />

            <p className="mt-2 text-xs text-slate-500">
              Enter your income before income tax.
            </p>
          </div>

          <div>
            <label className="mb-2 block font-semibold" htmlFor="income-period">
              Income Period
            </label>

            <select
              id="income-period"
              value={period}
              onChange={(event) => {
                setPeriod(event.target.value);
                clearResults();
              }}
              className="h-14 w-full rounded-xl border px-4"
            >
              <option value="annual">Annual</option>
              <option value="monthly">Monthly</option>
              <option value="fortnightly">Fortnightly</option>
              <option value="weekly">Weekly</option>
            </select>

            <p className="mt-2 text-xs text-slate-500">
              Choose how the income amount is received.
            </p>
          </div>
        </div>

        <CalculatorActions
          onReset={resetCalculator}
          calculateLabel="Calculate Income Tax"
          calculateType="submit"
        />
      </form>

      {error && <InlineMessage type="error">{error}</InlineMessage>}

      {result && (
        <>
          <div className="mt-10 grid gap-4 xl:grid-cols-3">
            <ResultCard
              label="Taxable Income"
              value={formatCurrency(result.taxableIncome)}
              helper="Income above the tax-free threshold"
              color="blue"
            />

            <ResultCard
              label="Estimated Income Tax"
              value={formatCurrency(result.totalIncomeTax)}
              helper="Annual PAYE estimate"
              color="red"
            />

            <ResultCard
              label="After-Tax Income"
              value={formatCurrency(result.afterTaxIncome)}
              helper="Income after PAYE only"
              color="green"
            />
          </div>

          <CalculatorSummary
            title="Income Tax Summary"
            items={[
              {
                label: "Annual Income",
                value: formatCurrency(result.annualIncome),
                color: "text-slate-900",
              },
              {
                label: "Tax-Free Threshold",
                value: formatCurrency(ANNUAL_TAX_FREE_THRESHOLD),
              },
              {
                label: "Taxable Income",
                value: formatCurrency(result.taxableIncome),
                color: "text-blue-700",
              },
              {
                label: "Tax at 25%",
                value: formatCurrency(result.incomeTaxAt25Percent),
              },
              {
                label: "Tax at 30%",
                value: formatCurrency(result.incomeTaxAt30Percent),
              },
              {
                label: "Total Income Tax",
                value: formatCurrency(result.totalIncomeTax),
                color: "text-red-700",
              },
              {
                label: "Effective Tax Rate",
                value: `${result.effectiveTaxRate.toFixed(2)}%`,
              },
              {
                label: "Marginal Tax Rate",
                value: `${result.marginalTaxRate.toFixed(2)}%`,
              },
              {
                label: "After-Tax Income",
                value: formatCurrency(result.afterTaxIncome),
                color: "text-green-700",
              },
            ]}
          />

          <CalculatorSection title="Tax Bracket Breakdown" tone="green">
            <div className="divide-y divide-slate-200">
              <div className="flex justify-between gap-4 py-3">
                <span>Tax-free portion</span>
                <strong className="text-right">
                  {formatCurrency(
                    Math.min(
                      result.annualIncome,
                      ANNUAL_TAX_FREE_THRESHOLD,
                    ),
                  )}
                </strong>
              </div>

              <div className="flex justify-between gap-4 py-3">
                <span>Income taxed at 25%</span>
                <strong className="text-right">
                  {formatCurrency(
                    Math.min(
                      result.taxableIncome,
                      UPPER_TAX_BRACKET_START,
                    ),
                  )}
                </strong>
              </div>

              <div className="flex justify-between gap-4 py-3">
                <span>Income taxed at 30%</span>
                <strong className="text-right">
                  {formatCurrency(
                    Math.max(
                      result.taxableIncome - UPPER_TAX_BRACKET_START,
                      0,
                    ),
                  )}
                </strong>
              </div>
            </div>
          </CalculatorSection>

          <CalculatorSection title="💡 Did You Know?" tone="blue">
            <p className="text-sm leading-6 text-slate-700">
              Jamaica uses progressive income-tax rates. Only the portion of
              taxable income falling within a higher bracket is charged at the
              higher rate.
            </p>
          </CalculatorSection>
        </>
      )}

      <ToolDisclaimer>
        This calculator estimates income tax only. It does not include NIS,
        NHT, Education Tax, pension deductions, exemptions, tax credits or
        employer-specific payroll adjustments.
      </ToolDisclaimer>
    </CalculatorShell>
  );
}

export default IncomeTaxCalculator;