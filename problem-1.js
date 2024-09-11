function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0) {
    return "Invalid Input";
  } else if (income >= expenses) {
    let profit = income - expenses;
    let tax = profit * 0.2;
    return tax;
  }
}

