import { useState } from "react";

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

  const clearResults = () => {
    setPaymentAmount(null);
    setTotalInterest(null);
    setTotalPayment(null);
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
      setPaymentAmount(null);
      setTotalPayment(null);
      setTotalInterest(null);
      return;
    }

    setError("");

    const monthlyRate = annualRate / 100 / 12;
    const monthlyPayments = termYears * 12;
    const x = Math.pow(1 + monthlyRate, monthlyPayments);
    const monthly = (principal * monthlyRate * x) / (x - 1);

    let payment = monthly;
    let numberOfPayments = monthlyPayments;

    if (frequency === "fortnightly") {
      payment = (monthly * 12) / 26;
      numberOfPayments = termYears * 26;
    }

    if (frequency === "weekly") {
      payment = (monthly * 12) / 52;
      numberOfPayments = termYears * 52;
    }

    const total = payment * numberOfPayments;
    const interestPaid = total - principal;

    setPaymentAmount(payment);
    setTotalPayment(total);
    setTotalInterest(interestPaid);
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
    <div className="w-full max-w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold">Loan Calculator</h2>

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
            placeholder="e.g. 500,000"
            className="h-14 w-full rounded-xl border px-4"
          />
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
            placeholder="e.g. 8"
            className="h-14 w-full rounded-xl border px-4"
          />
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
            placeholder="e.g. 5"
            className="h-14 w-full rounded-xl border px-4"
          />
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
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={calculateLoan}
          className="rounded-xl bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800"
        >
          Calculate
        </button>

        <button
          onClick={resetCalculator}
          className="rounded-xl border border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:border-green-700 hover:text-green-700"
        >
          Reset
        </button>
      </div>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {paymentAmount && (
        <>
          <div className="mt-10 grid gap-4 xl:grid-cols-3">
            <div className="rounded-xl bg-green-50 p-6">
              <p className="text-sm text-slate-500">{paymentLabel}</p>
              <h3 className="mt-2 whitespace-nowrap text-2xl font-bold text-green-700">
                {formatCurrency(paymentAmount)}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{paymentSubtitle}</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-6">
              <p className="text-sm text-slate-500">Total Interest</p>
              <h3 className="mt-2 whitespace-nowrap text-2xl font-bold text-blue-700">
                {formatCurrency(totalInterest)}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Interest over loan life
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-6">
              <p className="text-sm text-slate-500">Total Repayment</p>
              <h3 className="mt-2 whitespace-nowrap text-2xl font-bold text-orange-700">
                {formatCurrency(totalPayment)}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Principal + interest
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">Loan Summary</h3>

            <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              <span className="text-slate-600">Loan Amount</span>
              <strong>{formatCurrency(parseFloat(amount))}</strong>

              <span className="text-slate-600">Interest Rate</span>
              <strong>{parseFloat(interest).toFixed(2)}%</strong>

              <span className="text-slate-600">Loan Term</span>
              <strong>{years} years</strong>

              <span className="text-slate-600">Payment Frequency</span>
              <strong>{frequencyLabel}</strong>

              <span className="text-slate-600">{paymentLabel}</span>
              <strong>{formatCurrency(paymentAmount)}</strong>

              <span className="text-slate-600">Total Interest</span>
              <strong>{formatCurrency(totalInterest)}</strong>

              <span className="text-slate-600">Total Repayment</span>
              <strong>{formatCurrency(totalPayment)}</strong>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-green-100 bg-white p-6">
            <h3 className="text-xl font-bold text-slate-900">
              First Payment Preview
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              This is an estimate of your first payment. A full amortization
              schedule will be added later.
            </p>
          </div>
        </>
      )}

      <div className="mt-8 rounded-xl bg-slate-100 p-4 text-sm text-slate-600">
        <strong>Disclaimer:</strong> This calculator provides an estimate only.
        Actual loan repayments may vary depending on lender fees, insurance,
        taxes, and lending policies.
      </div>
    </div>
  );
}

export default LoanCalculator;