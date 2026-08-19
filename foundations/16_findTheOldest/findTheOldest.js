function getAge(people) {
  const dateCurrent = new Date();
  const yearCurrent = dateCurrent.getFullYear();
  let age = 0;

  if (people.yearOfDeath != undefined) {
    age = people.yearOfDeath - people.yearOfBirth;
    return age;
  } else {
    age = yearCurrent - people.yearOfBirth;
    return age;
  }
}

const findTheOldest = function (peopleList) {
  return peopleList.reduce((oldest, current) => {
    if (getAge(oldest) > getAge(current)) {
      return oldest;
    } else {
      return current;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
