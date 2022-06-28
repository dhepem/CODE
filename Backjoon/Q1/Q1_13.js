const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let sum=0;

rl.on('line',function(line){
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
})

rl.on('close',function(){
  let A = input[0];
  let B = input[1];
  while(B > 0){
    sum += B%10;
    console.log(A*B);
    B /= 10;
  }
})