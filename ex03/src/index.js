// Create a myPetsArray array here 
var myPetsArray = ["Dog", "Cat"];

// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets){
    var myNewPets = [];
    var arr = myPets;
    myNewPets.push("Bird", "Fish");
    arr.push(...myNewPets);
    
    var firstPet = arr.shift();
    arr.pop(firstPet);
    
    var lastPet = arr.pop();
    arr.push(lastPet);
    arr.unshift("Lion");
    

    return arr;
        



}
console.log(myArrayFunction(myPetsArray));
//myArrayFunction(myPetsArray);

// End of creating a function
module.exports = myArrayFunction;