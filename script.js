const transactions=[
  {
    title:"Salary",
    amount:50000,
    type:"income"
  },
  {
    title:"Groceries",
    amount:5000,
    type:"expense"
  },
  {
    title:"Transportation",
    amount:2000,
    type:"expense"
  },
  {
    title:"Freelance Work",
    amount:10000,
    type:"income"
  }
];
let totalExpense=0;
let totalIncome=0;

for(const transaction of transactions){
  if(transaction.type === "income"){
    totalIncome=totalIncome +transaction.amount;
  }
  if(transaction.type==="expense"){
    totalExpense=totalExpense+transaction.amount;
  }
}
console.log("Total Income:",totalIncome);
console.log("Total Expense:",totalExpense);

function calculateBalance(income,expense){
  const balance = income - expense;
  return balance;
}
const balance = calculateBalance (totalIncome , totalExpense);

console.log(balance);
if (balance > 0) {
  console.log("You have savings");
} else {
  console.log("You need to reduce your expenses");
}

const incomeTransactions=transactions.filter((transaction)=>{
  return transaction.type === "income";
});
console.log("Income Transactions:",incomeTransactions);

const expenseTransactions=transactions.filter((transaction)=>{
  return transaction.type === "expense";
});
console.log("Expense Transactions:", expenseTransactions);

console.log("Income:");

incomeTransactions.forEach((transaction) => {
  console.log(transaction.title, "-", transaction.amount);
});

console.log("Expenses:");

expenseTransactions.forEach((transaction) => {
  console.log(transaction.title, "-", transaction.amount);
});

const transactionTitles = transactions.map((transaction) => {
  return transaction.title;
});

console.log("Transaction Titles:", transactionTitles);

const largeTransactions = transactions.filter((transaction) => {
  return transaction.amount > 2000;
});

console.log("Large Transactions:");

largeTransactions.forEach((transaction) => {
  console.log(transaction.title, "-", transaction.amount);
});

const smallTransactions=transactions.filter((transaction)=>{
  return transaction.type === "expense" &&transaction.amount < 5000;
});

console.log("Small Transactions:");

smallTransactions.forEach((transaction)=>{
  console.log(transaction.title);
})