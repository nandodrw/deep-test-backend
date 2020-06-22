const metricController = require('./controllers/metrics-controller.js')
const http = require('http')


/******** CONSTANTS *********/

const ALLOWED_POST_ROUTES = [
  {
    path: /^\/metric\/(?:([^\/]+?))$/i,
    controller: metricController.storeMetric
  },
];

const ALLOWED_GET_REQUESTS = [
  {
    path: /^\/metric\/(?:([^\/]+?))\/sum$/i,
    controller: metricController.getMetricSum
  },
];


/******** BOILERPLATE AND SERVER INITIALIZATION *******/

http.createServer((req, res) => {
  const router = [
    ... ALLOWED_POST_ROUTES.map(endpoint => (
      {
        controller: endpoint.controller,
        path: endpoint.path,
        method: 'POST'
      })
    ),

    ... ALLOWED_GET_REQUESTS.map(endpoint => (
      {
        controller: endpoint.controller,
        path: endpoint.path,
        method: 'GET'
      })
    )
  ]

  // parse the url by using WHATWG URL API
  let reqUrl = new URL(req.url, 'http://127.0.0.1/')
  let routeHandler = router.find(route =>
    route.path.test(reqUrl.pathname) && req.method ===  route.method)

  const controller = routeHandler ? routeHandler.controller : metricController.notFound
  controller(req, res, reqUrl)

}).listen(process.env.PORT || 8080, () => {
  console.log(`Server is running at http://127.0.0.1:${process.env.PORT || 8080}`)
})


/******** WORKERS *********/

require('./workers/index.js')