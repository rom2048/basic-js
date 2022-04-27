class DepthCalculator {
  calculateDepth( arr ) {
    let depth = 1;
    if (arr.length === 0) return depth;

    if (Array.isArray(arr)){
      return depth + Math.max(...arr.map(item => this.calculateDepth(item)));
    }
    return 0;
  }
}

module.exports = {
  DepthCalculator
};
