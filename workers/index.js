const workerEngine = require('./worker-engine')
const deleteOldMetricWorker = require('./delete-old-metrics')
const config = require('../config')

workers = [
  deleteOldMetricWorker(config.MAX_METRIC_ENTRY_DURATION)
]

// Fire worker engine wit a set of workers which
// represent logic that should run every some timestamp
workerEngine.startWorker(workers, config.WORKER_EXECUTION_DELAY)
