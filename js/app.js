function calculate() {
  //   debugger;
  const foodInput = document.getElementById("food-input").value;
  const rentInput = document.getElementById("rent-input").value;
  const clothesInput = document.getElementById("clothes-input").value;
  const totalExpensesDisplay = document.getElementById("total-expenses");

  const totalExpenses =
    parseInt(foodInput) + parseInt(rentInput) + parseInt(clothesInput);
  //   console.log(totalExpenses);
  totalExpensesDisplay.innerText = totalExpenses;
}
