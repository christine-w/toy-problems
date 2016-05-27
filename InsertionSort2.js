/*----------------------------------------------------------------
A solution to the "Insertion Sort 2" exercise found on Hacker Rank
(https://www.hackerrank.com/challenges/insertionsort2). 
----------------------------------------------------------------*/

function processData(input) {
    var inputArray = input.split(/\s+/);
    var size = parseInt(inputArray.shift(), 10);
    var array = inputArray.map(function(e) { return parseInt(e, 10); });
    
    insertionSort(array);
} 

function insertionSort(arr) {
    var array = arr;

    for (i = 0; i < array.length - 1; i++) {
        var unsortedValue = array[i+1];
        for (j = i; j >= 0; j--) {
            if (unsortedValue < array[j]) {
                array[j+1] = array[j];
            } else {
                array[j+1] = unsortedValue;
                break;
            }
        }
        if (unsortedValue < array[0]) {
            array[0] = unsortedValue;
        }
        process.stdout.write(array.toString().replace(/,/g," ") + "\n");
    }
    
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
