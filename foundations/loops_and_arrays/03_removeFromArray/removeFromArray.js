const removeFromArray = function (array, ...item) {
  for (let i = 1; i < item.length; i++) {
    //   console.log("i= "+i);
    for (const num of array) {
      if (item[i] === num) {
        //   console.log("i= "+i);
        //   console.log("num= " +num);
        //   console.log("Array before= "+array);

        return array.filter((element) => {
          if (item.includes(element)) {
            return false;
          } else {
            return true;
          }
        });
        // console.log("array after= "+array);
      }
    }
  }
  return array;
};
// Do not edit below this line
module.exports = removeFromArray;
