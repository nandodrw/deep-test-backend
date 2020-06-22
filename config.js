module.exports = {
  // Execution delay for a workers' logic run
  WORKER_EXECUTION_DELAY: 1000,

  // The time after the a metric entry should be ignored
  // 7.2e+6 represent 2 hours in milliseconds (as requested on the
  // requirements)
  MAX_METRIC_ENTRY_DURATION: 7.2e+6
}