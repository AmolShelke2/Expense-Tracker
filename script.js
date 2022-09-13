const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let totalBalance = 0;

const getInputFromUser = function (title, amount) {
  if (amount < 0) {
    console.log(`${title}, Expense ${amount}`);
  } else {
    totalBalance += amount;
    console.log(`${title}, Income ${amount}`);
  }
  console.log(totalBalance);
};

getInputFromUser("Salary", 100000);
