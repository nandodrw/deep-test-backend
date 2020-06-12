class DataService {

  IN_MEMORY_DATABASE = new Map()

  storeMetric(metric, value) {
    if (this.IN_MEMORY_DATABASE.has(metric)) {
      this.IN_MEMORY_DATABASE
        .get(metric)
        .set(Date.now(), value)
    } else {
      this.IN_MEMORY_DATABASE.set(metric, new Map([[Date.now(), value]]))
    }
  }

  getMetricsSum(metric) {
    if (!this.IN_MEMORY_DATABASE.has(metric)) return 0
    let sum = 0
    this.IN_MEMORY_DATABASE.get(metric).forEach((value, key) => {
      sum += value
    })
    return sum
  }

  deleteWithTimeConditions(condition) {
    this.IN_MEMORY_DATABASE.forEach((metricMap, metricName) => {
      metricMap.forEach((value, timestamp) => {
        if(condition(timestamp)) {
          metricMap.delete(timestamp)
          console.info(`Deleting metric entry for metric: ${metricName} with value ${value}`)
        }
      })
    })
  }
}

module.exports =  new DataService()
