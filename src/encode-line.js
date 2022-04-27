function encodeLine( str ) {
  let answer = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i+1]) counter++;
    else {
      counter > 1 ? answer += counter + str[i] : answer += str[i];
      counter = 1;
    }
  }
  return answer;
}

module.exports = {
  encodeLine
};
