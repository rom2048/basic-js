function minesweeper( matrix ) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        result[i].push(1);
      } else {
        let k = 0;
        if (i !== 0 && j !== 0 && matrix[i - 1][j - 1]) {
          k++;
        }
        if (i !== 0 && matrix[i - 1][j]) {
          k++;
        }
        if (i !== 0 && j !== matrix[i].length - 1 && matrix[i - 1][j + 1]) {
          k++;
        }
        if (j !== 0 && matrix[i][j - 1]) {
          k++;
        }
        if (matrix[i][j]) {
          k++;
        }
        if (j !== matrix[i].length - 1 && matrix[i][j + 1]) {
          k++;
        }
        if (i !== matrix.length - 1 && j !== 0 && matrix[i + 1][j - 1]) {
          k++;
        }
        if (i !== matrix.length - 1 && matrix[i + 1][j]) {
          k++;
        }
        if (i !== matrix.length - 1 && j !== matrix[i].length - 1 && matrix[i + 1][j + 1]) {
          k++;
        }
        result[i].push(k);
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
