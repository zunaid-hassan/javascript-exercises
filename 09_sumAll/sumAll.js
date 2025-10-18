const sumAll = function (a, b) {
  let sum = 0;
  if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  } else {
    if (a < b) {
      for (let i = a; i <= b; i++) {
        sum += i;
      }
      return sum;
    } else {
      for (let i = b; i <= a; i++) {
        sum += i;
      }
      return sum;
    }
  }
  //   return sum;
};

// Do not edit below this line
module.exports = sumAll;
