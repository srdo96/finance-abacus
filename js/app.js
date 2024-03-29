function calculate() {
  const totalExpensesDisplay = document.getElementById("total-expenses");
  const balanceDisplay = document.getElementById("balance");
  const income = getInputValue("income");
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("clothes");
  const incomeInput = document.getElementById("income-input");
  debugger;
  let totalExpenses = food + rent + clothes;
  totalExpenses = parseInt(totalExpenses);
  const balance = sub(income, totalExpenses);
  const expensesErr = document.getElementById("err-cal");

  if (income < totalExpenses) {
    balanceDisplay.innerText = 0;
    totalExpensesDisplay.innerText = 0;
    expensesErr.style.display = "block";
    expensesErr.style.color = "red";
    incomeInput.style.borderColor = "red";
    incomeUpdateErr.style.display = "block";
    incomeUpdateErr.style.color = "red";
  } else {
    expensesErr.style.display = "none";

    balanceDisplay.innerText = balance;
    totalExpensesDisplay.innerText = totalExpenses;
  }
}

function sub(num1, num2) {
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
  const valueText = document.getElementById(idName + "-input");
  const value = parseInt(valueText.value);
  const errorMessage = document.getElementById(idName + "-err");
  if (isNaN(value) || value < 0) {
    valueText.style.borderColor = "red";
    errorMessage.style.display = "block";
    errorMessage.style.color = "red";
  } else {
    valueText.style.borderColor = "white";
    errorMessage.style.display = "none";
    document.getElementById("save-btn").removeAttribute("disabled");
    return value;
  }
}
function saveCalculation() {
  const percentage = getInputValue("percentage");
  const incomeText = document.getElementById("income-input").value;
  const income = parseInt(incomeText);
  const saveAmount = income * (percentage / 100);
  const savingDisplay = document.getElementById("saving-display");
  savingDisplay.innerText = saveAmount;
  const percentageValue = document.getElementById("percentage-input").value;

  const balanceDisplay = document.getElementById("balance");
  const balance = parseInt(balanceDisplay.innerText);
  const remainingAmount = balance - saveAmount;
  const remainingAmountDisplay = document.getElementById("remaining-amount");
  remainingAmountDisplay.innerText = remainingAmount;
  if (percentageValue < 0) {
    savingDisplay.innerText = 0;
    remainingAmountDisplay.innerText = 0;
  }
  if (saveAmount >= balance) {
    const percentageErr = document.getElementById("percentage-err2").value;
    percentageErr.style.display = "block";
    percentageErr.style.color = "red";
  }
}
