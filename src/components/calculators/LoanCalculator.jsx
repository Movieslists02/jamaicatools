import { useState } from "react";

function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");
  const [error, setError] = useState("");

  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);


const formatCurrency = (value) =>
  new Intl.NumberFormat("en-JM", {
    style: "currency",
    currency: "JMD",
    minimumFractionDigits: 2,
  }).format(value);

  const resetCalculator = () => {
  setAmount("");
  setInterest("");
  setYears("");
  setMonthlyPayment(null);
  setTotalInterest(null);
  setTotalPayment(null);
  setError("");
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
      setMonthlyPayment(null);
      setTotalPayment(null);
      setTotalInterest(null);
      return;
    }

    setError("");

    const monthlyRate = annualRate / 100 / 12;
    const payments = termYears * 12;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (principal * monthlyRate * x) / (x - 1);
    const total = monthly * payments;
    const interestPaid = total - principal;

    setMonthlyPayment(monthly);
    setTotalPayment(total);
    setTotalInterest(interestPaid);
  };

  return (
    <div className="w-full max-w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-8 text-2xl font-bold">Loan Calculator</h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-semibold">Loan Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="500000" className="w-full rounded-xl border p-3" />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Interest Rate (%)</label>
          <input type="number" value={interest} onChange={(e) => setInterest(e.target.value)} placeholder="8" className="w-full rounded-xl border p-3" />
        </div>

        <div>
          <label className="mb-2 block font-semibold">Loan Term (Years)</label>
          <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="5" className="w-full rounded-xl border p-3" />
        </div>
      </div>

      <button onClick={calculateLoan} className="mt-8 rounded-xl bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800">
        Calculate
      </button>

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {monthlyPayment && (
  <>
    <div className="mt-10 grid gap-4 xl:grid-cols-3">
      <div className="rounded-xl bg-green-50 p-6">
        <p className="text-sm text-slate-500">Monthly Payment</p>
        <h3 className="mt-2 whitespace-nowrap text-2xl font-bold text-green-700">
          {formatCurrency(monthlyPayment)}
        </h3>
        <p className="mt-2 text-sm text-slate-500">Due every month</p>
      </div>

      <div className="rounded-xl bg-blue-50 p-6">
        <p className="text-sm text-slate-500">Total Interest</p>
        <h3 className="mt-2 whitespace-nowrap text-2xl font-bold text-blue-700">
          {formatCurrency(totalInterest)}
        </h3>
        <p className="mt-2 text-sm text-slate-500">Interest over loan life</p>
      </div>

      <div className="rounded-xl bg-orange-50 p-6">
        <p className="text-sm text-slate-500">Total Repayment</p>
        <h3 className="mt-2 whitespace-nowrap text-2xl font-bold text-orange-700">
          {formatCurrency(totalPayment)}
        </h3>
        <p className="mt-2 text-sm text-slate-500">Principal + interest</p>
      </div>
    </div>

    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="text-xl font-bold text-slate-900">Loan Summary</h3>

      <div className="mt-5 space-y-3 text-sm">
        <p>Loan Amount: <strong>{formatCurrency(parseFloat(amount))}</strong></p>
        <p>Interest Rate: <strong>{parseFloat(interest).toFixed(2)}%</strong></p>
        <p>Loan Term: <strong>{years} years</strong></p>
        <p>Monthly Payment: <strong>{formatCurrency(monthlyPayment)}</strong></p>
        <p>Total Interest: <strong>{formatCurrency(totalInterest)}</strong></p>
        <p>Total Repayment: <strong>{formatCurrency(totalPayment)}</strong></p>
      </div>

      <button
        onClick={resetCalculator}
        className="mt-6 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-green-700 hover:text-green-700"
      >
        Reset Calculator
      </button>
    </div>
  </>
)}
    </div>
  );
}

export default LoanCalculator;