const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let current = [];
let hour;
let minute;
let time;

rl.on("line",(line) => {
  input.push(line.split(' ').map(Number));
})

rl.on("close", () => {
  hour = input[0][0];
  minute = input[0][1];
  time = input[1];

  minute += time;
  if (minute > 60){
    hour++;
    minute -= 60;
    if(hour > 23){
      hour = 0;
    }
  }

  console.log("\n"+hour + " " + minute);
})