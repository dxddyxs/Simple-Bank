# Bank Account System

A robust TypeScript implementation of a banking system featuring account management, transaction tracking, and operation validation with complete audit trail.

## ✨ Features

- **Account Management** - Secure private balance tracking with validation
- **Transaction History** - Complete audit trail with timestamps, categories, and operation details
- **Operation Pattern** - Extensible abstract base class for bank operations
- **Type Safety** - Full TypeScript strict mode for reliability
- **Input Validation** - All deposits and payments validated before execution
- **Funds Protection** - Automatic rejection of payments exceeding available balance
- **Status Tracking** - Success/failure logging for all transactions

## 🏗️ Architecture

### Account
Core class managing account state and transaction recording
- `constructor(transactionStore: TransactionStore, initialBalance?: number)` - Initialize with transaction store
- `getBalance(): number` - Get current account balance
- `deposit(value: number): void` - Record and execute deposit
- `withdraw(value: number): boolean` - Attempt withdrawal with balance validation

### TransactionStore
Manages complete transaction history and audit trail
- `recordTransaction(category, value, status, description, balanceAfter): Transaction` - Record operation
- `getTransactions(): Transaction[]` - Retrieve all transactions

### Operation (Abstract)
Base class for extensible banking operations
- Encapsulates common validation logic
- Provides protected account access to subclasses

### Deposit
Implements deposit operation
- Validates positive amounts
- Updates balance and records transaction
- Logs all attempts (success/failure)

### Payment
Implements payment/withdrawal operation
- Validates positive amounts
- Checks sufficient funds before execution
- Records transaction with final balance
- Logs all attempts (success/failure)

### Types
Type-safe definitions for banking operations
- `Category` - 'Deposit' | 'Payment' | 'Other'
- `Status` - 'success' | 'failed'
- `Transaction` - Complete transaction record with metadata

## 🚀 Quick Start

### Usage

```typescript
import './src/index'

const transactionStore = new TransactionStore()
const account = new Account(transactionStore, 1000)

// Perform deposit
const deposit = new Deposit(account)
deposit.execute(500)

// Perform payment
const payment = new Payment(account)
payment.execute(200)

// Check final balance
console.log(`Balance: ${account.getBalance()}`)

// View transaction history
console.log(transactionStore.getTransactions())
```

### Running

```bash
npx ts-node src/index.ts
```

## 📁 Project Structure

```
src/
├── account.ts           # Account balance & transaction management
├── deposit.ts           # Deposit operation implementation
├── payment.ts           # Payment operation implementation
├── operation.ts         # Abstract operation base class
├── transactionStore.ts  # Transaction history storage & retrieval
├── types.ts            # TypeScript type definitions
└── index.ts            # Application entry point
```

## 🎓 Design Patterns

- **Abstract Factory** - Operation base class for extensible operations
- **Repository** - TransactionStore for data persistence
- **Type Safety** - Full TypeScript strict mode compliance
