export default class BudgetsController {
    constructor($stateParams, BudgetService) {
        this.BudgetService = BudgetService;
        this.budgetId = $stateParams.id;
        this.budget = null;
        this.chapters = [];
        this.loadBudgetDetails();
    }



    loadBudgetDetails() {       
        this.BudgetService.getBudget(this.budgetId)
        .then((response) => {
            this.budget= response.data;
        })
        .catch((error) => {
          console.error('Error fetching budgets:', error);
          this.error = 'Failed to load budgets. Please try again later.';
        });
    }




}



BudgetsController.$inject = ['$stateParams','BudgetService'];