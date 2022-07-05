const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", line => {
  input.push(parseInt(line));
}).on("close", () => {
  let A = input[0];
  let B = input[1];
  if(A > 0 && B > 0){
    console.log("1");
  }
  else if(A > 0 && B < 0){
    console.log("4");
  }
  else if(A < 0 && B > 0){
    console.log("2");
  }
  else if(A < 0 && B < 0){
    console.log("3");
  }
});