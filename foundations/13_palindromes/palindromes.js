const palindromes = function (a) {
  let a2 = a
    .split(", ")
    .join()
    .split(" ")
    .join()
    .toLowerCase()
    .split(",")
    .join();
  let a3 = "";
  for (let i = 0; i < a2.length; i++) {
    if (![".", "!", ","].includes(a2[i])) {
      a3 += a2[i];
    }
  }
  let a3Arr = a3.split("");

  let a3ArrRev = a3Arr.toReversed();
  let bool = true;

  for (let i = 0; i < a3Arr.length; i++) {
    if (a3Arr[i] === a3ArrRev[i]) {
      bool = true;
    } else {
      bool = false;
      return bool;
    }
  }
  return bool;
};

// Do not edit below this line
module.exports = palindromes;
