export default function MainController(
  $rootScope,
  $state,
  USER_ROLES,
  LoopBackAuth,
  $cookies,
  $interval,
  Personnel,
) {
  $rootScope.currentUser = null;
  $rootScope.userRoles = USER_ROLES;

  $rootScope.setCurrentUser = function (user, fromInterval) {
    $rootScope.currentUser = user;
    if (!fromInterval) upsertIntervalDetails(user);
  };

  $rootScope.goBackNotFound = function (url) {
  };

  function upsertIntervalDetails(user) {
    const detailsInterval = $rootScope.detailsInterval;
    if (!detailsInterval || !detailsInterval.interval) {
      $rootScope.detailsInterval = {
        interval: $interval(() => $rootScope.updateMyself(user, false, true), 300000),
      };
      $rootScope.updateMyself(user, false, true);
    }
  }

  $rootScope.updateMyself = function (personnel, refresh, fromInterval) {
    const user = $rootScope.currentUser;
    if (user && user.id && (!personnel || (personnel && user.id === personnel.id))) {
      setTimeout(() => {
        Personnel.v2details({ id: user.id }).$promise.then(function (user) {
          localStorage.setItem('user', JSON.stringify(user));
          $rootScope.setCurrentUser(user, fromInterval);
          if (refresh) $state.go($state.current, {}, { reload: true });
        });
      }, 0);
    }
  };

  $rootScope.logout = function () {
    sessionStorage.clear();
    if (localStorage.$LoopBack$accessTokenId) {
      Personnel.logout().$promise.finally(function () {
        endLogout();
      });
    } else endLogout();

    function endLogout() {
      if ($rootScope.detailsInterval && $rootScope.detailsInterval.interval) {
        $interval.cancel($rootScope.detailsInterval.interval);
      }

      localStorage.removeItem('user');
      localStorage.removeItem('$LoopBack$accessTokenId');
      $rootScope.setCurrentUser(null);
      $cookies.remove('userId');
      $cookies.remove('access_token');

      $state.go('login');
    }
  };

  $rootScope.theme = {
    template: 'theme-template-dark',
  };

  function active() {
    $rootScope.theme.mobileAside = false;
    if (localStorage.getItem('user') && LoopBackAuth.accessTokenId && !$rootScope.currentUser) {
      $rootScope.setCurrentUser(JSON.parse(localStorage.getItem('user')));
    }
  }

  active();
}

MainController.$inject = [
  '$rootScope',
  '$state',
  'USER_ROLES',
  'LoopBackAuth',
  '$cookies',
  '$interval',
  'Personnel',
];
