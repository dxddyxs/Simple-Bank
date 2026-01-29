# Bank Account System

A TypeScript implementation of a banking system with account management, deposits, and payments.

## Features

- **Account Management**: Base account class with balance tracking
- **Deposits**: Add funds to accounts with validation
- **Payments**: Withdraw funds with insufficient funds checks

## Classes

### Account
Base class for all account operations.
- `constructor(initialBalance: number)`: Initialize account with starting balance
- `executeOperation(value: number)`: Abstract operation method
- `getBalance(): number`: Get current account balance

### Deposit
Extends `Account` to handle deposit operations.
- Validates that deposit amount is positive
- Updates balance and logs transaction

### Payment
Extends `Account` to handle payment operations.
- Validates payment amount is positive
- Checks for sufficient funds before processing
- Updates balance and logs transaction

## Usage

```typescript
const account = new Account(1000);
const deposit = new Deposit(1000);
deposit.executeOperation(500);

const payment = new Payment(1000);
payment.executeOperation(200);
```

## Running the Project

```bash
npx ts-node src/index.ts
```
