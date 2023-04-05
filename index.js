import randomHex from 'crypto-random-hex'

let COUNTER
let PROCESS_UNIQUE

export default function hexObjectId () {
  if (COUNTER == null) {
    COUNTER = Math.floor(Math.random() * 0xffffff)
  }

  if (PROCESS_UNIQUE == null) {
    PROCESS_UNIQUE = randomHex(5)
  }

  const time = Math.floor(Date.now() / 1000).toString(16).padStart(8, '0')
  const inc = (COUNTER = (COUNTER + 1) % 0xffffff).toString(16).padStart(6, '0')

  if (time.length !== 8) {
    throw new Error('This library only supports dates up until Feb 7th, 2106 06:28:15 UTC')
  }

  return time + PROCESS_UNIQUE + inc
}
