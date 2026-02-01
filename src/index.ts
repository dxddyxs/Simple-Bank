class Account {
    private balance: number;

    constructor(initialBalance: number = 0) {
        if (initialBalance < 0) {
            console.log("Initial balance cannot be negative.");
        }
        this.balance = initialBalance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(value: number): void {
        this.balance += value;
    }

    public withdraw(value: number): boolean {
        if (value > this.balance) return false;
        this.balance -= value;
        return true;
    }
}

abstract class Operation {
    protected account: Account;
    constructor(account: Account) {
        this.account = account;
    }
    abstract execute(value: number): void;
}

class Deposit extends Operation {
    execute(value: number): void {
        if (value <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.account.deposit(value);
        console.log(`Deposited: $${value}. New Balance: $${this.account.getBalance()}`);
    }
}

class Payment extends Operation {
    execute(value: number): void {
        if (value <= 0) {
            console.log("Payment value must be positive")
            return;
        }
        if (!this.account.withdraw(value)) {
            console.log("Insufficient funds for this payment");
            return;
        }
        console.log(`Paid ${value}. New balance: ${this.account.getBalance()}`);

    }
}

const account = new Account();
const deposit = new Deposit(account);
deposit.execute(500);

const payment = new Payment(account);
payment.execute(200);

console.log(`Final balance: ${account.getBalance()}`);
