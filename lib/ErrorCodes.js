/**
 *
 * @param newCodes Array with new codes
 * @returns
 */
function getCodes(newCodes) {
  var _ = require('lodash');

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

  if (!newCodes) {
    return defaultCodes;
  }

  return _.merge(defaultCodes, newCodes);
}

module.exports = getCodes;
