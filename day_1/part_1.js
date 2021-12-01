const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')

const elements = input.split('\n').map(Number)

let increases = 0
let lastElement = elements[0]

for (let i = 1; i < elements.length; i++) {
    const currentElement = elements[i]

    if (currentElement > lastElement) increases++

    lastElement = currentElement
}

console.log(increases)
