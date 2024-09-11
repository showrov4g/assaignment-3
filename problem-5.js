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

