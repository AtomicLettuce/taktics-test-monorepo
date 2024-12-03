export default function LoginController(Personnel, $translate) {
  var vm = this;

  vm.doRemember = () => {
    Personnel.resetPassword(
      { email: vm.email },
      _ => {
        vm.rememberSuccess = true;
      },
      err => {
      }
    );
  };
}

LoginController.$inject = ['Personnel', '$translate'];
