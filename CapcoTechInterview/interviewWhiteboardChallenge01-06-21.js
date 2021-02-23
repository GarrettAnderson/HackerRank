// GIVEN A STRING, COUNT THE WORDS THAT ARE repeated
// COUNT THE NUMBER OF TIME EACH WORD IS REPEATS


const INPUT = 'The quick brown fox jumped under the nearby tree. What the fox did next suprised the crowd. The silence was followed by the applause. Applause that lasted for minutes. The fox blushed under the tree.'

// OUTPUT:
  // the: 8,
  // quick: 1,
  // brown: 1,
  // etc.



// PEDAC

 // P: Given an input string
 // P: split up string and count the number of words tht repeate
 // P: store those repeated words and display the number of times
        // the word is repeated

    // E/ D:


// A: Given input
// A: split up into array of seperated words
// A: loop over that array
    // A: for each index, determine if that is the first instance
        // A: if first of word, continue loop
        // A: if repeat of word, store that word in a new variable
        // A: .length of the new variable


let splitStr = INPUT.split(' ');
// console.log(INPUT.split(' '))
let repeateWord = 0
let repeatedWords = {
    // word: '',
    // duplicate: 0
}

for (let i = 0; i < splitStr.length; i++) {
    // let prevIndex = i - 1
    // console.log(splitStr[i])

    if (repeatedWords.hasOwnProperty(splitStr[i])) {
        let count = repeatedWords[splitStr[i]]
        // console.log(count)
        count += 1
        repeatedWords[splitStr[i]] = count
    } else {
        // jsObj{'key' + i} = 'example ' + 1;
        repeatedWords[splitStr[i]] = 1
    }
}
console.log(repeatedWords)

    // splitStr.map((a, b) => {
    //     console.log(string)
    // })


        // for (let word of repeatedWords) {
        //     console.log(repeatedWords)

        //         if (word)
            // if (splitStr[i] === repeatedWords[j].word) {
            //     console.log(repeatedWords[j].word)

            // }






    // for (let word in repeatedWords) {

    // }
    // if (splitStr[i] === repeatedWords.word ) {
    //     repeateWord += 1

    // } else if (split)
    //     repeateWord = 0
    //     repeatedWords.push(splitStr[i])
    //     repeateWord += 1
    //     // console.log(repeatedWords)
    // } else if (splitStr[i] !== splitStr[prevIndex]) {
    //     repeateWord = 0
    //     repeatedWords.push(splitStr[i])
        // console.log(repeateWord)
        // console.log(repeatedWords)
    // }


// let reducer = splitStr.reduce((a,b) => {
//     if (a == b) {
//     // console.log(b)
//     console.log(true)
//     }
// })

// repeatedWords.reduce(reducer)
