export default class BudgetService {
    constructor($http) {
      this.$http = $http;
      this.apiBaseUrl = 'http://localhost:3000/api';
    }
  
    getBudgets() {
      return this.$http.get(`${this.apiBaseUrl}/Budgets`);
    }

    deleteBudget(budgetId){
      // SHOULD DELETE BUDGET + OFFSPRING. CURRENTLY ONLY DELETES BUDGET

      return this.$http.delete(`${this.apiBaseUrl}/Budgets/${budgetId}`)
    }


  }
  
  BudgetService.$inject = ['$http'];