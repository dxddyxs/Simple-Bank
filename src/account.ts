import TransactionStore from './transactionStore';

class Account {
    private balance: number;

    constructor(private transactionStore: TransactionStore, initialBalance = 0) {
        if (initialBalance < 0) {
            console.log("Initial balance cannot be negative. Setting to 0.");
            initialBalance = 0;
        }
        this.balance = initialBalance;
    }
}