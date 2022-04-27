function renameFiles(names) {
  for (let i = 0; i < names.length; i++){
    let suffix = 1;
    for(let j = i + 1; j < names.length; j++){
      if (names[i] === names[j]) names[j] = `${names[j]}(${suffix++})`
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
