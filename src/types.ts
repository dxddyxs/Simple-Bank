export type Category = 'Deposit' | 'Payment' | 'Other';
export type Status = 'success' | 'failed';

export interface Transaction {
    id: number;
    category: Category;
    value: number;
    timestamp: string;
    status: Status;
    balanceAfter: number;
    description?: string | undefined;
}