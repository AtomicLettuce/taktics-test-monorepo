import angular from 'angular';
import budgetsUrl from './views/budgets.index.html';
import BudgetsController from './controllers/budgets.index.controller';
import BudgetService from './services/budget.service';

export default angular
.module('app.budgets', [])
.service('BudgetService', BudgetService)
.config(routeConfig)
.name;

function routeConfig($stateProvider) {
  $stateProvider.state('budgets', {
    url: '/budgets',
    templateUrl: budgetsUrl,
    controller: BudgetsController,
    controllerAs: 'vm',
  });
}

routeConfig.$inject = ['$stateProvider']