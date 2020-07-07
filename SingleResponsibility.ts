class Employee {
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

    //Example - Bad
    payEmployee(hoursWorked: number): void {
        let grossPay: number = this.payPerHour * hoursWorked;
        let pensionPayment: number = grossPay / this.pensionContribution;
        let taxPayment: number = grossPay / this.tax;
        let netPay: number = grossPay - pensionPayment - taxPayment;
        console.log(this.name + "'s net payment was £" + netPay);
    }

    //Example - Good
    payEmployeeSRP(hoursWorked: number): void {
        let grossPay: number = this.calculateGrossPayment(hoursWorked);
        let pensionPayment: number = this.calculatePensionPayment(grossPay);
        let taxPayment: number = this.calculateTaxPayment(grossPay);
        let netPay: number = this.calculateNetPayment(grossPay, pensionPayment, taxPayment);
        console.log(this.name + "'s net payment was £" + netPay);
    }

    calculateGrossPayment(hoursWorked: number): number {
        return this.payPerHour * hoursWorked;
    }

    calculatePensionPayment(grossPay): number {
        return grossPay / this.pensionContribution;
    }

    calculateTaxPayment(grossPay): number {
        return grossPay / this.tax;
    }

    calculateNetPayment(grossPay: number, pensionPayment: number, taxPayment: number): number {
        return grossPay - pensionPayment - taxPayment;
    }
}

let dave = new Employee("Dave", 10, 10, 10);
//Example - Bad
dave.payEmployee(37);
//Example - Good
dave.payEmployeeSRP(37);