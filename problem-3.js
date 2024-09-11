function checkDigitsInName(name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      return true;
    } else if (typeof name !== "string") {
      return "invelid input";
    }
  }
  return false;
}