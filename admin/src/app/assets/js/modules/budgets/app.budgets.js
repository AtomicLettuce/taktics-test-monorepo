import angular from 'angular';
import budgetsUrl from './views/budgets.index.html';
import budgetDetailUrl from './views/budgets.detail.html';
import BudgetsController from './controllers/budgets.index.controller';
import BudgetDetailController from './controllers/budgets.detail.controller';
import BudgetService from './services/budget.service';

export default angular
  .module('app.budgets', [])
  .service('BudgetService', BudgetService)
  .config(routeConfig)
  .name;

function routeConfig($stateProvider) {
  $stateProvider
    .state('budgets', {
      url: '/budgets',
      templateUrl: budgetsUrl,
      controller: BudgetsController,
      controllerAs: 'vm',
    })
    .state('budgetDetail', {
      url: '/budgets/:id',
      templateUrl: budgetDetailUrl,
      controller: BudgetDetailController,
      controllerAs: 'vm',
    });
    ;
}

routeConfig.$inject = ['$stateProvider']