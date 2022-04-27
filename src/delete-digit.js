function deleteDigit( n ) {
  let x = 0;
  let strN = String(n).split('');
  for (let i = 0; i < strN.length; i++) {
    strN.splice(i, 1);
    if (Number(strN.join('')) > x) {
      x = Number(strN.join(''));
    }
    strN = String(n).split('');
  }
  return x;
}

module.exports = {
  deleteDigit
};
