import { useState } from "react";
import CalculatorActions from "../common/CalculatorActions";
import CalculatorHeader from "../common/CalculatorHeader";
import CalculatorSection from "../common/CalculatorSection";
import CalculatorShell from "../common/CalculatorShell";
import CalculatorSummary from "../common/CalculatorSummary";
import InlineMessage from "../common/InlineMessage";
import ResultCard from "../common/ResultCard";
import ToolDisclaimer from "../common/ToolDisclaimer";

function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weightLb, setWeightLb] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const clearResults = () => {
    setError("");
    setResult(null);
  };

  const resetCalculator = () => {
    setUnitSystem("metric");
    setHeightCm("");
    setWeightKg("");
    setHeightFeet("");
    setHeightInches("");
    setWeightLb("");
    clearResults();
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return {
        label: "Underweight",
        helper: "Below the generally recommended BMI range.",
        color: "orange",
      };
    }

    if (bmi < 25) {
      return {
        label: "Healthy Weight",
        helper: "Within the generally recommended BMI range.",
        color: "green",
      };
    }

    if (bmi < 30) {
      return {
        label: "Overweight",
        helper: "Above the generally recommended BMI range.",
        color: "orange",
      };
    }

    return {
      label: "Obesity Range",
      helper: "Well above the generally recommended BMI range.",
      color: "red",
    };
  };

  const handleCalculateBMI = () => {
    let heightMetres;
    let weightKilograms;

    if (unitSystem === "metric") {
      const parsedHeightCm = Number.parseFloat(heightCm);
      const parsedWeightKg = Number.parseFloat(weightKg);

      if (
        !Number.isFinite(parsedHeightCm) ||
        !Number.isFinite(parsedWeightKg) ||
        parsedHeightCm <= 0 ||
        parsedWeightKg <= 0
      ) {
        clearResults();
        setError("Please enter a valid height and weight.");
        return;
      }

      if (parsedHeightCm > 300 || parsedWeightKg > 700) {
        clearResults();
        setError("Please enter realistic height and weight values.");
        return;
      }

      heightMetres = parsedHeightCm / 100;
      weightKilograms = parsedWeightKg;
    } else {
      const parsedFeet = Number.parseFloat(heightFeet);
      const parsedInches = Number.parseFloat(heightInches || "0");
      const parsedWeightLb = Number.parseFloat(weightLb);

      if (
        !Number.isFinite(parsedFeet) ||
        !Number.isFinite(parsedInches) ||
        !Number.isFinite(parsedWeightLb) ||
        parsedFeet < 0 ||
        parsedInches < 0 ||
        parsedInches >= 12 ||
        parsedWeightLb <= 0
      ) {
        clearResults();
        setError("Please enter a valid height and weight.");
        return;
      }

      const totalInches = parsedFeet * 12 + parsedInches;

      if (totalInches <= 0 || totalInches > 118 || parsedWeightLb > 1540) {
        clearResults();
        setError("Please enter realistic height and weight values.");
        return;
      }

      heightMetres = totalInches * 0.0254;
      weightKilograms = parsedWeightLb * 0.45359237;
    }

    const bmi = weightKilograms / heightMetres ** 2;
    const category = getBMICategory(bmi);
    const healthyWeightMinimum = 18.5 * heightMetres ** 2;
    const healthyWeightMaximum = 24.9 * heightMetres ** 2;

    setError("");
    setResult({
      bmi,
      category,
      heightMetres,
      weightKilograms,
      healthyWeightMinimum,
      healthyWeightMaximum,
    });
  };

  const formatWeightRange = () => {
    if (!result) {
      return "";
    }

    if (unitSystem === "metric") {
      return `${result.healthyWeightMinimum.toFixed(
        1,
      )} kg – ${result.healthyWeightMaximum.toFixed(1)} kg`;
    }

    const minimumLb = result.healthyWeightMinimum / 0.45359237;
    const maximumLb = result.healthyWeightMaximum / 0.45359237;

    return `${minimumLb.toFixed(1)} lb – ${maximumLb.toFixed(1)} lb`;
  };

  return (
    <CalculatorShell title="BMI Calculator">
      <CalculatorHeader
        title="❤️ Body Mass Index Calculator"
        subtitle="Estimate your BMI and see the general weight category associated with the result."
      />

      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          handleCalculateBMI();
        }}
      >
        <div>
          <label className="mb-2 block font-semibold" htmlFor="bmi-unit-system">
            Unit System
          </label>

          <select
            id="bmi-unit-system"
            value={unitSystem}
            onChange={(event) => {
              setUnitSystem(event.target.value);
              clearResults();
            }}
            className="h-14 w-full rounded-xl border px-4"
          >
            <option value="metric">Metric — centimetres and kilograms</option>
            <option value="imperial">Imperial — feet, inches and pounds</option>
          </select>
        </div>

        {unitSystem === "metric" ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label
                className="mb-2 block font-semibold"
                htmlFor="bmi-height-cm"
              >
                Height
              </label>

              <input
                id="bmi-height-cm"
                type="number"
                min="1"
                step="0.1"
                value={heightCm}
                onChange={(event) => {
                  setHeightCm(event.target.value);
                  clearResults();
                }}
                placeholder="Example: 175"
                className="h-14 w-full rounded-xl border px-4"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter your height in centimetres.
              </p>
            </div>

            <div>
              <label
                className="mb-2 block font-semibold"
                htmlFor="bmi-weight-kg"
              >
                Weight
              </label>

              <input
                id="bmi-weight-kg"
                type="number"
                min="1"
                step="0.1"
                value={weightKg}
                onChange={(event) => {
                  setWeightKg(event.target.value);
                  clearResults();
                }}
                placeholder="Example: 75"
                className="h-14 w-full rounded-xl border px-4"
              />

              <p className="mt-2 text-xs text-slate-500">
                Enter your weight in kilograms.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <label
                className="mb-2 block font-semibold"
                htmlFor="bmi-height-feet"
              >
                Height — Feet
              </label>

              <input
                id="bmi-height-feet"
                type="number"
                min="0"
                step="1"
                value={heightFeet}
                onChange={(event) => {
                  setHeightFeet(event.target.value);
                  clearResults();
                }}
                placeholder="Example: 5"
                className="h-14 w-full rounded-xl border px-4"
              />
            </div>

            <div>
              <label
                className="mb-2 block font-semibold"
                htmlFor="bmi-height-inches"
              >
                Height — Inches
              </label>

              <input
                id="bmi-height-inches"
                type="number"
                min="0"
                max="11.99"
                step="0.1"
                value={heightInches}
                onChange={(event) => {
                  setHeightInches(event.target.value);
                  clearResults();
                }}
                placeholder="Example: 9"
                className="h-14 w-full rounded-xl border px-4"
              />
            </div>

            <div>
              <label
                className="mb-2 block font-semibold"
                htmlFor="bmi-weight-lb"
              >
                Weight — Pounds
              </label>

              <input
                id="bmi-weight-lb"
                type="number"
                min="1"
                step="0.1"
                value={weightLb}
                onChange={(event) => {
                  setWeightLb(event.target.value);
                  clearResults();
                }}
                placeholder="Example: 165"
                className="h-14 w-full rounded-xl border px-4"
              />
            </div>
          </div>
        )}

        <CalculatorActions
          onReset={resetCalculator}
          calculateLabel="Calculate BMI"
          calculateType="submit"
        />
      </form>

      {error && <InlineMessage type="error">{error}</InlineMessage>}

      {result && (
        <>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ResultCard
              label="Your BMI"
              value={result.bmi.toFixed(1)}
              helper="Body Mass Index result"
              color="blue"
            />

            <ResultCard
              label="BMI Category"
              value={result.category.label}
              helper={result.category.helper}
              color={result.category.color}
            />

            <ResultCard
              label="Healthy Weight Range"
              value={formatWeightRange()}
              helper="Estimated range for BMI 18.5 to 24.9"
              color="green"
            />
          </div>

          <CalculatorSummary
            title="BMI Summary"
            items={[
              {
                label: "BMI",
                value: result.bmi.toFixed(1),
                color: "text-blue-700",
              },
              {
                label: "Category",
                value: result.category.label,
                color: "text-green-700",
              },
              {
                label: "Healthy BMI Range",
                value: "18.5 – 24.9",
              },
              {
                label: "Estimated Healthy Weight Range",
                value: formatWeightRange(),
              },
            ]}
          />

          <CalculatorSection title="How to Interpret BMI" tone="blue">
            <div className="space-y-2 text-sm leading-6 text-slate-700">
              <p>
                Below 18.5 is generally classified as underweight, 18.5 to 24.9
                as healthy weight, 25.0 to 29.9 as overweight, and 30.0 or above
                as obesity.
              </p>

              <p>
                BMI is a screening measurement and does not directly measure
                body fat, muscle mass, fitness or overall health.
              </p>
            </div>
          </CalculatorSection>
        </>
      )}

      <ToolDisclaimer>
        This calculator provides a general BMI estimate for adults. It is not a
        diagnosis and may not be suitable for children, pregnant persons,
        athletes or people with high muscle mass. Consult a qualified healthcare
        professional for personalised advice.
      </ToolDisclaimer>
    </CalculatorShell>
  );
}

export default BMICalculator;
