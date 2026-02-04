# Bank Account System

A TypeScript implementation of a banking system with account management, deposits, payments, and transaction tracking.

## Features

- **Account Management** - Private balance tracking with validation
- **Transaction Recording** - Complete audit trail with timestamps and operation details
- **Operation Abstraction** - Extensible base class for account operations
- **Type Safety** - Full TypeScript strict mode enabled
- **Validated Transactions** - Deposits and payments with amount validation
- **Insufficient Funds Protection** - Payment rejection when balance is insufficient

## Classes

### Account
- `constructor(transactionStore: TransactionStore, initialBalance?: number)` - Initialize account with transaction store and optional starting balance
- `getBalance(): number` - Return current balance
- `deposit(value: number): void` - Add funds to the account
- `withdraw(value: number): boolean` - Attempt withdrawal, returns false if insufficient funds

### TransactionStore
- `recordTransaction(category, value, status, description, balanceAfter): Transaction` - Log a transaction
- `getTransactions(): Transaction[]` - Retrieve all transactions

### Operation
Abstract base for account operations that require an Account instance

### Deposit
- Extends `Operation`
- Validates positive amounts, performs deposit, logs the result

### Payment
- Extends `Operation`
- Validates positive amounts, checks funds, performs withdrawal, logs the result

### Types
- `Category` - Transaction category ('Deposit' | 'Payment' | 'Other')
- `Status` - Transaction status ('success' | 'failed')
- `Transaction` - Complete transaction record interface

## Usage

```typescript
import './src/index'

const transactionStore = new TransactionStore()
const account = new Account(transactionStore, 1000)

const deposit = new Deposit(account)
deposit.execute(500)

const payment = new Payment(account)
payment.execute(200)

console.log(`Final balance: ${account.getBalance()}`)
console.log(transactionStore.getTransactions())
```

## Running

```bash
npx ts-node src/index.ts
```

## Project Structure

```
src/
├── account.ts           # Account class with balance and transaction management
├── deposit.ts           # Deposit operation
├── payment.ts           # Payment operation
├── operation.ts         # Abstract operation base class
├── transactionStore.ts  # Transaction history management
├── types.ts            # TypeScript type definitions
└── index.ts            # Application entry point
```
