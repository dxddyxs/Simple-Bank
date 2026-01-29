class Account {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    executeOperation(value: number): void { }

    public getBalance(): number {
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

class Payment extends Account {
    executeOperation(value: number): void {
        if (value <= 0) {
            console.log("Payment amount must be positive.");
        }

        if (value > this.balance) {
            console.log("Insufficient funds for this payment.");
            return;
        }

        this.balance -= value;
        console.log(`Paid: ${value}. New balance: ${this.getBalance()}`);
    }
}

let accountBank = new Account(1000);
accountBank.executeOperation(500);
console.log(`Current Balance: ${accountBank.getBalance()}`);

let payAccount = new Payment(accountBank.getBalance());
payAccount.executeOperation(200);
console.log(`Current Balance after payment: ${payAccount.getBalance()}`);