"use strict";
exports.__esModule = true;
//Example - Good
var EmployeeSR = /** @class */ (function () {
    function EmployeeSR(name, payPerHour, pensionContribution, tax) {
        this.name = name;
        this.payPerHour = payPerHour;
        this.pensionContribution = pensionContribution;
        this.tax = tax;
    }
    return EmployeeSR;
}());
exports.EmployeeSR = EmployeeSR;
var Payment = /** @class */ (function () {
    function Payment(employee, hoursWorked) {
        this.employee = employee;
        this.hoursWorked = hoursWorked;
        this.netPay = this.calculateNetPayment();
    }
    Payment.prototype.calculateNetPayment = function () {
        var grossPay = this.calculateGrossPayment();
        var pensionPayment = this.calculatePensionPayment(grossPay);
        var taxPayment = this.calculateTaxPayment(grossPay);
        return grossPay - pensionPayment - taxPayment;
    };
    Payment.prototype.calculateGrossPayment = function () {
        return this.employee.payPerHour * this.hoursWorked;
    };
    Payment.prototype.calculatePensionPayment = function (grossPay) {
        return grossPay / this.employee.pensionContribution;
    };
    Payment.prototype.calculateTaxPayment = function (grossPay) {
        return grossPay / this.employee.tax;
    };
    return Payment;
}());
exports.Payment = Payment;
var Payroll = /** @class */ (function () {
    function Payroll(employee, payment) {
        this.employee = employee;
        this.payment = payment;
    }
    Payroll.prototype.payEmployee = function () {
        console.log(this.employee.name + "'s net payment was £" + this.payment.netPay + " send payslip");
    };
    return Payroll;
}());
exports.Payroll = Payroll;
//Example - Good
var bill = new EmployeeSR("Bill", 10, 10, 10);
var billsPayment = new Payment(bill, 37);
var employeePayroll = new Payroll(bill, billsPayment);
employeePayroll.payEmployee();
