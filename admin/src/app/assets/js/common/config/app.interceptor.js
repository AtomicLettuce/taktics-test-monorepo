export default angular.module('app.interceptor', []).config(Interceptor).run(StateChange).name;

function Interceptor($httpProvider) {
  const urlsNoLoader = [];

  $httpProvider.interceptors.push([
    '$q',
    '$location',
    '$rootScope',
    function ($q, $location, $rootScope) {
      let numLoadings = 0;
      return {
        request: function (config) {
          if (willShowLoader(config.url)) {
            numLoadings++;
            $rootScope.$broadcast('loader_show')
          }
          return config || $q.when(config);
        },
        response: function (response) {
          if (--numLoadings <= 0) {
            $rootScope.$broadcast('loader_hide');
          }
          return response || $q.when(response);
        },
        responseError: function (rejection) {
          if (!--numLoadings) {
            $rootScope.$broadcast('rejection', rejection);
            $rootScope.$broadcast('loader_hide');
          }

          if (rejection.status === 401) $rootScope.logout();
          else if (rejection.status === 404) $rootScope.goBackNotFound(rejection.config.url);

          return $q.reject(rejection);
        },
      };

      function willShowLoader(url) {
        return !urlsNoLoader.some(urlNoLoader => url.indexOf(urlNoLoader) > -1);
      }
    },
  ]);
}

Interceptor.$inject = ['$httpProvider'];

function StateChange($rootScope, $state, AdminType, $window) {
  $rootScope.$on('$stateChangeStart', function (event, nextState) {
    $rootScope.theme.mobileAside = false;
    var whiteStates = ['login', 'forgot', 'recover'];

    if (isTheUserNotLoggedIn(localStorage.$LoopBack$accessTokenId, whiteStates, nextState)) {
      event.preventDefault();
      $state.go('login');
    } else if (localStorage.user) {
      if (whiteStates.indexOf(nextState.name) > -1) {
        event.preventDefault();
        $state.go('home');
      }

      if (window.onscroll) window.onscroll = null;
      if (window.onresize) window.onresize = null;

      var user = JSON.parse(localStorage.user);
      var states = JSON.parse(localStorage.user).permissions;
    }
  });

  $rootScope.$on('$stateChangeSuccess', function (event, toState) {
    $rootScope.urlSelected = toState.url;
    $rootScope.state = toState.name;
  });

  $rootScope.$on('$locationChangeSuccess', function () {
  });
}

StateChange.$inject = ['$rootScope', '$state', 'AdminType', '$window'];

function isTheUserNotLoggedIn(accessToken, whiteStates, next) {
  return !accessToken && whiteStates.indexOf(next.name) === -1;
}
