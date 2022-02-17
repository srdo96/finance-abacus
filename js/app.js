function calculate() {
  debugger;
  const totalExpensesDisplay = document.getElementById("total-expenses");
  const balanceDisplay = document.getElementById("balance");
  const income = getInputValue("income");
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("clothes");

  const totalExpenses = food + rent + clothes;
  const balance = sub(income, totalExpenses);
  const expensesErr = document.getElementById("err-cal");
  if (balance < totalExpenses) {
    expensesErr.style.display = "block";
    expensesErr.style.color = "red";
  } else {
    expensesErr.style.display = "none";
  }
  totalExpensesDisplay.innerText = totalExpenses;
  balanceDisplay.innerText = balance;
}

function sub(num1, num2) {
  // debugger;
  const result = num1 - num2;
  console.log("Result: ", result);
  if (isNaN(result)) {
    const balanceDisplay = document.getElementById("balance");
    balanceDisplay.innerText = 0;
    return 0;
  } else {
    return result;
  }
}

function getInputValue(idName) {
  // debugger;
  const valueText = document.getElementById(idName + "-input");
  const value = parseInt(valueText.value);
  const errorMessage = document.getElementById(idName + "-err");
  if (isNaN(value)) {
    valueText.style.borderColor = "red";
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
    // console.log(a);
  } else {
    valueText.style.borderColor = "white";
    errorMessage.style.display = "none";
    // console.log(d);
    return value;
  }
}

/* function saveCalculation() {
  const percentage = getInputValue("percentage");
  const income = getInputValue("income");
  const saveAmount = income * (percentage / 100);
  const savingDisplay = document.getElementById("saving-display");
  savingDisplay.innerText = saveAmount;

  const balanceDisplay = document.getElementById("balance");
  const balance = parseInt(balanceDisplay.innerText);
  const remainingAmount = balance - saveAmount;
  const remainingAmountDisplay = document.getElementById("remaining-amount");
  remainingAmountDisplay.innerText = remainingAmount;
} */
