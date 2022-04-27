function getEmailDomain( email ) {
  const arrOfDomain = email.split('@');
  return arrOfDomain[arrOfDomain.length - 1];
}

module.exports = {
  getEmailDomain
};
