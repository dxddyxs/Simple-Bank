import { Operation } from "./operation.js";

export class Deposit extends Operation {
    execute(value: number): void {
        if (value <= 0) {
            console.log("Deposit amount must be positive.");
            return;
        }
        this.account.deposit(value);
    }
}