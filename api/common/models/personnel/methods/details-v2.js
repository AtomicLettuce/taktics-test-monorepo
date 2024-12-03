const Promise = require('bluebird');
const async = require('async');

const Details = Personnel => {
  return { register };

  function register() {
    Personnel.v2details = v2details;
    Personnel.remoteMethod('v2details', {
      description: 'Personnel details',
      http: { path: '/:id/v2details', verb: 'get', status: 200 },
      accepts: [
        { arg: 'req', type: 'object', http: { source: 'req' } },
        { arg: 'id', type: 'number', required: true },
        { arg: 'options', type: 'object', http: 'optionsFromRequest' },
      ],
      returns: { type: 'object', root: true },
    });
  }

  function v2details(req, id, options = {}, next) {
    return Personnel.findById(id)
  }
};

module.exports = Details;
