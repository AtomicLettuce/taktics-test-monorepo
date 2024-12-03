const Details = require('./personnel/methods/details-v2');

module.exports = function (Personnel) {
  const excludedProperties = ['realm', 'emailVerified', 'verificationToken'];

  excludedProperties.forEach(function (p) {
    delete Personnel.definition.rawProperties[p];
    delete Personnel.definition.properties[p];
    delete Personnel.prototype[p];
  });

  Details(Personnel).register();
};
