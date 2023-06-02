function findMostRepeatedNumber(array) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostRepeatedNumber = null;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;

    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
      mostRepeatedNumber = num;
    }
  }

  return mostRepeatedNumber;
}

// Example usage:
const arr = [2,4,4,5,2,3,3,4,5,6,6,6,1];
const mostRepeated = findMostRepeatedNumber(arr);
console.log("Most repeated number:", mostRepeated);
