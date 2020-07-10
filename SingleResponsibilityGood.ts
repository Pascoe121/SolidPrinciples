//Example - Good
class EmployeeSR {
    name: string;
    payPerHour: number;
    pensionContribution: number;
    tax: number;

    constructor(name: string, payPerHour: number, pensionContribution: number, tax: number) {
        this.name = name;
        this.payPerHour = payPerHour;
        this.pensionContribution = pensionContribution;
        this.tax = tax;
    }
}

class Payment {
    employee: EmployeeSR;
    hoursWorked: number;
    netPay: number;

    constructor(employee: EmployeeSR, hoursWorked: number) {
        this.employee = employee;
        this.hoursWorked = hoursWorked;
        this.netPay = this.calculateNetPayment();
    }

    calculateNetPayment(): number {
        let grossPay: number = this.calculateGrossPayment();
        let pensionPayment: number = this.calculatePensionPayment(grossPay);
        let taxPayment: number = this.calculateTaxPayment(grossPay);
        return grossPay - pensionPayment - taxPayment;
    }

    calculateGrossPayment(): number {
        return this.employee.payPerHour * this.hoursWorked;
    }

    calculatePensionPayment(grossPay): number {
        return grossPay / this.employee.pensionContribution;
    }

    calculateTaxPayment(grossPay): number {
        return grossPay / this.employee.tax;
    }
}

class payroll {
    employee: EmployeeSR;
    payment: Payment;

    constructor(employee: EmployeeSR, payment: Payment) {
        this.employee = employee;
        this.payment = payment;
    }

    payEmployee(): void {
        console.log(this.employee.name + "'s net payment was £" + this.payment.netPay + " send payslip");
    }
}

//Example - Good
const bill = new EmployeeSR("Bill", 10, 10, 10);
const billsPayment = new Payment(bill, 37);
const employeePayroll = new payroll(bill, billsPayment);
employeePayroll.payEmployee();
