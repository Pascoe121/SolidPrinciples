var Employee = /** @class */ (function () {
    function Employee(name, payPerHour, pensionContribution, tax) {
        this.name = name;
        this.payPerHour = payPerHour;
        this.pensionContribution = pensionContribution;
        this.tax = tax;
    }
    //Example - Bad
    Employee.prototype.payEmployee = function (hoursWorked) {
        var grossPay = this.payPerHour * hoursWorked;
        var pensionPayment = grossPay / this.pensionContribution;
        var taxPayment = grossPay / this.tax;
        var netPay = grossPay - pensionPayment - taxPayment;
        console.log(this.name + "'s net payment was £" + netPay);
    };
    //Example - Good
    Employee.prototype.payEmployeeSRP = function (hoursWorked) {
        var grossPay = this.calculateGrossPayment(hoursWorked);
        var pensionPayment = this.calculatePensionPayment(grossPay);
        var taxPayment = this.calculateTaxPayment(grossPay);
        var netPay = this.calculateNetPayment(grossPay, pensionPayment, taxPayment);
        console.log(this.name + "'s net payment was £" + netPay);
    };
    Employee.prototype.calculateGrossPayment = function (hoursWorked) {
        return this.payPerHour * hoursWorked;
    };
    Employee.prototype.calculatePensionPayment = function (grossPay) {
        return grossPay / this.pensionContribution;
    };
    Employee.prototype.calculateTaxPayment = function (grossPay) {
        return grossPay / this.tax;
    };
    Employee.prototype.calculateNetPayment = function (grossPay, pensionPayment, taxPayment) {
        return grossPay - pensionPayment - taxPayment;
    };
    return Employee;
}());
var dave = new Employee("Dave", 10, 10, 10);
//Example - Bad
dave.payEmployee(37);
//Example - Good
dave.payEmployeeSRP(37);
