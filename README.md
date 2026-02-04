# Bank Account System

A minimal TypeScript banking application showcasing clean architecture and design patterns.

## Overview

A simple yet professional banking system that demonstrates core software engineering principles: separation of concerns, type safety, and extensible design.

## Features

- Private account balance with encapsulation
- Transaction history with audit trail
- Polymorphic deposit and payment operations
- Type-safe financial operations
- Input validation and error handling

## Architecture

### Core Classes

**Account** - Manages balance and coordinates operations
- `constructor(transactionStore, initialBalance?)`
- `deposit(value)` - Add funds
- `withdraw(value)` - Remove funds (returns false if insufficient balance)
- `getBalance()` - Current balance

**TransactionStore** - Records all transactions
- `recordTransaction(category, value, status, description, balanceAfter)`
- `getTransactions()` - Transaction history

**Operation** - Abstract base for extensible operations
- `execute(value)` - Implemented by subclasses

**Deposit** - Credit operation
- Validates positive amounts
- Always succeeds

**Payment** - Debit operation
- Validates positive amounts
- Checks available funds

## Usage

```typescript
const store = new TransactionStore()
const account = new Account(store, 1000)

const deposit = new Deposit(account)
deposit.execute(500)

const payment = new Payment(account)
payment.execute(200)

console.log(account.getBalance()) // 1300
console.log(store.getTransactions())
```

## Project Structure

```
src/
├── account.ts
├── operation.ts
├── deposit.ts
├── payment.ts
├── transactionStore.ts
├── types.ts
└── index.ts
```

## Running

```bash
npx ts-node src/index.ts
```

## Design Patterns

- **Strategy** - Interchangeable operation behaviors
- **Repository** - Transaction data abstraction
- **Dependency Injection** - Loose coupling

## License

ISC
