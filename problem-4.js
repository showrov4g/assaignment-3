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

