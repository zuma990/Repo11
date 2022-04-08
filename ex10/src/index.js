// Only change code below this line
var arr1 = [
    7,
    "ate",
    "",
    false,
    9
];

var arr2 = [
    null,
    NaN,
    0,
    NaN,
    undefined,
    ""
];

function myBouncer(arr){
 
    
    var filter = arr.filter(function(e){ return e;});
    

    return filter;
}
// Only change code above this line
console.log(myBouncer(arr1));
console.log(myBouncer(arr2)); // Change this line
module.exports = myBouncer;
