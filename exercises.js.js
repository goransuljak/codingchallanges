/* exercise 1
--------------
Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of two numbers is 100 
*/


const isEqualto100 = (a, b) => a === 100 || b === 100
|| (a + b) === 100;

//return true if one of the number is 100
console.log(isEqualto100(100,0));
console.log(isEqualto100(0,100));

//sum of two is 100
console.log(isEqualto100(50,50));
console.log(isEqualto100(20,80));




/* exercise 2
--------------
Write a JavaScript program to get the extension of a filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));



/* exercise 3
--------------
Write a JavaScript program to replace every character
in a given string with the character folllowing it in the alphabet
*/

// String.fromCharCode
// charCodeAt

const moveCharsForward = (str) => str
.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
.join('');

console.log(moveCharsForward('abcd'));



/* exercise 4
--------------
Write a JavaScript program to get the current date. Expected output:
mm-dd-yyyy, mm/dd/yyy or dd-mm-yyyy, dd/mm/yyyy
*/

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}
console.log(formatDate());



/* exercise 5
--------------
Write a JavaScript program to create a new string adding "New!" in front of a given string. 
If the given string begins with "New!" already then return the original string.
*/

/* const addNew = (str) => `New! ${str}`;

console.log(addNew('Offers')); */

//return the original string

const addNew = (str) =>
str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('New! Offers'));








































































