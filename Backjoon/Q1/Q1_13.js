const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
let input = [];

rl.on('line',function(line){
  count += 1;
  input.push(line);

  if(count === 2) {
    rl.close();
  }
})

rl.on('close',function(){
  let A = input[0];
  let B = input[1];
  let num = B % 10;
  let tennum = Math.floor((B%100)/10);
  let hundrednum = Math.floor(B%100);
  console.log(A*num);
  console.log(A*tennum);
  console.log(A*hundrednum);
  console.log(A*B);
})