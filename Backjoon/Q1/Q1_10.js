const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = 'joonas';

rl.on('line',function(line){
  input = line.toLowerCase();
  console.log(input+"??!");
  rl.close();
})