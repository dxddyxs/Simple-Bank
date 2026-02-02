# Bank Account System

A TypeScript implementation of a banking system with account management and transaction tracking.

## Features

- **Account Management**: Create and manage bank accounts with initial balance
- **Deposits**: Add funds to your account
- **Payments**: Withdraw funds with validation
- **Transaction History**: Track all deposits and payments with timestamps
- **Transaction Status**: Monitor success/failed transaction states

## Project Structure

```
Bank/
├── src/
│   └── index.ts
├── README.md
└── package.json
```

## Usage

```typescript
// Create an account
const account = new Account(initialBalance);

// Perform a deposit
const deposit = new Deposit(account);
deposit.execute(500);

// Perform a payment
const payment = new Payment(account);
payment.execute(200);

// View transactions
console.log(account.getTransactions());
console.log(`Balance: $${account.getBalance()}`);
```

## Classes

- **Account**: Manages balance and transaction history
- **Transaction**: Represents a single transaction record
- **Operation**: Abstract base class for account operations
- **Deposit**: Handles deposit operations
- **Payment**: Handles payment/withdrawal operations

## Getting Started

1. Install dependencies: `npm install`
2. Compile TypeScript: `tsc`
3. Run: `node dist/index.js`
