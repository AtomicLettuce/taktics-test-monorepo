export default class BudgetService {
  constructor($http) {
    this.$http = $http;
    this.apiBaseUrl = 'http://localhost:3000/api';
  }

  getBudgets() {
    return this.$http.get(`${this.apiBaseUrl}/Budgets`);
  }

  deleteBudget(budgetId) {
    return this.$http.delete(`${this.apiBaseUrl}/Budgets/${budgetId}`)
  }



  getBudget(budgetId){
    this.$http.get(`${this.apiBaseUrl}/Chapters`); // We only do this to force the chapters to be updated. Somehow, afterRemote does not work (¿)
    this.$http.get(`${this.apiBaseUrl}/Batches`); // We only do this to force the chapters to be updated. Somehow, afterRemote does not work (¿)
    return this.$http.get(`${this.apiBaseUrl}/Budgets/${budgetId}`);
  }
}

BudgetService.$inject = ['$http'];