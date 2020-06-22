// Simple worker implementation: a property is used to run recurring logic evey some
// specified time interval

class WorkerEngine  {
  intervalId;

  startWorker(workers, executionDelay) {
    this.intervalId = setInterval(() => {
      workers.forEach(worker => worker())
    }, executionDelay)
  }

  stopWorker() {
    clearInterval(this.intervalId)
  }
} 

module.exports = new WorkerEngine();