import type { Transaction, Category, Status } from './types';

export class TransactionStore {
    private transactions: Transaction[] = [];
    private nextId = 1;

    recordTransaction(
        category: Category,
        value: number,
        status: Status,
        description: string | undefined,
        balanceAfter: number
    ): Transaction {
        const t: Transaction = {
            id: this.nextId++,
            category,
            value,
            status,
            balanceAfter,
            description,
            timestamp: new Date().toISOString()
        };
        this.transactions.push(t);
        return t;
    }

    getTransactions(): Transaction[] {
        return [...this.transactions];
    }
}