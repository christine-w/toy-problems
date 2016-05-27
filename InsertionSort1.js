function processData(input) {
    var array = input.split(/\s+/); 
    var size = parseInt(array.shift(), 10); 
    array = array.map(function(e) { return parseInt(e, 10); });
   
    var unsortedValue = array[size - 1];
    var isSorted = false;
    for (i = size - 2; i > -1; i--) {
        if (unsortedValue < array[i]) {
            array[i+1] = array[i];
        } else {
            array[i+1] = unsortedValue;
            isSorted = true;
        }
        process.stdout.write(array.toString().replace(/,/g, " ") + "\n");
        if (isSorted) break;
    }
    //if we reach this point and the array is still not sorted, unsortedValue has not been written back into the array because it is less than all elements in the array
    if (!isSorted) {
        array[0] = unsortedValue;
        process.stdout.write(array.toString().replace(/,/g, " ") + "\n");
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
