import { describe, expect, it } from "vitest";

import { calculatePayroll } from "../payrollCalculator";

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

  it("calculates J$150,000 monthly salary", () => {
    const payroll = calculatePayroll(150000 * 12);

    expect(payroll.paye).toBeCloseTo(0, 2);
    expect(payroll.nis).toBeCloseTo(54000, 2);
    expect(payroll.nht).toBeCloseTo(36000, 2);
    expect(payroll.educationTax).toBeCloseTo(39285, 2);
    expect(payroll.totalDeductions).toBeCloseTo(129285, 2);
    expect(payroll.netPay).toBeCloseTo(1670715, 2);
  });

  it("calculates J$300,000 monthly salary", () => {
    const payroll = calculatePayroll(300000 * 12);

    expect(payroll.paye).toBeCloseTo(430846.5, 2);
    expect(payroll.nis).toBeCloseTo(108000, 2);
    expect(payroll.nht).toBeCloseTo(72000, 2);
    expect(payroll.educationTax).toBeCloseTo(78570, 2);
    expect(payroll.totalDeductions).toBeCloseTo(689416.5, 2);
    expect(payroll.netPay).toBeCloseTo(2910583.5, 2);
  });

  it("calculates J$25,000 weekly salary", () => {
    const payroll = calculatePayroll(25000 * 52);

    expect(payroll.paye).toBeCloseTo(0, 2);
    expect(payroll.nis).toBeCloseTo(39000, 2);
    expect(payroll.nht).toBeCloseTo(26000, 2);
    expect(payroll.educationTax).toBeCloseTo(28372.5, 2);
    expect(payroll.totalDeductions).toBeCloseTo(93372.5, 2);
    expect(payroll.netPay).toBeCloseTo(1206627.5, 2);
  });


 it("calculates J$6,000,000 annual salary", () => {
  const payroll = calculatePayroll(6000000);

  expect(payroll.paye).toBeCloseTo(1030846.5, 2);
  expect(payroll.nis).toBeCloseTo(150000, 2);
  expect(payroll.nht).toBeCloseTo(120000, 2);
  expect(payroll.educationTax).toBeCloseTo(131625, 2);
  expect(payroll.totalDeductions).toBeCloseTo(1432471.5, 2);
  expect(payroll.netPay).toBeCloseTo(4567528.5, 2);
});

});