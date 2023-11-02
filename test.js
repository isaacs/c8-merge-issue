import assert from 'node:assert'

delete process.env.BRANCH_SWITCH
const { x: first } = await import('./dist/esm/index.js')

process.env.BRANCH_SWITCH = '420'
const { default: { x: second } } = await import('./dist/commonjs/index.js')

assert.equal(first(), 0)
assert.equal(second(), 420)
