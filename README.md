# sails-service-error-codes

![Build Status](https://img.shields.io/travis/IncoCode/sails-service-error-codes.svg) ![Coverage](https://img.shields.io/coveralls/IncoCode/sails-service-error-codes.svg) ![Downloads](https://img.shields.io/npm/dm/sails-service-error-codes.svg) ![npm version](https://img.shields.io/npm/v/sails-service-error-codes.svg) ![dependencies](https://img.shields.io/david/IncoCode/sails-service-error-codes.svg) ![dev dependencies](https://img.shields.io/david/dev/IncoCode/sails-service-error-codes.svg) ![License](https://img.shields.io/npm/l/sails-service-error-codes.svg)



## Getting Started

Install it via npm:

```shell
npm install sails-service-error-codes
```

## Usage

Create a new service:
```javascript
// api/services/ERROR_CODES.js

module.exports = require('sails-service-error-codes').create();
```

Now you can use ```ERROR_CODES``` anywhere in your app. For example:
```javascript
// api/responses/ok.js

module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || ERROR_CODES.ok.code,
    message: message || ERROR_CODES.ok.message,
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (200 OK)\n', response);

  this.res.status(200);
  this.res.jsonx(response);
};
```

Also you can override or add your own error codes:

- you can pass object with new errors (or overrided old ones) in ```create``` function:
```javascript
var newCodes = {
  ok: {
    code: 'OKAY'
  },
  someNewError: {
    code: 'E_SOME_ERROR',
    message: 'Some error'
  }
};

module.exports = require('sails-service-error-codes').create(newCodes);
```
- you can create a new config file ```errorCodes.js``` in ```config``` folder and define your error codes there:
```javascript
// config/errorCodes.js

module.exports.errorCodes = {
  ok: {
    code: 'OKAY'
  },
  forbidden: {
    message: 'really, forbidden'
  },
  newError: {
    code: 'some error',
    message: 'some message'
  }
};

```
- or use both methods described above simultaneously.

#### Default error codes
```javascript
var defaultCodes = {
  badRequest: {
    code: 'E_BAD_REQUEST',
    message: 'The request cannot be fulfilled due to bad syntax'
  },

  created: {
    code: 'CREATED',
    message: 'The request has been fulfilled and resulted in a new resource being created'
  },

  forbidden: {
    code: 'E_FORBIDDEN',
    message: 'User not authorized to perform the operation'
  },

  notFound: {
    code: 'E_NOT_FOUND',
    message: 'The requested resource could not be found but may be available again in the future'
  },

  ok: {
    code: 'OK',
    message: 'Operation is successfully executed'
  },

  serverError: {
    code: 'E_INTERNAL_SERVER_ERROR',
    message: 'Something bad happened on the server'
  },

  unauthorized: {
    code: 'E_UNAUTHORIZED',
    message: 'Missing or invalid authentication token'
  }
};
```

## License

The MIT License (MIT)

Copyright (c) 2015 IncoCode

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
