# personal-finance-tracker
A personal finance tracking web application that I am building as part of my full-stack development journey.

## Technologies

- HTML
- CSS
- JavaScript

## Project Progress

### Day 1 — Finance Tracker Foundation

#### Learned
- JavaScript variables
- Functions
- Parameters and arguments
- Return values
- Arithmetic operators
- Conditional statements
- Comparison operators

#### Built
- Personal Finance Tracker dashboard
- Navigation
- Total Income card
- Total Expense card
- Balance card
- Financial Status section
- Today's Summary section
- Basic balance calculation

---

### Day 2 — Transaction Data & Calculations

#### Learned
- Arrays
- Objects
- Arrays of objects
- Object properties
- `for...of` loops
- Conditional statements with transaction data
- Accumulating values

#### Built
- Transaction data structure
- Income transactions
- Expense transactions
- Total income calculation
- Total expense calculation
- Balance calculation
- Financial status logic

#### Current Example Result

| Transaction | Amount | Type |
|---|---:|---|
| Salary | Rs. 50,000 | Income |
| Groceries | Rs. 5,000 | Expense |
| Transportation | Rs. 2,000 | Expense |
| Freelance Work | Rs. 10,000 | Income |

### Current Result

- **Total Income:** Rs. 60,000
- **Total Expense:** Rs. 7,000
- **Balance:** Rs. 53,000
- **Financial Status:** You have savings

## Project Goal

The goal is to gradually turn this project into a full-stack personal finance application while learning:

- JavaScript
- React
- Next.js
- TypeScript
- Node.js
- PostgreSQL
- APIs
- Authentication
- Database management

## Day 3 — JavaScript Array Methods

### What I Learned

- forEach()
- filter()
- map()
- Working with arrays of objects
- Filtering transaction data
- Transforming transaction data
- Iterating through transaction data

### Practice

- Used forEach() to display transactions
- Used filter() to find specific transactions
- Used map() to extract transaction titles
- Practiced filtering objects based on conditions

### Project Updates

- Filtered income transactions
- Filtered expense transactions
- Displayed income and expense details
- Extracted transaction titles
- Found large transactions
- Found small transactions

---

## Day 4 — JavaScript Array Analysis

### What I Learned

- `reduce()`
- `find()`
- `some()`
- `every()`
- Combining `filter()` and `reduce()`
- Analyzing transaction data

### Practice

- Calculated totals using `reduce()`
- Found a specific transaction using `find()`
- Checked whether a large expense exists using `some()`
- Checked whether all expenses are below a limit using `every()`

### Project Updates

- Calculated total income using `reduce()`
- Calculated total expenses using `reduce()`
- Found specific transactions
- Added large expense detection
- Added expense limit checking
- Added financial warning messages
- Added a New Laptop transaction for testing

---

## Day 5 — Transaction Management

### What I Learned

- DOM manipulation

- getElementById()

- addEventListener()

- Reading values from input fields

- Creating HTML elements with JavaScript

- Adding elements to the DOM

- Input validation

- Updating the UI dynamically

### Built

- Transaction input form

- Income and expense selection

- Add Transaction functionality

- Dynamic transaction list

- Delete Transaction functionality

- Automatic total updates

- Automatic balance updates

- Financial status updates

### Project Updates

- Added new transactions dynamically

- Added income transactions

- Added expense transactions

- Displayed transactions on the page

- Added Delete button for each transaction

- Updated totals after adding a transaction

- Updated totals after deleting a transaction

- Added validation for empty titles

- Added validation for invalid amounts

---

## Day 6 — Local Storage

### What I Learned

- localStorage

- localStorage.setItem()

- localStorage.getItem()

- JSON.stringify()

- JSON.parse()

- Saving and retrieving data from the browser

### Project Updates

- Added Local Storage to the Finance Tracker

- Transactions are saved when added

- Transactions remain after refreshing the page

- Transactions are loaded when the application starts

- Deleted transactions are removed from Local Storage

- Totals are recalculated from saved transactions

- Transaction list is restored from saved data