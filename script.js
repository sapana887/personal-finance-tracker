const totalIncome=5000;
const totalExpense=2000;

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