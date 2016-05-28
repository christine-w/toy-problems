/*----------------------------------------------------------------
A solution to the "Quick Sort 2" exercise found on Hacker Rank
(https://www.hackerrank.com/challenges/quicksort2). 
----------------------------------------------------------------*/

function processData(input) {
    var inputArray = input.split(/\s+/);
    var size = parseInt(inputArray.shift(), 10);
    var array = inputArray.map(function(e) { return parseInt(e,10); });
    
    array = quickSort(array);
    //process.stdout.write(array.join(" ") + "\n");
}  

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    var array = arr;
    var p = array[0];
    var equal = [p];
    var left = [];
    var right = [];
    
    for (i = 1; i < array.length; i++) {
        if (array[i] < p) {
            left.push(array[i]);
        } else if (array[i] > p) {
            right.push(array[i]);
        } else {
            equal.push(array[i]);
        }
    }
    
    left = quickSort(left);
    right = quickSort(right);
    
    var sortedArray = left.concat(equal).concat(right);
    process.stdout.write(sortedArray.join(" ") + "\n");
    return sortedArray;
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
