import {
  ANNUAL_TAX_FREE_THRESHOLD,
  UPPER_TAX_BRACKET_START,
  STANDARD_INCOME_TAX_RATE,
  UPPER_INCOME_TAX_RATE,
  NIS_ANNUAL_WAGE_CEILING,
  NIS_EMPLOYEE_RATE,
  NIS_EMPLOYER_RATE,
  NIS_SELF_EMPLOYED_RATE,
  NHT_EMPLOYEE_RATE,
  EDUCATION_TAX_EMPLOYEE_RATE,
} from "../constants/jamaicaPayroll";

export function calculateIncomeTax(annualIncome) {
  const taxableIncome = Math.max(annualIncome - ANNUAL_TAX_FREE_THRESHOLD, 0);

  const incomeTaxAt25Percent =
    Math.min(taxableIncome, UPPER_TAX_BRACKET_START) * STANDARD_INCOME_TAX_RATE;

  const incomeTaxAt30Percent =
    Math.max(taxableIncome - UPPER_TAX_BRACKET_START, 0) *
    UPPER_INCOME_TAX_RATE;

  const totalIncomeTax = incomeTaxAt25Percent + incomeTaxAt30Percent;

  const afterTaxIncome = annualIncome - totalIncomeTax;

  const effectiveTaxRate =
    annualIncome > 0 ? (totalIncomeTax / annualIncome) * 100 : 0;

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

export function calculateNIS(annualIncome, employeeType = "employee") {
  const insurableEarnings = Math.min(annualIncome, NIS_ANNUAL_WAGE_CEILING);

  const employeeContribution =
    employeeType === "employee" ? insurableEarnings * NIS_EMPLOYEE_RATE : 0;

  const employerContribution =
    employeeType === "employee" ? insurableEarnings * NIS_EMPLOYER_RATE : 0;

  const selfEmployedContribution =
    employeeType === "self-employed"
      ? insurableEarnings * NIS_SELF_EMPLOYED_RATE
      : 0;

  const totalContribution =
    employeeType === "employee"
      ? employeeContribution + employerContribution
      : selfEmployedContribution;

  const personalContribution =
    employeeType === "employee"
      ? employeeContribution
      : selfEmployedContribution;

  const incomeAfterPersonalNIS = annualIncome - personalContribution;

  const ceilingReached = annualIncome > NIS_ANNUAL_WAGE_CEILING;

  return {
    annualIncome,
    insurableEarnings,
    employeeContribution,
    employerContribution,
    selfEmployedContribution,
    totalContribution,
    personalContribution,
    incomeAfterPersonalNIS,
    ceilingReached,
  };
}

// Add calculateNHT below calculateNIS
export function calculateNHT(annualIncome) {
  const annualContribution = annualIncome * NHT_EMPLOYEE_RATE;

  const monthlyContribution = annualContribution / 12;

  return {
    annualIncome,
    annualContribution,
    monthlyContribution,
    rate: NHT_EMPLOYEE_RATE,
  };
}

export function calculateEducationTax(annualIncome, annualNisContribution) {
  const annualContribution =
    (annualIncome - annualNisContribution) * EDUCATION_TAX_EMPLOYEE_RATE;

  const monthlyContribution = annualContribution / 12;

  return {
    annualIncome,
    annualContribution,
    monthlyContribution,
    rate: EDUCATION_TAX_EMPLOYEE_RATE,
  };
}

export function calculatePayroll(annualIncome) {
  const nisResult = calculateNIS(annualIncome);
  const nhtResult = calculateNHT(annualIncome);

  const educationTaxResult = calculateEducationTax(
    annualIncome,
    nisResult.personalContribution,
  );

  const incomeTaxResult = calculateIncomeTax(annualIncome);

  const totalDeductions =
    nisResult.personalContribution +
    nhtResult.annualContribution +
    educationTaxResult.annualContribution +
    incomeTaxResult.totalIncomeTax;

  const netPay = annualIncome - totalDeductions;

  return {
    annualIncome,
    paye: incomeTaxResult.totalIncomeTax,
    nis: nisResult.personalContribution,
    nht: nhtResult.annualContribution,
    educationTax: educationTaxResult.annualContribution,
    totalDeductions,
    netPay,
  };
}
