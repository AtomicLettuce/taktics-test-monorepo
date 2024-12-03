import './app.loopback.config';
import './app.translations';
import interceptor from './app.interceptor';

export default angular
  .module('app.config', ['app.loopback.config', 'app.translations', interceptor])
  .config(RoutesConfig).name;


function RoutesConfig($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/login');
  $locationProvider.html5Mode(process.env.html5Mode);
}
RoutesConfig.$inject = ['$urlRouterProvider', '$locationProvider'];
