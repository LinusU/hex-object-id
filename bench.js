import hexObjectId from './index.js'

let last
for (let i = 0; i < 1_000_000_000; i++) {
  last = hexObjectId()
}

console.log(last)
