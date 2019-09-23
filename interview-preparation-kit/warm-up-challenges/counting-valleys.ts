// Complete the countingValleys function below.
function countingValleys1(n, s) {
  let valley = 0;
  let level = 0;
  for (let char of s) {
    if (char === 'U') {
      level++;
      if (level === 0) valley++;
    } else level--;
  }
  return valley;
}

const s = 'UDDDUDUU';
// const s = 'DDUUUUDD';

countingValleys1(s.length, s)
