/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
  if (numRows <= 0) {
    return [];
  }
  if (numRows === 1) {
      return [[1]];
  }

  const pascalTriangle = generate(numRows - 1);
  const previousRowIndex = numRows - 2;
  const currentRow = [];
  for (let i = 0; i < numRows; i++) {
      currentRow[i] = (pascalTriangle[previousRowIndex][i-1] || 0) + (pascalTriangle[previousRowIndex][i] || 0);
  }
  pascalTriangle.push(currentRow);

  return pascalTriangle;
};

///* Testing
console.log('numRows = 1');
console.log(JSON.stringify(generate(1)));

console.log('numRows = 2');
console.log(JSON.stringify(generate(2)));

console.log('numRows = 3');
console.log(JSON.stringify(generate(3)));

console.log('numRows = 4');
console.log(JSON.stringify(generate(4)));

console.log('numRows = 5');
console.log(JSON.stringify(generate(5)));

console.log('numRows = 6');
console.log(JSON.stringify(generate(6)));

console.log('numRows = 0');
console.log(JSON.stringify(generate(0)));

console.log('numRows = -1');
console.log(JSON.stringify(generate(-1)));
//*/
