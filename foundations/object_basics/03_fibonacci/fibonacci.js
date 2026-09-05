const fibonacci = function (a) {
  if (Number(a) < 0 || Number(a) === undefined || Number(a) === null) {
    return "OOPS";
  } else if (Number(a) === 0) {
    return 0;
  } else if (Number(a) === 1 || Number(a) === 2) {
    let fibArr = [1, 1];
    return fibArr[fibArr.length - a];
  } else {
    a = Number(a);
    let indexLast = a - 1;
    let fibArr = [1, 1];

    for (let i = 2; i < a; i++) {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }

    // return fibArr;
    return fibArr[fibArr.length - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
