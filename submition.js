function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0) {
    return "Invalid Input";
  } else if (income >= expenses) {
    let profit = income - expenses;
    let tax = profit * 0.2;
    return tax;
  }
}

function sendNotification(email) {
  if (email.match("@")) {
    let userName = email.split("@")[0];
    let domain = email.split("@")[1];
    let message = userName + " " + "sent you an email from" + " " + domain;
    return message;
  } else {
    return "Invalid Email";
  }
}

function checkDigitsInName(name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      return true;
    } else if (typeof name !== "string") {
      return "Invalid Input";
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean" ||
    obj.testScore > 50 ||
    obj.schoolGrade > 30
  ) {
    return "Invalid Input";
  } else if (typeof obj === "object") {
    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
      finalScore += 20;
      return finalScore >= 80;
    } else if (!obj.isFFamily) {
      finalScore += 0;
      return finalScore >= 80;
    }
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber === "number") {
    let totalTime = 0;
    for (let num of waitingTimes) {
      totalTime += num;
    }
    let averageTime = totalTime / waitingTimes.length;
    let roundedAverage = Math.round(averageTime);
    let whoGiveInterview = Math.max(serialNumber - 1 - waitingTimes.length);
    let actualWaitingTime = roundedAverage * whoGiveInterview;

    return actualWaitingTime;
  } else {
    return "Invalid Input";
  }
}
