# 💰 Personal Finance Tracker

A simple and responsive Personal Finance Tracker application built using **HTML, CSS, and JavaScript**.

This project allows users to add, edit, and delete income and expense transactions. It automatically calculates total income, total expenses, and the current balance. Transaction data is stored in the browser using **localStorage**, so it remains available even after refreshing the page.

## 🚀 Features

- 💵 Add income transactions

- 💸 Add expense transactions

- 📊 Calculate total income

- 💰 Calculate total expenses

- 🧮 Calculate current balance

- ✏️ Edit existing transactions

- 🗑️ Delete transactions

- 💾 Save transactions using localStorage

- 🔄 Load saved transactions after refreshing the page

- 🔢 Automatically update financial calculations

- 📱 Responsive design for different screen sizes

## 🛠️ Technologies Used

- **HTML5** — Structure of the application

- **CSS3** — Styling and responsive design

- **JavaScript** — Application logic and interactivity

- **localStorage** — Saving transaction data in the browser

## 📂 Project Structure

```text

personal-finance-tracker/

│

├── index.html

├── style.css

├── script.js

└── README.md

```

## 💡 How It Works

### 💵 Add a Transaction

Enter the transaction information and select whether it is an **income** or **expense**.

When the transaction is submitted, it is added to the transaction list and the financial calculations are updated automatically.

### 📊 Calculate Total Income

The application calculates the total amount of all income transactions.

Whenever a new income transaction is added, edited, or deleted, the total income is recalculated.

### 💸 Calculate Total Expenses

The application calculates the total amount of all expense transactions.

The total expenses are automatically updated whenever transactions are added, edited, or deleted.

### 💰 Calculate Current Balance

The current balance is calculated using:

```text

Balance = Total Income - Total Expenses

```

The balance updates automatically whenever the transaction data changes.

### ✏️ Edit a Transaction

Click the **Edit** button to modify an existing transaction.

The transaction information is updated in the transactions array, and the financial calculations are recalculated.

### 🗑️ Delete a Transaction

Click the **Delete** button to remove a transaction.

The transaction is removed from the transactions array, and the total income, total expenses, and balance are updated.

### 💾 Local Storage

Transaction data is saved using the browser's `localStorage`.

The application uses `localStorage.setItem()` to save transactions and `localStorage.getItem()` to retrieve them.

Transactions are converted to JSON using `JSON.stringify()` and converted back using `JSON.parse()`.

Because of localStorage, transaction data remains available even after refreshing the page.

## 🔄 Application Flow

### Adding a Transaction

```text

User enters transaction details
↓
Transaction type is selected
↓
Transaction is added to the array
↓
Transaction is saved to localStorage
↓
Transaction list is updated
↓
Income, expense and balance are recalculated

```

### Editing a Transaction

```text

User clicks Edit
↓
Transaction information is updated
↓
Updated transaction data is saved
↓
Transaction list is displayed again
↓
Financial calculations are updated

```

### Deleting a Transaction

```text

User clicks Delete
↓
Transaction is removed from the array
↓
Updated data is saved to localStorage
↓
Transaction list is displayed again
↓
Financial calculations are updated

```

### Loading Saved Transactions

```text

Page loads
↓
Transactions are retrieved from localStorage
↓
JSON data is converted back into JavaScript data
↓
Transactions are displayed
↓
Income, expense and balance are calculated

```

## 🧪 Testing

The following functionality was tested:

- [x] Add income transaction

- [x] Add expense transaction

- [x] Calculate total income

- [x] Calculate total expenses

- [x] Calculate current balance

- [x] Edit transaction

- [x] Delete transaction

- [x] Automatically update calculations

- [x] Save transactions to localStorage

- [x] Load transactions after refresh

- [x] Display transactions correctly

- [x] Responsive layout

## 🎯 Project Goals

The main goals of this project were to:

- Practice JavaScript fundamentals

- Understand DOM manipulation

- Learn how arrays and objects work

- Practice working with transaction data

- Learn how to update and delete array items

- Understand event listeners

- Practice creating HTML elements dynamically

- Learn browser localStorage

- Practice JSON data

- Build a functional frontend application

- Practice calculating and displaying dynamic data

- Improve Git and GitHub workflow

- Build a project for a developer portfolio

## 🚀 Future Improvements

The following features can be added in future versions:

- 📊 Add financial charts and graphs

- 🔍 Add transaction filtering

- 📅 Add transaction dates

- 🏷️ Add transaction categories

- 📱 Improve responsive design

- 🌙 Add dark mode

- ⚛️ Rebuild the application using React

- 🗄️ Connect the application to a backend and database