// Only change code below this line
var myNestedArray = [];

function myNestedFunction(arr){
    var arr = [
        ["Toblerone"],
        
        ["Milka"] 
    ];
    arr[0].push(5);
    arr[1].push(3);
    myNestedArray.push(...arr);
    return myNestedArray;
    
}



// Only change code above this line
console.log(myNestedFunction(myNestedArray)); // Change this line
module.exports = myNestedFunction;
