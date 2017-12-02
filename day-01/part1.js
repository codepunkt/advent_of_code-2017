const input = require('./input')

const arr = input.split('').map(Number)

let result = 0
let prev = arr[arr.length - 1]
let curr

for (i = 0; i < arr.length; i++) {
  curr = arr[i]
  result += curr === prev ? curr : 0
  prev = curr
}

console.log(result)
