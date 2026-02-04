import { Account } from "./account";
import { Deposit } from "./deposit";
import { Payment } from "./payment";
import { TransactionStore } from "./transactionStore";

const store = new TransactionStore()
const account = new Account(store, 1000)

const deposit = new Deposit(account)
deposit.execute(500)

const payment = new Payment(account)
payment.execute(200)

console.log(account.getBalance()) // 1300
console.log(store.getTransactions())