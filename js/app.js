function calculate() {
  //   debugger;
  const totalExpensesDisplay = document.getElementById("total-expenses");
  const balanceDisplay = document.getElementById("balance");
  const income = getInputValue("income");
  const rent = getInputValue("rent");
  const food = getInputValue("food");
  const clothes = getInputValue("clothes");
  const totalExpenses = food + rent + clothes;
  totalExpensesDisplay.innerText = totalExpenses;
  const balance = income - totalExpenses;
  balanceDisplay.innerText = balance;
}

function getInputValue(name) {
  const value = document.getElementById(name + "-input").value;
  return parseInt(value);
}

function saveCalculation() {
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
}
