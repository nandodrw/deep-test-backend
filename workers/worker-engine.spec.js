const workerEngine = require('./worker-engine')
const assert = require('assert').strict;

let executionCounter = 0

const mockWorker = () => executionCounter++

console.info('Before worker execution state should be untouched ...')
assert.strictEqual(executionCounter, 0)

workerEngine.startWorker([mockWorker], 100)
setTimeout(() => {

  console.info('Check change of state after worker execution ...')
  assert.strictEqual(executionCounter, 10)
  workerEngine.stopWorker()

  console.info('All check passed for: worker-engine.js')
}, 1050)

