var assert = require('chai').assert;
var ErrorCodesService = require('../../index');
var _ = require('lodash');

var newCodes = {
  someError: {
    code: 'E_SOME_ERROR',
    message: 'some error message'
  },

  someError2: {
    code: 'E_SOME_ERROR2',
    message: '2nd some error message'
  }
};

var newDefCodes = {
  ok: {
    code: 'OKAY'
  },

  forbidden: {
    message: 'newMsg'
  },

  notFound: {
    code: 'NOT_FOUND',
    message: 'newMsg2'
  }
};

function check(codes, newCodes) {
  _.forIn(newCodes, function (value, key) {
    assert.isTrue(key in codes);

    if ('code' in value)
      assert.isTrue(codes[key].code === value.code);

    if ('message' in value)
      assert.isTrue(codes[key].message === value.message);
  });
}

describe('Entry Point', function () {
  it('should properly export', function () {
    assert.isObject(ErrorCodesService);
  });
});

describe('Error codes', function () {
  it('should add new error codes', function (done) {
    var codes = ErrorCodesService.getCodes(newCodes);
    check(codes, newCodes);

    done();
  });

  it('should override default error codes', function (done) {
    var codes = ErrorCodesService.getCodes(newDefCodes);
    check(codes, newDefCodes);

    done();
  });

  it('should override default and add new error codes', function (done) {
    var defNewCodes = _.merge(newCodes, newDefCodes);
    var codes = ErrorCodesService.getCodes(defNewCodes);
    check(codes, defNewCodes);

    done();
  });
});
