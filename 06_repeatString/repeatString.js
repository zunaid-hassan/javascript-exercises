const repeatString = function (string, number) {
  let repeatString = "";
  if (number === 0) {
    return "";
  } else if (number < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < number; i++) {
      repeatString += string;
    }
  }
  return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
