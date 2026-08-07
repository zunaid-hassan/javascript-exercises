const findTheOldest = function (peopleList) {
  const dateCurrent = new Date();
  const yearCurrent = dateCurrent.getFullYear();

  let ageList = [];

  for (i = 0; i < peopleList.length; i++) {
    ageList.push(peopleList[i].yearOfDeath - peopleList[i].yearOfBirth);
  }
  return ageList.sort;
};

// Do not edit below this line
module.exports = findTheOldest;
