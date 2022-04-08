// Create a temps array here
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
function myArrayFunction(arr) {
    var sum = 0;
    var averageDayTemp = [];

    for (var i = 0; i < arr.length; i++) {
        var total = 0;

        for (var j = 0; j < arr[i].length; j++) {

            total = total + arr[i][j];
        }
        sum = total / arr[i].length;

        averageDayTemp.push(sum);
    }

    return averageDayTemp;
}
console.log(myArrayFunction(temps));
// End of temps array 
// Create a function below this line

// End of creating a function

module.exports = myArrayFunction;