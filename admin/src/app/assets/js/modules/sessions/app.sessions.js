import loginUrl from './login/login.html';
import LoginController from './login/login.controller';
import forgotUrl from './forgot/forgot.html';
import ForgotController from './forgot/forgot.controller';
import recoverUrl from './recover/recover.html';
import RecoverController from './recover/recover.controller';

export default angular
  .module('app.sessions', [])
  .config(routeConfig)
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    ctChief: 'ctChief',
    workChief: 'worChief',
    worker: 'worker',
  }).name;

function routeConfig($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login?error',
      templateUrl: loginUrl,
      controller: LoginController,
      controllerAs: 'vm',
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: forgotUrl,
      controller: ForgotController,
      controllerAs: 'vm',
    })
    .state('recover', {
      url: '/recover?token&type',
      templateUrl: recoverUrl,
      controller: RecoverController,
      controllerAs: 'vm',
    })
}

routeConfig.$inject = ['$stateProvider'];
