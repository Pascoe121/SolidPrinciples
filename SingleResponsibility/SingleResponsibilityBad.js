//Example - Bad
var Employee = /** @class */ (function () {
    function Employee(name, payPerHour, pensionContribution, tax) {
        this.name = name;
        this.payPerHour = payPerHour;
        this.pensionContribution = pensionContribution;
        this.tax = tax;
    }
    Employee.prototype.payEmployee = function (hoursWorked) {
        var grossPay = this.payPerHour * hoursWorked;
        var netPay = grossPay - (grossPay / this.pensionContribution) - (grossPay / this.tax);
        console.log(this.name + "'s net payment was £" + netPay + "send payslip");
    };
    return Employee;
}());
//Example - Bad
var dave = new Employee("Dave", 10, 10, 10);
dave.payEmployee(37);
