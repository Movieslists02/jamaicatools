import { describe, it, expect } from "vitest";

import {
  calculateIncomeTax,
  calculateNIS,
  calculateNHT,
  calculateEducationTax,
  calculatePayroll,
} from "../payrollCalculator";

describe("Payroll Calculator", () => {
  it("calculates zero salary correctly", () => {
    const payroll = calculatePayroll(0);

    expect(payroll.netPay).toBe(0);
    expect(payroll.totalDeductions).toBe(0);
    expect(payroll.paye).toBe(0);
    expect(payroll.nis).toBe(0);
    expect(payroll.nht).toBe(0);
    expect(payroll.educationTax).toBe(0);
  });

  it("calculates annual salary correctly", () => {
    const payroll = calculatePayroll(6000000);

    expect(payroll.nis).toBe(150000);
    expect(payroll.nht).toBe(120000);
    expect(payroll.educationTax).toBeCloseTo(131625, 2);
    expect(payroll.netPay).toBeCloseTo(4567528.5, 2);
  });
});