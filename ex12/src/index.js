// Only change code below this line
function splitArrayInGroups(arr, n){

    var result = [];
    for(i=0;i<arr.length;i=i+n)
  {
    var str = arr.slice(i,n+i);
    result.push(str);
  }

  return result;
}

// Only change code above this line
console.log(splitArrayInGroups([0,1,2,3,4,5,6], 3)); // Change this line
module.exports = splitArrayInGroups;
