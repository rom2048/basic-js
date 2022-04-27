const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink( position ) {
    if (typeof(position) !== 'number' || position < 1 || position > this.getLength()){
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishChain = this.chain.join('~~');
    this.chain.length = 0;
    return finishChain;
  }
};

module.exports = {
  chainMaker
};
