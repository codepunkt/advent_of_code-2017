const input = require('./input')

const halfLength = input.length / 2
const firstHalf = input.substr(0, halfLength).split('')
const secondHalf = input.substr(halfLength).split('')
const arr1 = [...firstHalf, ...secondHalf].map(Number)
const arr2 = [...secondHalf, ...firstHalf].map(Number)

let result = 0

for (i = 0; i < arr1.length; i++) {
  if (arr1[i] === arr2[i]) {
    result += arr1[i]
  }
}

console.log(result)
