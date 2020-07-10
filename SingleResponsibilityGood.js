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
var payroll = /** @class */ (function () {
    function payroll(employee, payment) {
        this.employee = employee;
        this.payment = payment;
    }
    payroll.prototype.payEmployee = function () {
        console.log(this.employee.name + "'s net payment was £" + this.payment.netPay + " send payslip");
    };
    return payroll;
}());
//Example - Good
var bill = new EmployeeSR("Bill", 10, 10, 10);
var billsPayment = new Payment(bill, 37);
var employeePayroll = new payroll(bill, billsPayment);
employeePayroll.payEmployee();
