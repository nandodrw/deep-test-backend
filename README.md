# Deep Consulting: Back End Test

## Deployment URL (API can be consumed from this URL):

https://deep-test-fernando.herokuapp.com

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
