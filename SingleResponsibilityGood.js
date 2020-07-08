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
var payment = /** @class */ (function () {
    function payment(employee, hoursWorked) {
        this.employee = employee;
        this.hoursWorked = hoursWorked;
    }
    payment.prototype.payEmployee = function () {
        console.log(this.employee.name + "'s net payment was £" + this.calculateNetPayment() + "send payslip");
    };
    payment.prototype.calculateNetPayment = function () {
        var grossPay = this.calculateGrossPayment();
        var pensionPayment = this.calculatePensionPayment(grossPay);
        var taxPayment = this.calculateTaxPayment(grossPay);
        return grossPay - pensionPayment - taxPayment;
    };
    payment.prototype.calculateGrossPayment = function () {
        return this.employee.payPerHour * this.hoursWorked;
    };
    payment.prototype.calculatePensionPayment = function (grossPay) {
        return grossPay / this.employee.pensionContribution;
    };
    payment.prototype.calculateTaxPayment = function (grossPay) {
        return grossPay / this.employee.tax;
    };
    return payment;
}());
//Example - Good
var bill = new EmployeeSR("Bill", 10, 10, 10);
var billsPayment = new payment(bill, 37);
billsPayment.payEmployee();
