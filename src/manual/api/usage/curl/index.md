---
title: curl API
layout: layout.html
---

# curl

Included is a module that allows you to perform HTTP reuqests just like with cURL.

## Response example

```json
{
  httpCode: 200,
  httpVersion: '1.1',
  headers: {},
  body: null
}
```

## Client example
```js
/**
 * GET request
 */
API.curl({
  url: 'http://your-url-here',
  method: 'GET'
}, function(error, response) {
  console.log(response.body); // What you get back
});

/**
 * POST request
 */
API.curl({
  url: 'http://your-url-here',
  method: 'POST',
  query: 'HELLO FROM OS.js'
}, function(error, response) {
  console.log(response.body); // What you get back
});

/**
 * POST request w/JSON
 * If your body is a JSON object, the content-type will be automatically detected. You can also force it with the 'json:true' option.
 */
API.curl({
  url: 'http://your-url-here',
  method: 'POST',
  query: {
    foo: 'bar'
  }
}, function(error, response) {
  console.log(response.body); // What you get back
});

/**
 * Handling Binary Data
 */
API.curl({
  url: 'http://your-url-here/some-file.png',
  method: 'GET',
  binary: true,
  mime: 'image/png'
}, function(error, response) {
  console.log(response.body); // A binary representation
});

/**
 * Sending Custom Headers
 */
API.curl({
  url: 'http://your-url-here/',
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain'
    // ...
  }
}, function(error, response) {
  console.log(response.body); // What you get back
});

/**
 * Sending Form Data
 */
API.curl({
  url: 'http://your-url-here/',
  method: 'POST',
  contentType: 'application/x-www-form-urlencoded',
  query: {
    fieldName: 'fieldValue'
  }
}, function(error, response) {
  console.log(response.body); // What you get back
});
```
