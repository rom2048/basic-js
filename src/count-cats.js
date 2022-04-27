function countCats( matrix ) {
  let counter = 0;
  matrix.forEach(arr => {
    arr.forEach(item => {
      if (item === '^^'){
        counter++;
      }
    })
  })
  return counter;
}

module.exports = {
  countCats
};
