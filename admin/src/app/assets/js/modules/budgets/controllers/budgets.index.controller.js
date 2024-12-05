export default class BudgetsController {
    constructor(BudgetService) {
      this.BudgetService = BudgetService;
      this.budgets = [];
      this.error = null;
  
      this.loadBudgets();
    }
  
    loadBudgets() {
      this.BudgetService.getBudgets()
        .then((response) => {
          this.budgets = response.data;
        })
        .catch((error) => {
          console.error('Error fetching budgets:', error);
          this.error = 'Failed to load budgets. Please try again later.';
        });
    }
  }
  
  BudgetsController.$inject = ['BudgetService'];