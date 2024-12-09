export default class BudgetsController {
    constructor($stateParams, BudgetService) {
        this.BudgetService = BudgetService;
        this.budgetId = $stateParams.id;
        this.budget = null;
        this.newChapter = null;
        this.showChapterForm = false;
        this.loadBudgetDetails();
        this.showEditBudget = false;
        this.newDetails = null;
    }



    loadBudgetDetails() {
        this.BudgetService.getBudget(this.budgetId)
            .then((response) => {
                this.budget = response.data;
                this.newDetails = this.budget;
                if (this.budget.listOfChapters) {
                    this.budget.listOfChapters.forEach(chapter => {
                        chapter.showAddBatchForm = false;
                        chapter.newBatch = {};
                        if (chapter.listOfBatches) {
                            chapter.listOfBatches.sort((a, b) => a.rank - b.rank)
                        }
                    });
                    this.budget.listOfChapters.sort((a, b) => a.rank - b.rank);
                }
                this.newChapter = { rank: 0, description: '', labourSaleCoefficient: 0, materialSaleCoefficient: 0, budgetId: this.budget.id };
            })
            .catch((error) => {
                console.error('Error fetching budgets:', error);
                this.error = 'Failed to load budgets. Please try again later.';
            });
    }

    updateChapter(chapter) {
        const { showAddBatchForm, newBatch, ...chapterData } = chapter;
        this.BudgetService.updateChapter(chapterData).then((response) => {
            this.loadBudgetDetails();
        }).catch((error) => {
            console.error('Error updating chapter:', error);
            alert('Failed to update chapter.');
        });
    }
    deleteChapter(chapterId) {
        this.BudgetService.deleteChapter(chapterId).then((response) => {
            this.loadBudgetDetails();
        }).catch((error) => {
            console.error('Error deleting chapter:', error);
            alert('Failed to delete chapter.');
        });
    }


    updateBatch(batch) {
        this.BudgetService.updateBatch(batch);
        this.loadBudgetDetails();
    }

    deleteBatch(batchId) {
        this.BudgetService.deleteBatch(batchId).then(() => { this.loadBudgetDetails(); })
    }

    showAddBatchForm(chapter) {
        chapter.showAddBatchForm = true;
        chapter.newBatch = { rank: 0, description: '', ammount: 0, labourCostImport: 0, materialCostImport: 0 };
    }
    // Add Batch
    addBatch(chapter) {
        var newBatch = chapter.newBatch;
        newBatch.chapterId = chapter.id;
        this.BudgetService.addBatch(newBatch);
        this.loadBudgetDetails();
    }

    showAddChapterForm() {
        this.showChapterForm = true;
        this.newChapter = { rank: 0, description: '', labourSaleCoefficient: 0, materialSaleCoefficient: 0, budgetId: this.budget.id };
    }

    addChapter() {
        this.showChapterForm = false;
        this.BudgetService.addChapter(this.newChapter)
        this.loadBudgetDetails();
    }

    showEditDetailsForm() {
        this.showEditBudget = true;
        this.newDetails = this.budget;
    }

    editDetails() {
        this.showEditBudget = false;
        console.log(this.newDetails);
        this.BudgetService.editBudgetDetails(this.newDetails);
        this.loadBudgetDetails();
    }


}



BudgetsController.$inject = ['$stateParams', 'BudgetService'];