const dataService = require('../services/data-service.js')

// Max time a metric could be available at data storage
const MAX_TIME_DIFFERENCE = 7.2e+6

module.exports = function () {
  dataService.deleteWithTimeConditions((timestamp) =>
    Date.now() - timestamp > MAX_TIME_DIFFERENCE
  )
}