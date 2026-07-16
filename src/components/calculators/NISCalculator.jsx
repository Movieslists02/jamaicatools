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

const EMPLOYEE_RATE = 0.03;
const EMPLOYER_RATE = 0.03;
const SELF_EMPLOYED_RATE = 0.06;
const ANNUAL_INSURABLE_WAGE_CEILING = 5000000;

function NISCalculator() {
  const [income, setIncome] = useState("");
  const [period, setPeriod] = useState("monthly");
  const [contributorType, setContributorType] = useState("employee");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const clearResults = () => {
    setResult(null);
    setError("");
  };

  const resetCalculator = () => {
    setIncome("");
    setPeriod("monthly");
    setContributorType("employee");
    clearResults();
  };

  const calculateNIS = () => {
    const enteredIncome = Number.parseFloat(income);

    if (!Number.isFinite(enteredIncome) || enteredIncome <= 0) {
      clearResults();
      setError("Please enter a valid gross income amount.");
      return;
    }

    if (enteredIncome > 1000000000) {
      clearResults();
      setError("Please enter a realistic income amount.");
      return;
    }

    const annualIncome =
      period === "weekly"
        ? enteredIncome * 52
        : period === "fortnightly"
          ? enteredIncome * 26
          : period === "monthly"
            ? enteredIncome * 12
            : enteredIncome;

    const insurableEarnings = Math.min(
      annualIncome,
      ANNUAL_INSURABLE_WAGE_CEILING,
    );

    const employeeContribution =
      contributorType === "employee"
        ? insurableEarnings * EMPLOYEE_RATE
        : 0;

    const employerContribution =
      contributorType === "employee"
        ? insurableEarnings * EMPLOYER_RATE
        : 0;

    const selfEmployedContribution =
      contributorType === "self-employed"
        ? insurableEarnings * SELF_EMPLOYED_RATE
        : 0;

    const totalContribution =
      contributorType === "employee"
        ? employeeContribution + employerContribution
        : selfEmployedContribution;

    const personalContribution =
      contributorType === "employee"
        ? employeeContribution
        : selfEmployedContribution;

    const incomeAfterPersonalNIS = annualIncome - personalContribution;

    setError("");
    setResult({
      annualIncome,
      insurableEarnings,
      employeeContribution,
      employerContribution,
      selfEmployedContribution,
      totalContribution,
      personalContribution,
      incomeAfterPersonalNIS,
      ceilingReached: annualIncome > ANNUAL_INSURABLE_WAGE_CEILING,
    });
  };

  return (
    <CalculatorShell title="Jamaica NIS Calculator">
      <CalculatorHeader
        title="🛡️ National Insurance Scheme Calculator"
        subtitle="Estimate employee, employer or self-employed NIS contributions."
      />

      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          calculateNIS();
        }}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold" htmlFor="nis-income">
              Gross Income
            </label>

            <input
              id="nis-income"
              type="number"
              min="1"
              step="1"
              value={income}
              onChange={(event) => {
                setIncome(event.target.value);
                clearResults();
              }}
              placeholder="Example: 150000"
              className="h-14 w-full rounded-xl border px-4"
            />

            <p className="mt-2 text-xs text-slate-500">
              Enter income before statutory deductions.
            </p>
          </div>

          <div>
            <label className="mb-2 block font-semibold" htmlFor="nis-period">
              Income Period
            </label>

            <select
              id="nis-period"
              value={period}
              onChange={(event) => {
                setPeriod(event.target.value);
                clearResults();
              }}
              className="h-14 w-full rounded-xl border px-4"
            >
              <option value="weekly">Weekly</option>
              <option value="fortnightly">Fortnightly</option>
              <option value="monthly">Monthly</option>
              <option value="annual">Annual</option>
            </select>

            <p className="mt-2 text-xs text-slate-500">
              Choose how the income is paid.
            </p>
          </div>

          <div className="md:col-span-2">
            <label
              className="mb-2 block font-semibold"
              htmlFor="contributor-type"
            >
              Contributor Type
            </label>

            <select
              id="contributor-type"
              value={contributorType}
              onChange={(event) => {
                setContributorType(event.target.value);
                clearResults();
              }}
              className="h-14 w-full rounded-xl border px-4"
            >
              <option value="employee">Employee and Employer</option>
              <option value="self-employed">Self-Employed</option>
            </select>
          </div>
        </div>

        <CalculatorActions
          onReset={resetCalculator}
          calculateLabel="Calculate NIS"
          calculateType="submit"
        />
      </form>

      {error && <InlineMessage type="error">{error}</InlineMessage>}

      {result && (
        <>
          <div className="mt-10 grid gap-4 xl:grid-cols-3">
            <ResultCard
              label={
                contributorType === "employee"
                  ? "Employee Contribution"
                  : "Self-Employed Contribution"
              }
              value={formatCurrency(result.personalContribution)}
              helper="Estimated annual personal contribution"
              color="blue"
            />

            <ResultCard
              label="Total NIS Contribution"
              value={formatCurrency(result.totalContribution)}
              helper={
                contributorType === "employee"
                  ? "Employee plus employer"
                  : "Self-employed total"
              }
              color="green"
            />

            <ResultCard
              label="Insurable Earnings"
              value={formatCurrency(result.insurableEarnings)}
              helper="Income used to calculate NIS"
              color="orange"
            />
          </div>

          <CalculatorSummary
            title="NIS Contribution Summary"
            items={[
              {
                label: "Annual Income",
                value: formatCurrency(result.annualIncome),
                color: "text-slate-900",
              },
              {
                label: "Annual Wage Ceiling",
                value: formatCurrency(ANNUAL_INSURABLE_WAGE_CEILING),
              },
              {
                label: "Insurable Earnings",
                value: formatCurrency(result.insurableEarnings),
                color: "text-blue-700",
              },
              ...(contributorType === "employee"
                ? [
                    {
                      label: "Employee Rate",
                      value: "3.00%",
                    },
                    {
                      label: "Employee Contribution",
                      value: formatCurrency(result.employeeContribution),
                      color: "text-blue-700",
                    },
                    {
                      label: "Employer Rate",
                      value: "3.00%",
                    },
                    {
                      label: "Employer Contribution",
                      value: formatCurrency(result.employerContribution),
                      color: "text-purple-700",
                    },
                  ]
                : [
                    {
                      label: "Self-Employed Rate",
                      value: "6.00%",
                    },
                    {
                      label: "Self-Employed Contribution",
                      value: formatCurrency(
                        result.selfEmployedContribution,
                      ),
                      color: "text-blue-700",
                    },
                  ]),
              {
                label: "Total NIS Contribution",
                value: formatCurrency(result.totalContribution),
                color: "text-green-700",
              },
              {
                label: "Income After Personal NIS",
                value: formatCurrency(result.incomeAfterPersonalNIS),
                color: "text-green-700",
              },
            ]}
          />

          {result.ceilingReached && (
            <InlineMessage type="info">
              Your annual income exceeds the J$5,000,000 insurable wage
              ceiling. Contributions were calculated using the ceiling.
            </InlineMessage>
          )}

          <CalculatorSection title="💡 Did You Know?" tone="blue">
            <p className="text-sm leading-6 text-slate-700">
              NIS provides social-security benefits including retirement,
              invalidity, employment-injury and survivor benefits. Employees
              and employers contribute equal portions, while self-employed
              contributors pay the full contribution.
            </p>
          </CalculatorSection>
        </>
      )}

      <ToolDisclaimer>
        This calculator provides an estimate based on a 6% combined NIS rate
        and a J$5,000,000 annual insurable wage ceiling. Confirm current rates
        and individual contribution requirements with the Ministry of Labour
        and Social Security or Tax Administration Jamaica.
      </ToolDisclaimer>
    </CalculatorShell>
  );
} 

export default NISCalculator;