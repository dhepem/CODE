const { listenerCount } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line',function(line){
  input = line.split(" ").map((el) =>parseInt(el));
  rl.close();
})

rl.on('close',function(){
  let A = input[0];
  let B = input[1];
  let C = input[2];
  console.log((A+B)%C);
  console.log(((A%C)+(B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C)*(B%C))%C);
})