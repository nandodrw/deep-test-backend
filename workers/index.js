const deleteOldMetricWorker = require('./delete-old-metrics')

// The will be executed every this time expressed in milliseconds
const WORKER_EXECUTION_DELAY = 1000

module.exports = function fireWorkers() {
  const deleteOldMetricWorker = require('./delete-old-metrics')
  setInterval(() => {
    deleteOldMetricWorker()
  }, WORKER_EXECUTION_DELAY)

}
