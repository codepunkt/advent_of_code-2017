const input = require('./input')

let result = 0

for (let i = 0; i < input.length; i++) {
  const row = input[i]
  const min = Math.min(...row)
  const max = Math.max(...row)
  result += Math.abs(min - max)
}

console.log(result)
