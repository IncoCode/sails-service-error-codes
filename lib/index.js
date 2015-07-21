module.exports = {
  create: function (newCodes) {
    return require('./ErrorCodes')(newCodes);
  }
};
