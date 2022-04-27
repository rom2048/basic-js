function sortByHeight( arr ) {
  let modifiedArr = arr.filter((el) => el !== -1);
  modifiedArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      modifiedArr.splice(i, 0, -1);
    }
  }
  return modifiedArr;
}

module.exports = {
  sortByHeight
};
