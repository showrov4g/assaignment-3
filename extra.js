function calculateFinalScore(student) {
    // Extracting properties from the student object
    const { name, testScore, schoolGrade, isFFamily } = student;
  
    // Validating input values
    if (
      typeof name !== "string" ||
      typeof testScore !== "number" ||
      typeof schoolGrade !== "number" ||
      typeof isFFamily !== "boolean"
    ) {
      throw new Error("Invalid input types");
    }
    if (testScore > 50 || schoolGrade > 30) {
      throw new Error("Scores exceed maximum allowed values");
    }
  
    // Calculating the final score
    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
      finalScore += 20;
    }
  
    // Checking if the final score is 80 or above
    const isAdmitted = finalScore >= 80;
  
    // Returning the result
    return {
      name: name,
      finalScore: finalScore,
      isAdmitted: isAdmitted,
    };
  }
  
  // Example usage
  const rajib = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 28,
    isFFamily: true,
  };
  
  const result = calculateFinalScore(rajib);
  console.log(result); // { name: 'Rajib', finalScore: 93, isAdmitted: true }
  