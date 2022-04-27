function getSumOfDigits( n ) {
  let arrN = String(n).split("");
  let summ = arrN.reduce((s,c) => s + +c, 0);
  if (String(summ).length === 1) return summ;
  else {
    arrN = String(summ).split("").reduce((s,c) => s + +c, 0);
    return arrN;
  }
}

module.exports = {
  getSumOfDigits
};
