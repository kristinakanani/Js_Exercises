function findIndex(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Found the target value
    } else if (array[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return -1; // Target value not found
}

// Indexing starts from 0
// Example usage:
const arr = ['Annie', 'Bernard', 'Daniel', 'Jack', 'Noel', 'Paul', 'Stella', 'Tom'];
const target = 'Paul';
const index = findIndex(arr, target);
console.log("Index of 'Paul':", index);