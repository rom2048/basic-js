function calculateHanoi( disksNumber, turnsSpeed ) {
  const turnsPerSecond = turnsSpeed / 3600;
  const turns = (2 ** disksNumber) - 1;
  const sec = turns / turnsPerSecond;
  const seconds = Math.trunc(sec);
  return {turns, seconds};
}

module.exports = {
  calculateHanoi
};
