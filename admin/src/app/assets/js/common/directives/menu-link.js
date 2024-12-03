import menuLinkUrl from './views/menu-link.html';

export default function menuLink() {
  var directive = {
    restrict: 'A',
    transclude: true,
    replace: true,
    scope: {
      href: '@',
      icon: '@',
      name: '@',
      uiSref: '@',
    },
    controller: MenuLinkController,
    controllerAs: 'vm',
    link,
    templateUrl: menuLinkUrl,
  };
  return directive;

  function link(scope, element, attrs, linkCtrl) {
    if (linkCtrl.isSelected(attrs.href)) linkCtrl.setBreadcrumb(attrs.name);

    element.click(function () {
      linkCtrl.setBreadcrumb(attrs.name);
    });

    scope.isSelected = function () {
      return linkCtrl.isSelected(attrs.href);
    };
  }
}

function MenuLinkController($element, $rootScope) {
  this.getName = function (name) {
    return name !== undefined ? name : $element.find('a').text().trim();
  };

  this.setBreadcrumb = function (name) {
    $rootScope.pageTitle = this.getName(name);
    $rootScope.breadcrumbs = [{ name: $rootScope.pageTitle }];
  };

  this.isSelected = function (href) {
    return parse(href) === parse($rootScope.urlSelected);

    function parse(value) {
      return value && value.split('/')[1];
    }
  };
}

MenuLinkController.$inject = ['$element', '$rootScope'];
