import assert from 'node:assert'

import hexObjectId from './index.js'

assert.strictEqual(typeof hexObjectId(), 'string')
assert.strictEqual(hexObjectId().length, 24)
assert(hexObjectId().match(/^[0-9a-f]{24}$/))

assert.notStrictEqual(hexObjectId(), hexObjectId())

const now = Math.floor(Date.now() / 1000)
const id = hexObjectId()
const parsed = Number.parseInt(id.slice(0, 8), 16)

assert(now === parsed || now + 1 === parsed)

const first = hexObjectId()
const second = hexObjectId()

assert.strictEqual(first.slice(8, 18), second.slice(8, 18))

assert.strictEqual(
  (Number.parseInt(first.slice(-6), 16) + 1) % 0xffffff,
  Number.parseInt(second.slice(-6), 16)
)
