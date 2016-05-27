/*----------------------------------------------------------
A solution to the "Grid Search" exercise found on Hacker
Rank (https://www.hackerrank.com/challenges/the-grid-search).
----------------------------------------------------------*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var R_temp = readLine().split(' ');
        var R = parseInt(R_temp[0]);
        var C = parseInt(R_temp[1]);
        var G = [];
        for(var G_i = 0; G_i < R; G_i++){
           G[G_i] = readLine();
        }
        var r_temp = readLine().split(' ');
        var r = parseInt(r_temp[0]);
        var c = parseInt(r_temp[1]);
        var P = [];
        for(var P_i = 0; P_i < r; P_i++){
           P[P_i] = readLine();
        }
        
		var fullMatchFound = false;
        var hasPattern = false;
	    for (gridRow = 0; gridRow <= R - r; gridRow++) {
		   var colIndexFirst = G[gridRow].indexOf(P[0]);
		   var colIndexLast = G[gridRow].lastIndexOf(P[0]);
		   if (colIndexFirst !== -1) {
		      for (colIndex = colIndexFirst; colIndex <= colIndexLast; colIndex++) {
				hasPattern = true;
				for (patternRow = 0; patternRow < r; patternRow++) {
					if (G[gridRow+patternRow].substr(colIndex, c) !== P[patternRow]) {
						hasPattern = false;
						break;
					}
                    if (patternRow == r-1) {
                        var fullMatchFound = true; //reaching end of loop means pattern was found                       
                    }
				}
                if (fullMatchFound) {
                    break;
                }
			  }
		   }
           if (fullMatchFound) {
               break;
           }
	   }
       if (hasPattern) {
            process.stdout.write("YES\n");
       } else {
            process.stdout.write("NO\n");
       }
    }
}