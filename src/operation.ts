import { Account } from "./account";

export abstract class Operation {
    protected account: Account;
    constructor(account: Account) {
        this.account = account;
    }
    abstract execute(value: number): void;
}