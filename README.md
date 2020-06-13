# Deep Consulting: Back End Test

## Deployment URL (API can be consumed from this URL):

https://deep-test-fernando.herokuapp.com (since free tier of heroku shut down the service after certain time, it is not possible to test from this URL the feature of delete metric older than two hour. It is possible to test this feature in a local deployment).

## App recording

![app Demo](https://github.com/nandodrw/deep-test-backend/blob/master/assets/Screen%20Recording%202020-06-12%20at%2019.41.05.gif)

## API Documentation

### Register new metric

**HTTP Request:** `POST https://deep-test-fernando.herokuapp.com/metric/:metric-name`

**JSON Payload:**

```json
  {
    "value": 23
  }
```

### Register metric sum

**HTTP Request:** `POST https://deep-test-fernando.herokuapp.com/metric/:metric-name/sum`

# Shortcuts or improvements to do

* Add unit testing.
* Probably use Typescript for type checking (this will need a bundle pipeline).
* Execute worker on a different threat (hard to do at the moment because the in memory database).
