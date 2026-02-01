# Bank Account System

A TypeScript implementation of a small banking example with account management, deposits, and payments

## Features

- Account management with private balance tracking
- Validated deposits
- Validated payments with insufficient funds check

## Classes

### Account
- `constructor(initialBalance?: number)` Initialize account with optional starting balance
- `getBalance(): number` Return current balance
- `deposit(value: number): void` Add funds to the account
- `withdraw(value: number): boolean` Attempt withdrawal, returns false if insufficient funds

### Operation
Abstract base for account operations that require an Account instance

### Deposit
- Extends `Operation`
- Validates positive amounts, performs deposit, logs the result

### Payment
- Extends `Operation`
- Validates positive amounts, checks funds, performs withdrawal, logs the result

## Usage

```typescript
import './src/index'

const account = new Account()
const deposit = new Deposit(account)
deposit.execute(500)

const payment = new Payment(account)
payment.execute(200)

console.log(`Final balance: ${account.getBalance()}`)
```

## Running

```bash
npx ts-node src/index.ts
```
