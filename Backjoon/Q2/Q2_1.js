let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on("line", function (line) {
    input = line.split(" ").map(function (el) { return parseInt(el); });
    rl.close();
});
rl.on("close", function () {
    let A = input[0];
    let B = input[1];
    if (A === B) {
        console.log("==");
    }
    else if (A > B) {
        console.log(">");
    }
    else {
        console.log("<");
    }
});
