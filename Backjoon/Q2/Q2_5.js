const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (line) => {
  input = line.split(' ').map((el) => parseInt(el));
  rl.close();
})

rl.on("close", () => {
  let A = input[0];
  let B = input[1];

  B -= 45;

  if(B < 0){
    B += 60;
    A--;
    if (A === -1){
      A = 23;
    }
  }
  console.log(A+" "+B);
})