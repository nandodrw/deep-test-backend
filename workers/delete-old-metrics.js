const dataService = require('../services/data-service.js')

module.exports = (maxTimeAfterMetricShouldBeDeleted) => {
  return () => {
    dataService.deleteWithTimeConditions((timestamp) =>
      Date.now() - timestamp > maxTimeAfterMetricShouldBeDeleted
    )
  }
}