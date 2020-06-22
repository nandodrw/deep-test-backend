const dataService = require('../services/data-service')
const assert = require('assert').strict;
const deleteOldMetricGenerator = require('./delete-old-metrics')

dataService.storeMetric('test_metric', 105)

console.info('Set Metric before run delete logic ...')
assert.strictEqual(dataService.getMetricsSum('test_metric'), 105)

// 500 millisecond is set for max time duration for a metric entry
const deleteOldMetric = deleteOldMetricGenerator(500)

setTimeout(() => {
  dataService.storeMetric('test_metric', 34)
}, 300)

setTimeout(() => {
  deleteOldMetric()
  console.info('Check that only entries older than defined time were deleted ...')
  assert.strictEqual(dataService.getMetricsSum('test_metric'), 34)
}, 510)
