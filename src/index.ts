type Category = 'Deposit' | 'Payment' | 'Other';

interface Transaction {
    id: number;
    category: Category;
    value: number;
    timestamp: string;
    status: 'success' | 'failed';
    balanceAfter: number;
    description?: string | undefined;
}

class Account {
    private balance: number;
    private transactions: Transaction[] = [];
    private nextTransactionId: number = 1;

    constructor(initialBalance: number = 0) {
        if (initialBalance < 0) {
            console.log("Initial balance cannot be negative.");
        }
        this.balance = initialBalance;
    }

    public getBalance(): number {
        return this.balance;
    }

    public registerTransaction(category: Transaction['category'], value: number, status: Transaction['status'], description?: string) {
        const t: Transaction = {
            id: this.nextTransactionId++,
            category,
            value,
            timestamp: new Date().toISOString(),
            status,
            balanceAfter: this.getBalance(),
            description,
        };
        this.transactions.push(t);
        return t;
    }

    public getTransactions(): Transaction[] {
        return [...this.transactions];
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