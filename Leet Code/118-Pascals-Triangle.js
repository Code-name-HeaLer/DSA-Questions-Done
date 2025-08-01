/* 118. Pascal's Triangle
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30
*/

/**
 * Generates the first numRows of Pascal's triangle.
 *
 * @param {number} numRows The number of rows to generate.
 * @return {number[][]} A 2D array representing Pascal's triangle.
 */

var generate = function (numRows) {
  // If numRows is 0, return an empty array.
  if (numRows === 0) {
    return [];
  }

  // This array will store the entire Pascal's triangle.
  const triangle = [];

  // Iterate through each row we need to generate.
  for (let i = 0; i < numRows; i++) {
    // Create the current row. Row 'i' (0-indexed) has 'i+1' elements.
    // We can pre-fill it with 1s, which handles the first and last element of each row.
    const currentRow = new Array(i + 1).fill(1);

    // Calculate the inner values of the current row based on the previous row.
    // This loop starts from the third row (i=2), as the first two rows ([1] and [1,1]) are already correct.
    // The loop runs from the second element (j=1) to the second-to-last element (j < i).
    for (let j = 1; j < i; j++) {
      // The previous row is at index i-1 in our triangle.
      // The value is the sum of the two numbers directly above it.
      const prevRow = triangle[i - 1];
      currentRow[j] = prevRow[j - 1] + prevRow[j];
    }

    // Add the fully constructed row to our triangle.
    triangle.push(currentRow);
  }

  // Return the complete triangle.
  return triangle;
};
