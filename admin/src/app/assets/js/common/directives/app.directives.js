import sidebar from './sidebar/sidebar';
import topnav from './topnav/topnav';
import menuLink from './menu-link';
import menuToggle from './menu-toggle';
import navbarScroll from './navbar-hover';

export default angular
  .module('app.directives', [])
  .directive('sidebar', sidebar)
  .directive('topnav', topnav)
  .directive('menuLink', menuLink)
  .directive('menuToggle', ['$location', menuToggle])
  .directive('navbarScroll', navbarScroll)
  .name