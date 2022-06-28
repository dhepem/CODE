const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let year = 0;

rl.on('line',function(line){
  year = line;
  parseInt(year);
  console.log(year - 543);
  rl.close();
})