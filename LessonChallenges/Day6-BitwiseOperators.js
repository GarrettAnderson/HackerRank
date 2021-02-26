'use strict';

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

function getMaxLessThanK(n, k) {
    let bitWise = []
    let sequence = new Set()

    for (let i = 1; i <= n; i++) {
        sequence.add(i)
        let seqVals = sequence.values()
        // console.log(seqVals)

        // Accessing a value at a specific index in a set object
        console.log(Array.from(seqVals)[0])



        // if (seqVals.next().value % 2 === 1 ) {
        //     bitWise.push(1)
        // } else {
        //     bitWise.push(0)
        // }
    }
        // console.log(bitWise.reverse())
        // let binaryArr = bitWise.reverse()
        // let binaryVal = binaryArr.join('')
        // console.log(binaryVal)
}


// function main() {
//     const q = +(readLine());
//
//     for (let i = 0; i < q; i++) {
//         const [n, k] = readLine().split(' ').map(Number);
//
//         console.log(getMaxLessThanK(n, k));
//     }
// }
