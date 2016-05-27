/*----------------------------------------------------------------
A solution to the "Insertion Sort 1" exercise found on Hacker Rank
(https://www.hackerrank.com/challenges/insertionsort1). 
----------------------------------------------------------------*/

function processData(input) {
    var inputArray = input.split(/\s+/); 
    var size = parseInt(inputArray.shift(), 10); 
    var array = inputArray.map(function(e) { return parseInt(e, 10); });
   
    insertionSort(array);
} 

function insertionSort(arr) {
    var array = arr;
    
    var unsortedValue = array[array.length - 1];
    for (i = array.length - 2; i >= 0; i--) {
        if (unsortedValue < array[i]) {
            array[i+1] = array[i];
            printStep(array);
        } else {
            array[i+1] = unsortedValue;
            printStep(array);
            break;
        }
    }
    if (unsortedValue < array[0]) {
        array[0] = unsortedValue;
        printStep(array);
    }
}

function printStep(arr) {
    process.stdout.write(arr.toString().replace(/,/g, " ") + "\n");
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
