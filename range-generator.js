const range = (minMoisture, maxMoisture, delta, range) => {
  function* generateRange() {
    let lower = minMoisture - range;
    let upper = lower + range
    while(upper < maxMoisture){
      lower = upper + delta;
      upper = lower + range;
      yield {
        lowerBound: lower,
        upperBound: upper
      }
    }
  }
  return {
    [Symbol.iterator]: generateRange
  };
}

console.log([...range(15, 20, 0.1, 0.9)]);
