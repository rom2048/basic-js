function transform( arr ) {
  if (Array.isArray(arr)){
    const modifiedArr = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === '--discard-next'){
        arr[i + 1] = undefined;
      } else if (arr[i] === '--discard-prev'){
        if (arr[i - 1] !== undefined){
          modifiedArr.pop();
        }
      } else if (arr[i] === '--double-next'){
        if (arr[i + 1] !== undefined ){
          modifiedArr.push(arr[i+1])
        }
      } else if (arr[i] === '--double-prev'){
        if (arr[i-1] !== undefined){
          modifiedArr.push(arr[i - 1]);
        }
      } else if (arr[i] !== undefined) {
        modifiedArr.push(arr[i]);
      }
    }
    return modifiedArr;
  } else {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
}

module.exports = {
  transform
};
