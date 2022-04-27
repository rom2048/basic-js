function getDNSStats( domains ) {
  const dom = {};
  for (let domain of domains) {
    domain = domain.split('.').reverse();
    let record = '';
    for (let subDomain of domain) {
      record += "." + subDomain;
      if (!(record in dom)) dom[record] = 1;
      else dom[record]++;
    }
  }
  return dom;
}

module.exports = {
  getDNSStats
};
