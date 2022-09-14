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

  if (text.ariaValueMax.trim() === "" || amount.value.trim() === "") {
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
