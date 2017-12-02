const input = require('./input')

let result = 0

const pairwise = list => {
  if (list.length < 2) {
    return []
  }

  const first = list[0]
  const rest = list.slice(1)
  const pairs = rest.map(x => [first, x])

  return [...pairs, ...pairwise(rest)]
}

for (let i = 0; i < input.length; i++) {
  const row = input[i]
  const pairs = pairwise(row)
  const [first, second] = pairs.find(
    ([first, second]) => first % second === 0 || second % first === 0
  )

  result += first % second === 0 ? first / second : second / first
}

console.log(result)
