/*----------------------------------------------------------------
A solution to the "Quick Sort 1" exercise found on Hacker Rank
(https://www.hackerrank.com/challenges/quicksort1). 
----------------------------------------------------------------*/

function processData(input) {
    var inputArray = input.split(/\s+/);
    var size = parseInt(inputArray.shift(), 10);
    var array = inputArray.map(function(e) { return parseInt(e,10); });
    
    process.stdout.write(partition(array).join(" ") + "\n");
} 

function partition(ar) {
    var array = ar;
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
    
    return left.concat(equal).concat(right);
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
