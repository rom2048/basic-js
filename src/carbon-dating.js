const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  let answer = false;

  if (typeof(sampleActivity) === 'string'){
      let numSampleActivity = parseFloat(sampleActivity);

      if (numSampleActivity < MODERN_ACTIVITY && numSampleActivity > 0){
          const t = Math.log(MODERN_ACTIVITY / numSampleActivity) / (0.693 / HALF_LIFE_PERIOD);
          answer = Math.ceil(t);
      }
  }
  return answer;
}

module.exports = {
  dateSample
};
