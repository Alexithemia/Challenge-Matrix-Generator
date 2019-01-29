function matrixGenerator(rows, columns) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < columns; j++) {
      matrix[i].push(Math.floor(Math.random() * 100))
    }
    matrix[i].sort(compareNumbers)
  }
  matrix.sort(compareArray);
  return matrix;
}

function compareNumbers(a, b) {
  return a - b;
}

function compareArray(a, b) {
  return a[0] - b[0];
}

module.exports = matrixGenerator;
