import { Account } from "./account.js";
import { Deposit } from "./deposit.js";
import { Payment } from "./payment.js";
import { TransactionStore } from "./transactionStore.js";

const transactionStore = new TransactionStore();
const account = new Account(transactionStore);
const deposit = new Deposit(account);
deposit.execute(500);