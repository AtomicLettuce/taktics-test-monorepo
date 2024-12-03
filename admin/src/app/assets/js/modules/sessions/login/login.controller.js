export default function LoginController(
  $rootScope,
  $state,
  Personnel,
  PersonnelType,
  $translate,
  $window
) {
  var vm = this;

  $rootScope.pageTitle = $translate.instant('login.loginAction');
  vm.user = { email: '', password: '' };
  vm.params = { include: '' };

  vm.doLogin = function () {
    if (!vm.user.email.length || !vm.user.password.length) {
    } else {
      Personnel.login(vm.params, vm.user, successCallback, function (err) {
        var title =
          err.data && err.data.error ? err.data.error.message : $translate.instant('login.error');
      });
    }
  };

  function successCallback(personnel) {
    Personnel.v2details({ id: personnel.userId }).$promise.then(function (personnel) {
      localStorage.setItem('user', JSON.stringify(personnel));
      $rootScope.setCurrentUser(personnel);
      $state.go('home');
    });
  }
}

LoginController.$inject = [
  '$rootScope',
  '$state',
  'Personnel',
  'PersonnelType',
  '$translate',
  '$window',
];
