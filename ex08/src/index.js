// Only change code below this line
var array1 = [
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
];

var array2 = [
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
    ];

var array3 = [
[17, 23, 25, 12],
 [25, 7, 34, 48],
  [4, 10, 18, 21],
   [72, 3, 17, 10]
];    

function largestNumFromArr(arr) {
    var maxNumArray = [];
    
    for (var i = 0; i < arr.length; i++) {
        var maxNum = 0;
        for (var j = 0; j < arr[i].length; j++) {
           if(arr[i][j] > maxNum) {
               maxNum = arr[i][j];
               
           }
        } maxNumArray.push(maxNum);
    } 
    return maxNumArray;
}


// Only change code above this line
console.log(largestNumFromArr(array1)); // Change this line
console.log(largestNumFromArr(array2)); 
console.log(largestNumFromArr(array3)); // Change this line

module.exports = largestNumFromArr;