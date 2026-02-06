import { Operation } from "./operation";

export class Payment extends Operation {
    execute(value: number): void {
        if (value <= 0) {
            console.log("Payment amount must be positive.");
            return;
        }
        this.account.withdraw(value);
    }
}