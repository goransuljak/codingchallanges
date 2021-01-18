// CHALLANGES
// CHALLANGE1 
// function reverseString(str) {
//   return str.split('').reverse().join('');
// // let revString = "";
// // for(let i = str.length - 1; i >= 0; i--){
// //    revString = revString + str[i];
// // }
// // return revString;
// }


// const output = reverseString('Hello');

// console.log(output);

// CHALLANGE 2 
// function isPalindrome(str) {
//   const reverseStr = str.split('').reverse().join('');

//   return reverseStr === str;
//   }
  

//   const output = isPalindrome('racecar');
  
//   console.log(output);
  
// CHALLANGE 3

// function reverseNum(int) {
//  const revNum = int.toString().split('').reverse().join('');

//  return parseInt(revNum) * Math.sign(int);
// }
      
    
// const output = reverseNum(521);

// console.log(output);


// CHALLENGE 4

// function capitalizeLetter(str) {
// // const capLetter = str.toLowerCase().split(' ');

// // for(let i = 0; i < capLetter.length; i++) {
// //   capLetter[i] = capLetter[i].substring(0, 1).toUpperCase() + 
// //   capLetter[i].substring(1).toLowerCase();
// // }
// // return capLetter.join(' ');
// return str.toLowerCase().split(' ')
// .map(char => {
//     return char[0].toUpperCase() + char.substring(1);
// }).join(' ')
// }     
       
// const output = capitalizeLetter("i love javascript");
   
// console.log(output);

// CHALLENGE 5

// function maxCharacter(str) {
//  const charMap = {};
//  let maxNum = 0;
//  let maxChar = '';

//  str.split('').forEach(function(char){
//      if(charMap[char]){
//          charMap[char]++;
//      } else {
//          charMap[char] = 1;
//      }
//  })
// for(let char in charMap) {
// if(charMap[char] > maxNum){
//   maxNum = charMap[char];
//   maxChar =  char;
// }
// }

// return maxNum;
// }
         
       
// const output = maxCharacter('blalblabla');
   
// console.log(output);






function fizzBuzz() {
}
            
          
const output = fizzBuzz();
      
console.log(output);
   















































