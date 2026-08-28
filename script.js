let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let totalExpense = 0;
let totalIncome = 0;

function calculateBalance(income, expense) {
  const balance = income - expense;
  return balance;
}

const incomeElement = document.getElementById("total-income");
const expenseElement = document.getElementById("total-expense");
const balanceElement = document.getElementById("balance");

const summaryIncome = document.getElementById("summary-income");
const summaryExpense = document.getElementById("summary-expense");
const summaryBalance = document.getElementById("summary-balance");

const showMessageButton = document.getElementById("show-message");
const statusMessage = document.getElementById("status-message");
showMessageButton.addEventListener("click", () => {
  const currentBalance = calculateBalance(totalIncome, totalExpense);

  if (currentBalance > 0) {
    statusMessage.textContent = "✓ You have savings!";
  } else {
    statusMessage.textContent = "⚠ You need to reduce your expenses!";
  }
});

const transactionTitle = document.getElementById("transaction-title");
const transactionAmount = document.getElementById("transaction-amount");
const transactionType = document.getElementById("transaction-type");
const addTransactionButton = document.getElementById("add-transaction");

const financialStatus = document.getElementById("financial-status");

function calculateTotals() {
  totalIncome = 0;
  totalExpense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      totalIncome += transaction.amount;
    } else if (transaction.type === "expense") {
      totalExpense += transaction.amount;
    }
  });

  const balance = calculateBalance(totalIncome, totalExpense);

  incomeElement.textContent = `Rs. ${totalIncome}`;
  expenseElement.textContent = `Rs. ${totalExpense}`;
  balanceElement.textContent = `Rs. ${balance}`;

  summaryIncome.textContent = `Income: Rs. ${totalIncome}`;
  summaryExpense.textContent = `Expense: Rs. ${totalExpense}`;
  summaryBalance.textContent = `Remaining: Rs. ${balance}`;

  if (balance > 0) {
    financialStatus.textContent = "✓ You have savings!";
  } else {
    financialStatus.textContent = "⚠ You need to reduce your expenses!";
  }
}

addTransactionButton.addEventListener("click",()=>{
  const title = transactionTitle.value;
  const amount = Number(transactionAmount.value);
  const type = transactionType.value;

  if (title.trim() === "" || amount <= 0) {
  alert("Please enter a valid title and amount.");
  return;
}
  
  const transaction = {
    title,
    amount,
    type
  };
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  calculateTotals();
  displayTransactions();

  transactionTitle.value = "";
  transactionAmount.value = "";
});

const transactionList = document.getElementById("transaction-list");
function displayTransactions() {
  transactionList.innerHTML = "";

  transactions.forEach((transaction, index) => {
    const transactionItem = document.createElement("p");

    transactionItem.textContent = `${transaction.title} - Rs. ${transaction.amount} - ${transaction.type}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      transactions.splice(index, 1);
      localStorage.setItem("transactions", JSON.stringify(transactions));

      calculateTotals();
      displayTransactions();
    });

    transactionList.appendChild(transactionItem);
    transactionList.appendChild(deleteButton);
  });
}
calculateTotals();
displayTransactions();