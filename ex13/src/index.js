// Only change code below this code
 var str = "Paragon!"
function myReverse (str){

    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
myReverse(str);
// Only change code above this code
module.exports = myReverse;
