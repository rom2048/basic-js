function isMAC48Address( n ) {
  return !/[G-Z]/.test(n);
}
module.exports = {
  isMAC48Address
};
