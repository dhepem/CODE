const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

input = [];

rl.on('line',function(line){
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
})
rl.on('close',function(){
  let A = input[0];
  let B = input[1];
  console.log(A * B);
})