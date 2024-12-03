import menuToggleUrl from './views/menu-toggle.html';
export default function menuToggle() {
  return {
    restrict: 'A',
    transclude: true,
    replace: true,
    scope: {
      name: '@',
      icon: '@',
    },
    templateUrl: menuToggleUrl,
    link: function (scope, element, attrs) {
      scope.id = attrs.name.replace(/\s/g, '_').toLowerCase();
      element
        .children()
        .first()
        .on('click', function (e) {
          e.preventDefault();
          let link = angular.element(e.currentTarget);

          if (link.hasClass('active')) {
            link.removeClass('active');
          } else {
            link.addClass('active');
          }
        });


      scope.isOpen = function () {
        return element.find('a').hasClass('active');
      };
    },
  };
}
