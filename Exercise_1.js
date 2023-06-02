function doubleAndReplace(array) {
  let zeroIndex = 0; // Index to keep track of the position of the next zero

  for (let i = 0; i < array.length; i++) {
    array[i] *= 2; // Double the current value of the array

    // Check if the previous value and its descendants are equal
    if (i > 0 && array[i] === array[i - 1]) {
      // Replace the subsequent value with 0
      array[i] = 0;
    }

    // Move the current value to the next available zero index
    if (array[i] !== 0) {
      array[zeroIndex] = array[i];
      zeroIndex++;
    }
  }

  // Fill the remaining positions with zeros
  while (zeroIndex < array.length) {
    array[zeroIndex] = 0;
    zeroIndex++;
  }

  // Sorting the array in a certain way that all zeros are placed in the beginning

  array.sort((a,b)=> {

    if (a==0 && b!==0) {
        return -1;
    } else if (a!==0 && b==0) {
        return 1;
    } else {
        return 0;
    }
  });

  return array;
}

// Example:
const arr = [0, 2, 5, 4, 1, 0, 3, 3, 6, 7];
const result = doubleAndReplace(arr);
console.log(result);
