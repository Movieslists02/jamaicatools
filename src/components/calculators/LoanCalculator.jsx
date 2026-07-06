import { useState } from "react";

function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
      <h2 className="text-2xl font-bold mb-8">
        Loan Calculator
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        <div>
          <label className="mb-2 block font-semibold">
            Loan Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder="500000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Interest Rate (%)
          </label>

          <input
            type="number"
            value={interest}
            onChange={(e)=>setInterest(e.target.value)}
            placeholder="8"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold">
            Loan Term (Years)
          </label>

          <input
            type="number"
            value={years}
            onChange={(e)=>setYears(e.target.value)}
            placeholder="5"
            className="w-full rounded-xl border p-3"
          />
        </div>

      </div>

      <button
        className="mt-8 rounded-xl bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800"
      >
        Calculate
      </button>
    </div>
  );
}

export default LoanCalculator;