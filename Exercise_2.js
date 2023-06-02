function findLargestSquareSubmatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let maxLength = 0; // Length of the largest square sub-matrix 
  let maxRowIndex = 0; // Initial row index of the largest square sub-matrix 
  let maxColIndex = 0; // Initial column index of the largest square sub-matrix 

  const dp = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(0));

  // Iterate over the matrix to calculate the lengths of square sub-matrices
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) {
        // Copy the first row and first column as is
        dp[i][j] = matrix[i][j];
      } else if (matrix[i][j] === 1) {
        // If the current element is 1, calculate the length of the square sub-matrix
        dp[i][j] =
          Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }

      // Update the maximum length and indices if a larger square sub-matrix is found
      if (dp[i][j] > maxLength) {
        maxLength = dp[i][j];
        maxRowIndex = i - maxLength + 1;
        maxColIndex = j - maxLength + 1;
      }
    }
  }

  // Return the initial index of the largest square sub-matrix found
  return [maxRowIndex, maxColIndex];
}

// Example usage:
const matrix = [
  [0, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 1, 0, 1, 0]
];

const [rowIndex, colIndex] = findLargestSquareSubmatrix(matrix);
console.log(`Initial index of the largest square sub-matrix: (${rowIndex}, ${colIndex})`);
