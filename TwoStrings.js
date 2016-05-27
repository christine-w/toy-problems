function processData(input) {
    //Enter your code here
    var inputStrings = input.split(/\n/);
    var T = parseInt(inputStrings.shift(), 10);
    
    for (t = 0; t < T; t++) {
        var string1 = inputStrings.shift();
        var string2 = inputStrings.shift();
        
        process.stdout.write(commonSubstringExists(string1, string2) + "\n");
    }   
} 

function commonSubstringExists(string1, string2) {
    if (string1 == string2) {
        return "YES";
    }
    
    var A = string1.length <= string2.length ? string1 : string2;
    var B = string1.length <= string2.length ? string2 : string1;
    
    for (testLength = 1; testLength < A.length; testLength++) {
        var numPossibleTests = A.length - testLength + 1;
        for (test = 0; test < numPossibleTests; test++) {
            if (B.includes(A.substr(test, testLength))) {
                return "YES";
            }
        }
    }
    return "NO";
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
