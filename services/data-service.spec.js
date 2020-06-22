const dataService = require('../services/data-service.js')
const assert = require('assert').strict;

dataService.storeMetric('metric_1', 5)

// Test case 1
console.info('Check metric data is stored properly ...')
assert.strictEqual(dataService.getMetricsSum('metric_1'), 5)

// Test case 2
setTimeout(() => {
  dataService.storeMetric('metric_1', 15)
  assert.strictEqual(dataService.getMetricsSum('metric_1'), 20)
}, 100)
console.info('Check accumulation of values for a metric ...')

// Test case 3
console.info('Query data for not stored metric should return 0 ...')
assert.strictEqual(dataService.getMetricsSum('metric_2'), 0)

// Test case 4
dataService.storeMetric('metric_3', 10)
assert.strictEqual(dataService.getMetricsSum('metric_3'), 10)
setTimeout(() => {

  dataService.storeMetric('metric_3', 25)
  dataService.deleteWithTimeConditions(timestamp => Date.now() - timestamp > 1000)
  console.info('Check that data is deleted according callback conditions ...')
  assert.strictEqual(dataService.getMetricsSum('metric_3'), 25)
  assert.strictEqual(dataService.getMetricsSum('metric_1'), 0)

  console.info('All check passed for: data-service.js')
}, 1500)

