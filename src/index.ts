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

class Deposit extends Account {
    executeOperation(value: number): void {
        if (value <= 0) {
            console.log("Deposit amount must be positive.");
        }

        this.balance += value;
        console.log(`Deposited: ${value}. New balance: ${this.getBalance()}`);
    }
}