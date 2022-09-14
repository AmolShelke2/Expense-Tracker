const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// Add Transaction

const loacalStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null
    ? loacalStorageTransactions
    : [];

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add a text and amount");
  } else {
    const transaction = {
      id: genrateID(),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(transaction);

    text.value = "";
    amount.value = "";
  }
}

// Generate Randome ID
function genrateID() {
  return Math.floor(Math.random() * 1000000000);
}

// Add Transaction To DOM list
function addTransactionToDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
     ${transaction.text} <span>${sign}
     ${math.abs(transaction.amount)}</span>
     <button class='delete-btn' onclick='removeTransaction(${
       transaction.id
     })'>x</button>
    `;

  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerHTML = `$${total}`;
  moneyPlus.innerHTML = `$${income}`;
  moneyMinus.innerHTML = `$${expense}`;
}

// Remove transaction
function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();

  init();
}

// UpdateLocalStorage
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionToDOM);
  updateValues();
}

init();

form.addEventListener("submit", addTransaction);
