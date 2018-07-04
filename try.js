const fs = require("fs");

const add = () => {
 let words = fs.readFileSync('text.txt').toString();
 let arrWordsRow = words.split("\n");
 let sum = 0;
 for(let i = 0; i < arrWordsRow.length; i++) {
   let row = arrWordsRow[i].split(/[\t+\r]/);
   row.pop();
   let numArray = row.map(Number);
   sum += divide(numArray);

 }
 return sum;
}



 //------------------------------
let divide = (arr) => {
  let divide = 0;
  for(let j = 0; j < arr.length; j++) {
    for(let k=0; k < arr.length; k++) {
      if(j !== k) {
            if(arr[j] % arr[k] === 0) {

                divide += (arr[j] / arr[k]);
                    }
                  }
                }
              }
              return divide;
            }

console.log(add());
