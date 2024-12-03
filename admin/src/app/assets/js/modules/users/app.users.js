import angular from 'angular';
import usersUrl from './views/users.index.html';
import UsersController from './controllers/users.index.controller';

export default angular.module('app.users', []).config(routeConfig).name;

function routeConfig($stateProvider) {
  $stateProvider.state('users', {
    url: '/users',
    templateUrl: usersUrl,
    controller: UsersController,
    controllerAs: 'vm',
  });
}

routeConfig.$inject = ['$stateProvider']