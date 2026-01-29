class Account {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    executeOperation(value: number): void;

    getBalance(): number {
        return this.balance;
    }
}


class Bank implements User {
    constructor(public name: string, public balance: number) { }

    get(result: number): string {
        return `
        Name: ${this.name} 
        Balance: ${result}
        `
    }

    public add(a: number) {
        const result = this.balance + a;
        console.log("Payment Successful");
        return this.get(result)
    }


    public pay(a: number) {
        const result = this.balance - a;
        console.log(`Payment successful`);
        return this.get(result);
    }
}
