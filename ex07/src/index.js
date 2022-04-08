// Only change code below this line
var myArray = [
    [2],
    [5, 6, 7],
    [8, 9]
];

var myArray1 = [
    [2.5, 2],
    [0.5, 0.2],
    [8]
]

var myArray2  = [
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9]
]

function multiplyArrayFunction(myArray){
    var product = 1;
    var result = 0;
    var arr = [];
    for(var i = 0; i < myArray.length; i++){
        
        var sum = 1;
        var sum2 = 0;
        for(var j = 0; j < myArray[i].length; j++){
           sum = sum * myArray[i][j];
           sum2 = sum2 + myArray[i][j];
        }
        result += sum2;
      product = product * sum;
       
    } 
    
    arr.push(product);
    arr.push(result);
    return arr;
}
// Only change code above this line
console.log(multiplyArrayFunction(myArray));
console.log(multiplyArrayFunction(myArray1));
console.log(multiplyArrayFunction(myArray2)); // Change this line
module.exports = multiplyArrayFunction;