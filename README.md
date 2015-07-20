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
// api/services/ErrorCodes.js

module.exports = require('sails-service-error-codes').getCodes();
```

Now you can use ```ErrorCodes``` anywhere in your app. For example:
```javascript
// api/responses/ok.js

module.exports = function (data, code, message, root) {
  var response = _.assign({
    code: code || ErrorCodes.ok.code,
    message: message || ErrorCodes.ok.message,
    data: data || {}
  }, root);

  this.req._sails.log.silly('Sent (200 OK)\n', response);

  this.res.status(200);
  this.res.jsonx(response);
};
```

Also you can override or add your own error codes. Just pass object with new ones (or overrided old ones) in ```getCodes``` function:
```javascript
// it can be somewhere in config
var newCodes = {
  ok: {
    code: 'OKAY'
  },
  someNewError: {
    code: 'E_SOME_ERROR',
    message: 'Some error'
  }
};

module.exports = require('sails-service-error-codes').getCodes(newCodes);
```

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

MIT
