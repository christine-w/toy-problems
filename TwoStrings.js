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
    
    var pattern = "[^" + string1 + "]";  
    var re = new RegExp(pattern, "g");
    
    var commonCharacters = string2.replace(re, " ").trim();
    if (commonCharacters == "") {
        return "NO";
    } else {
        return "YES";
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
