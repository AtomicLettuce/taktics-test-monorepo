(function() {
  'use strict';

  angular.module('app.config').factory('$exceptionHandler', function() {
    return function(exception, cause) {
      Bugsnag.notifyException(exception, { diagnostics: { cause: cause } });
    };
  });
})();
