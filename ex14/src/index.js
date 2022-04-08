// Only change code below this code
var myArray = [2, 5, 9, 8, 1];
function bubbleSort(arr) {

    for (var i = 0; i < arr.length; i++) {

       
        for (var j = 0; j < (arr.length - i - 1); j++) {

            
            if (arr[j] > arr[j + 1]) {

                var str = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = str
            }
        }
    }
    
   return arr;
}

bubbleSort(myArray);

// Only change code above this code
module.exports = bubbleSort;