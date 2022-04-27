function getMatrixElementsSum( matrix ) {
  let sum = 0;
  for (let row = 0; row < matrix.length; row++){
    for(let item = 0; item < matrix[row].length; item++){
      if (!row){
        sum += matrix[row][item];
      } else if (matrix[row - 1][item] > 0){
        sum += matrix[row][item];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
