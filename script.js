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