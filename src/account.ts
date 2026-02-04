import { TransactionStore } from './transactionStore';

export class Account {
    private balance: number;
    constructor(private transactionStore: TransactionStore,
        initialBalance = 0) {
        if (initialBalance < 0) {
            console.log("Initial balance cannot be negative. Setting to 0.");
            initialBalance = 0;
        }
        this.balance = initialBalance;
    }

    public deposit(value: number): void {
        this.balance += value;
    }

    public withdraw(value: number): boolean {
        if (value > this.balance) return false;
        this.balance -= value;
        return true;
    }

    public getBalance(): number {
        return this.balance;
    }
}