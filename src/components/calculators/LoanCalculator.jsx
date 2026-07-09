import { useState } from "react";
import ResultCard from "../common/ResultCard";
import CalculatorShell from "../common/CalculatorShell";
import CalculatorHeader from "../common/CalculatorHeader";
import CalculatorSummary from "../common/CalculatorSummary";
import CalculatorActions from "../common/CalculatorActions";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-JM", {
    style: "currency",
    currency: "JMD",
    minimumFractionDigits: 2,
  }).format(value);

function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");
  const [frequency, setFrequency] = useState("monthly");
  const [error, setError] = useState("");

  const [paymentAmount, setPaymentAmount] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [firstPrincipal, setFirstPrincipal] = useState(null);
  const [firstInterest, setFirstInterest] = useState(null);
  const [firstBalance, setFirstBalance] = useState(null);

  const clearResults = () => {
    setPaymentAmount(null);
    setTotalInterest(null);
    setTotalPayment(null);
    setFirstPrincipal(null);
    setFirstInterest(null);
    setFirstBalance(null);
    setError("");
  };

  const resetCalculator = () => {
    setAmount("");
    setInterest("");
    setYears("");
    setFrequency("monthly");
    clearResults();
  };

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(interest);
    const termYears = parseFloat(years);

    if (
      isNaN(principal) ||
      isNaN(annualRate) ||
      isNaN(termYears) ||
      principal <= 0 ||
      annualRate <= 0 ||
      termYears <= 0
    ) {
      setError("Please enter a valid loan amount, interest rate, and loan term.");
      clearResults();
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    const monthlyPayments = termYears * 12;
    const x = Math.pow(1 + monthlyRate, monthlyPayments);
    const monthly = (principal * monthlyRate * x) / (x - 1);

    let payment = monthly;
    let numberOfPayments = monthlyPayments;
    let periodInterestRate = monthlyRate;

    if (frequency === "fortnightly") {
      payment = (monthly * 12) / 26;
      numberOfPayments = termYears * 26;
      periodInterestRate = annualRate / 100 / 26;
    }

    if (frequency === "weekly") {
      payment = (monthly * 12) / 52;
      numberOfPayments = termYears * 52;
      periodInterestRate = annualRate / 100 / 52;
    }

    const total = payment * numberOfPayments;
    const interestPaid = total - principal;

    const firstInterestAmount = principal * periodInterestRate;
    const firstPrincipalAmount = payment - firstInterestAmount;
    const remainingBalance = principal - firstPrincipalAmount;

    setError("");
    setPaymentAmount(payment);
    setTotalPayment(total);
    setTotalInterest(interestPaid);
    setFirstInterest(firstInterestAmount);
    setFirstPrincipal(firstPrincipalAmount);
    setFirstBalance(remainingBalance);
  };

  const paymentLabel =
    frequency === "monthly"
      ? "Monthly Payment"
      : frequency === "fortnightly"
      ? "Fortnightly Payment"
      : "Weekly Payment";

  const paymentSubtitle =
    frequency === "monthly"
      ? "Due every month"
      : frequency === "fortnightly"
      ? "Due every 2 weeks"
      : "Due every week";

  const frequencyLabel = frequency.charAt(0).toUpperCase() + frequency.slice(1);

  return (
  <CalculatorShell title="Loan Calculator">
    <CalculatorHeader
      title="💳 Loan Repayment Calculator"
      subtitle="Estimate your repayments before applying for a loan."
    />

    <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-semibold">Loan Amount</label>
          <input
            type="number"
            min="1"
            step="1000"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              clearResults();
            }}
            placeholder="500000"
            className="h-14 w-full rounded-xl border px-4"
          />
          <p className="mt-2 text-xs text-slate-500">Example: 500000</p>
        </div>

        <div>
          <label className="mb-2 block font-semibold">Interest Rate (%)</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={interest}
            onChange={(e) => {
              setInterest(e.target.value);
              clearResults();
            }}
            placeholder="8"
            className="h-14 w-full rounded-xl border px-4"
          />
          <p className="mt-2 text-xs text-slate-500">Annual interest rate</p>
        </div>

        <div>
          <label className="mb-2 block font-semibold">Loan Term (Years)</label>
          <input
            type="number"
            min="1"
            max="40"
            value={years}
            onChange={(e) => {
              setYears(e.target.value);
              clearResults();
            }}
            placeholder="5"
            className="h-14 w-full rounded-xl border px-4"
          />
          <p className="mt-2 text-xs text-slate-500">Years to repay</p>
        </div>

        <div>
          <label className="mb-2 block font-semibold">Payment Frequency</label>
          <select
            value={frequency}
            onChange={(e) => {
              setFrequency(e.target.value);
              clearResults();
            }}
            className="h-14 w-full rounded-xl border px-4"
          >
            <option value="monthly">Monthly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="weekly">Weekly</option>
          </select>
          <p className="mt-2 text-xs text-slate-500">Choose repayment schedule</p>
        </div>
      </div>

      <CalculatorActions
  onCalculate={calculateLoan}
  onReset={resetCalculator}
  calculateLabel="Calculate Loan Payment"
/>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {paymentAmount && (
        <>
          <div className="mt-10 grid gap-4 xl:grid-cols-3">
  <ResultCard
    label={paymentLabel}
    value={formatCurrency(paymentAmount)}
    helper={paymentSubtitle}
    color="green"
  />

  <ResultCard
    label="Total Interest"
    value={formatCurrency(totalInterest)}
    helper="Interest over loan life"
    color="blue"
  />

  <ResultCard
    label="Total Repayment"
    value={formatCurrency(totalPayment)}
    helper="Principal + interest"
    color="orange"
  />
</div>

          <CalculatorSummary
  title="Loan Summary"
  items={[
    {
      label: "Loan Amount",
      value: formatCurrency(parseFloat(amount)),
      color: "text-slate-900",
    },
    {
      label: "Interest Rate",
      value: `${parseFloat(interest).toFixed(2)}%`,
      color: "text-green-700",
    },
    {
      label: "Loan Term",
      value: `${years} years`,
    },
    {
      label: "Payment Frequency",
      value: frequencyLabel,
    },
    {
      label: paymentLabel,
      value: formatCurrency(paymentAmount),
      color: "text-green-700",
    },
    {
      label: "Total Interest",
      value: formatCurrency(totalInterest),
      color: "text-blue-700",
    },
    {
      label: "Total Repayment",
      value: formatCurrency(totalPayment),
      color: "text-orange-700",
    },
  ]}
/>

          <div className="mt-8 rounded-2xl border border-green-100 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              First Payment Preview
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              <span className="text-slate-600">Payment Amount</span>
              <strong>{formatCurrency(paymentAmount)}</strong>

              <span className="text-slate-600">Estimated Interest</span>
              <strong>{formatCurrency(firstInterest)}</strong>

              <span className="text-slate-600">Estimated Principal</span>
              <strong>{formatCurrency(firstPrincipal)}</strong>

              <span className="text-slate-600">Remaining Balance</span>
              <strong>{formatCurrency(firstBalance)}</strong>
            </div>
          </div>
        </>
      )}

      <div className="mt-8 rounded-xl bg-slate-100 p-4 text-sm text-slate-600">
        <strong>Disclaimer:</strong> This calculator provides an estimate only.
        Actual loan repayments may vary depending on lender fees, insurance,
        taxes, and lending policies.
      </div>
    </CalculatorShell>
  );
}

export default LoanCalculator;