'use strict';

// HACKER RANK - Handling test input
//
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
//
// let inputString = '';
// let currentLine = 0;
//
// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });
//
// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
//
//     main();
// });
//
// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */

 // PEDAC:

 // Algorithm:

    // A: iterate over nums array
        // A: check each number at nums[i] if it is positive or negative
            // A: if nums[i] is positive, multiply that term by 2
                // A: push that new number into a new array

            // A: if nums[i] is negative, multiply that term by 3
                // A: push that number into a new array

            // A: join the two arrays together.
                // A: store in new variable - let modifiedArray = []

        // A: return the modifiedArray

let positiveMult = [];
let oddMult = [];

function modifyArray(nums) {
    console.log('test')
}

// TEST PARAMETERS:
//
// function main() {
//     const n = +(readLine());
//     const a = readLine().split(' ').map(Number);
//
//     console.log(modifyArray(a).toString().split(',').join(' '));
}
