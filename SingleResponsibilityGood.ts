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

class payment {
    employee: EmployeeSR;
    hoursWorked: number;

    constructor(employee: EmployeeSR, hoursWorked: number) {
        this.employee = employee;
        this.hoursWorked = hoursWorked;
    }

    payEmployee(): void {
        console.log(this.employee.name + "'s net payment was £" + this.calculateNetPayment() + " send payslip");
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

//Example - Good
const bill = new EmployeeSR("Bill", 10, 10, 10);
const billsPayment = new payment(bill, 37);
billsPayment.payEmployee();
