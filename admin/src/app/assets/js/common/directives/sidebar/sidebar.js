import sidebarUrl from './sidebar.html';

export default function sidebar() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: sidebarUrl,
  };
}

sidebar.$inject = [];
