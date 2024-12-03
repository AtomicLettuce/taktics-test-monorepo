import topnavUrl from './topnav.html';

export default function topnav() {
  TopNavController.$inject = [
    '$rootScope',
    '$translate'
  ]
  function TopNavController($rootScope, $translate) {
  }

  return {
    replace: true,
    restrict: 'E',
    templateUrl: topnavUrl,
    controller: TopNavController,
    controllerAs: 'vm'
  };
}
