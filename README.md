# Deep Consulting: Back End Test

## Deployment URL (API can be consumed from this URL):

http://157.245.253.15

## App recording

![app Demo](https://github.com/nandodrw/deep-test-backend/blob/master/assets/Screen%20Recording%202020-06-12%20at%2019.41.05.gif)

## API Documentation

### Register new metric

**HTTP Request:** `POST http://157.245.253.15/metric/:metric-name`

**JSON Payload:**

```json
  {
    "value": 23
  }
```

### Register metric sum

**HTTP Request:** `POST http://157.245.253.15/metric/:metric-name/sum`

# Shortcuts or improvements to do

* Add integration testing (unit testing is included for the most critical components).
* Probably use Typescript for type checking (this will need a bundle pipeline).
* Execute worker on a different threat (hard to do at the moment because the in memory database).
