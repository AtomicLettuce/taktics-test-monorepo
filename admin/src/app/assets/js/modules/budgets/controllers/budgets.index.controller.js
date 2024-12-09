export default class BudgetsController {
  constructor(BudgetService) {
    this.BudgetService = BudgetService;
    this.budgets = [];
    this.filteredBudgets = [];
    this.error = null;
    this.budgetToDelete = null;
    this.showBudgetForm=false;
    this.newBudget={};

    // Filter fields
    this.filters = {
      client: '',
      name: '',
      dateFrom: '',
      dateTo: ''
    };

    this.loadBudgets();
  }

  loadBudgets() {
    this.BudgetService.getBudgets()
      .then((response) => {
        this.budgets = response.data;
        this.applyFilters();
      })
      .catch((error) => {
        console.error('Error fetching budgets:', error);
        this.error = 'Failed to load budgets. Please try again later.';
      });
  }

  showAddBudgetForm(){
    this.showBudgetForm = true;
    this.newBudget = { name: '', thumbnail: '', date: '', clientName: ''};
  }

  addBudget(){
    this.showBudgetForm = false;
    this.BudgetService.addBudget(this.newBudget);
    this.loadBudgets();
  }


  applyFilters() {
    this.filteredBudgets = this.budgets.filter((budget) => {
      const { client, name, dateFrom, dateTo } = this.filters;

      if (client && !budget.clientName.toLowerCase().includes(client.toLowerCase())) {
        return false;
      }

      // Apply name filter
      if (name && !budget.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }

      // Apply date filters
      const budgetDate = new Date(budget.date);
      if (dateFrom && new Date(dateFrom) > budgetDate) {
        return false;
      }
      if (dateTo && new Date(dateTo) < budgetDate) {
        return false;
      }

      return true;
    })
  }
  confirmDelete(budgetId) {
    this.showConfirmationPopup = true; // Show the confirmation popup
    this.budgetToDelete = budgetId; // Store the budget ID
  }

  performDelete() {
    this.BudgetService.deleteBudget(this.budgetToDelete).then(() => {
      this.budgetToDelete = null;
      this.loadBudgets();
      this.showConfirmationPopup = false; // Hide the confirmation popup
    });

  }

  cancelDelete() {
    this.showConfirmationPopup = false; // Hide the confirmation popup
    this.budgetToDelete = null; // Reset the budget ID
  }
}



BudgetsController.$inject = ['BudgetService'];