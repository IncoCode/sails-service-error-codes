module.exports = {
  getCodes: function (newCodes) {
    return require('./ErrorCodes')(newCodes);
  }
};
