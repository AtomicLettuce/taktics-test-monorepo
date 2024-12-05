export default class BudgetService {
    constructor($http) {
      this.$http = $http;
      this.apiBaseUrl = 'http://localhost:3000/api';
    }
  
    getBudgets() {
      return this.$http.get(`${this.apiBaseUrl}/Budgets`);
    }
  }
  
  BudgetService.$inject = ['$http'];