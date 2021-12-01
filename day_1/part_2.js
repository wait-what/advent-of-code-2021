const { readFileSync } = require('fs')
const input = readFileSync('./input.txt', 'utf8')

const elements = input.split('\n').map(Number)

const summedElements = []

for (let i = 0; i < elements.length - 2; i++)
    summedElements.push(elements[i] + elements[i + 1] + elements[i + 2])

let increases = 0
let lastElement = summedElements[0]

for (let i = 1; i < summedElements.length; i++) {
    const currentElement = summedElements[i]

    if (currentElement > lastElement) increases++

    lastElement = currentElement
}

console.log(increases)
