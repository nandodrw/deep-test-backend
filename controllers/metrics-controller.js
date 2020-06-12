const dataService = require('../services/data-service.js')

class MetricController {

  constructor() {
    this.storeMetric = this.storeMetric.bind(this)
  }

  storeMetric(req, res, reqUrl) {
    let rawPayload = ''
    req.on('data', (chunk) => {
      rawPayload += chunk.toString()
    });

    req.on('end', () => {

      let payload;

      try {
        payload = JSON.parse(rawPayload)
      } catch (e) {
        return this.requestError(req, res)
      }

      if (typeof(payload) !== 'object' || !payload.hasOwnProperty('value') || isNaN(Number(payload.value)))
        return this.requestError(req, res)

      dataService.storeMetric(reqUrl.pathname.substr(8), Math.floor(payload.value))
      res.writeHead(200);
      res.end();
    })
  }

  getMetricSum(req, res, reqUrl) {
    res.writeHead(200);
    res.write(
      dataService.getMetricsSum(
        reqUrl.pathname.substr(8).substr(0, reqUrl.pathname.substr(8).indexOf('/'))).toString()
    )
    res.end();
  }

  notFound(req, res) {
    res.writeHead(404);
    res.write('Not found');
    res.end();
  }

  requestError(req, res) {
    res.writeHead(400);
    res.write('Bad request');
    res.end();
  }
}

module.exports = new MetricController()
