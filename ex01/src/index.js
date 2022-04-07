// Create an array here
var myArray = [2, 4, 0, 8, 10];

// End of creating an array
// Create a function below this line
function myArrayFunction(myItems){

    myItems[2] = 6;
    return myItems;
}
// End of creating function
myArrayFunction(myArray);
console.log(myArrayFunction(myArray));
module.exports = myArrayFunction;