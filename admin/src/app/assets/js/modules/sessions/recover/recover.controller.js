export default function LoginController($rootScope, $state, $translate, Personnel) {
  var vm = this;

  vm.params = $state.params;
  vm.types = { remember: 'forgot', activate: 'activate' };
  vm.message = { title: $translate.instant('general.loading') };

  function doLogin() {
    Personnel.login(
      { include: '' },
      { email: vm.personnelInfo.email, password: vm.password[1] },
      function(resp) {
        Personnel.v2details({ id: resp.userId }).$promise.then(function(personnel) {
          if (personnel.workCenter && !personnel.workCenter.urlAvatar)
            personnel.workCenter.urlAvatar = 'assets/img/logo-white.png';
          localStorage.setItem('user', JSON.stringify(personnel));
          $rootScope.setCurrentUser(personnel);
          $state.go('home');
        });
      }
    );
  }

  vm.doChange = function() {
    if (!vm.personnelInfo) return;

    Personnel.changePasswordWithToken(
      { newPassword: vm.password[1], passwordToken: vm.params.token },
      _ => {
        vm.changeSuccess = !vm.changeSuccess;
        vm.message = { title: $translate.instant('recover.success'), loaded: true };
        setTimeout(doLogin, 1000);
      },
      err => {
        vm.message = {
          title:
            err.data && err.data.error
              ? err.data.error.message
              : $translate.instant('recover.error'),
          loaded: true,
        };
      }
    );
  };

  function activate() {
    Personnel.getPersonnelFromToken(
      { token: vm.params.token },
      resp => {
        vm.personnelInfo = resp;
        vm.message = null;
      },
      err => {
        vm.message = {
          title:
            err.data && err.data.error
              ? err.data.error.message
              : $translate.instant('recover.errorPersonnel'),
          loaded: true,
        };
      }
    );
  }

  activate();
}

LoginController.$inject = ['$rootScope', '$state', '$translate', 'Personnel'];
