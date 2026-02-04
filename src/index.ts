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
            this.account.registerTransaction('Deposit', value, 'failed', 'Deposit amount must be positive.');
            console.log("Deposit amount must be positive.");
            return;
        }
        this.account.deposit(value);
        this.account.registerTransaction('Deposit', value, 'success', 'ok')
        console.log(`Deposited: $${value}. New Balance: $${this.account.getBalance()}`);
    }
}

class Payment extends Operation {
    execute(value: number): void {
        if (value <= 0) {
            this.account.registerTransaction('Payment', value, 'failed', 'Deposit amount must be positive')
            console.log("Payment value must be positive")
            return;
        }
        if (!this.account.withdraw(value)) {
            this.account.registerTransaction('Other', value, 'failed', 'Insufficient funds')
            console.log("Insufficient funds for this payment");
            return;
        }
        this.account.registerTransaction('Payment', value, 'success', 'ok');
        console.log(`Paid ${value}. New balance: ${this.account.getBalance()}`);
    }
}

const account = new Account();
const deposit = new Deposit(account);
deposit.execute(500);

const payment = new Payment(account);
payment.execute(200);

console.log(account.getTransactions());
console.log(`Final balance: ${account.getBalance()}`);