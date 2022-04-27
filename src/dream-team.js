function createDreamTeam( members ) {
  let arrNames = [];
  if (Array.isArray(members)){
    members.map(item => {
      if (typeof(item) === 'string'){
        let trimmedName = item.trim();
        arrNames.push(trimmedName[0].toUpperCase());
      }
    })
    return arrNames.sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
