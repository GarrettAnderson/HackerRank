function sides(literals, ...expressions) {

    let str = literals
    let input = expressions
    console.log(input[0], input[1])

    const area = input[0]
    const perim = input[1]

    let s1 = (perim + (Math.sqrt(Math.pow(perim, 2) - (16 * area))))/4
    let s2 = (perim - (Math.sqrt(Math.pow(perim, 2) - (16 * area))))/4

    console.log([s1, s2])

}
