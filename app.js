/* 1. (completed above) Define a function, as a function declaration, 
maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
If they are the same, return that number. 
Use the if-else construct or a ternary expression - the Math.max method is not allowed.
*/

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));

/* 2.Define a function, as a function expression, maxOfThree that takes three numbers as 
arguments and returns the largest of them. Again, the Math.max method is not allowed. 
*/

function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z ) {
        return y;
    } else {
        return z;
    }
}

console.log(maxOfThree(3, 9, 15))

/* 3. Define a function, as a function declaration, isCharAVowel that takes a character as
 an argument and returns true if it is a vowel, false otherwise. 
*/

function isCharVowel(character) {
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        return true;
    } else {
        return false;
    }
}
console.log(isCharVowel('e'));
console.log(isCharVowel('c'));

/* 4. Define a function, as a function expression, sumArray that takes an array of numbers
 and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
*/

const sumArray = function (array) {
    let sum = 0;
    array.forEach(function(num) {
        sum += num;
    });
    return sum;
}

console.log(sumArray([2, 4, 5]))

/* 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and 
returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
*/
function multiplyArray(array) {
    var sum = 1;
    for (var i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

console.log(multiplyArray([2, 4, 5])); 

/* 6.Define a function, as a function expression, numArgs that returns the number of 
arguments passed to the function when called. 
*/

const numArgs = function (args){
    return args.length;
}

console.log(numArgs(2, 4, 5))

/* 7. Define a function, as a function declaration, reverseString that takes a string, 
reverses the characters, and returns it. For example, reverseString('rockstar');
 would return the string "ratskcor".  
*/

/* 8. Define a function, as a function expression, longestStringInArray that takes an array of 
strings as an argument and returns the length of the longest string.
*/


/* 9. Define a function, as a function declaration, stringsLongerThan that takes an array of 
strings and a number as arguments; and returns an array of the strings that are longer than 
the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); 
would return ["hello", "morning"].
*/