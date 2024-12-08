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
    const a=this.$http.get(`${this.apiBaseUrl}/Chapters`); // We only do this to force the chapters to be updated. Somehow, afterRemote does not work (¿)
    const b=this.$http.get(`${this.apiBaseUrl}/Batches`); // We only do this to force the chapters to be updated. Somehow, afterRemote does not work (¿)
    console.log(a.response)
    console.log(b.response);
    return this.$http.get(`${this.apiBaseUrl}/Budgets/${budgetId}`);
  }

  updateChapter(chapter){
    return this.$http.put(`${this.apiBaseUrl}/Chapters/${chapter.id}`, chapter);
  }

  deleteChapter(chapterId){
    return this.$http.delete(`${this.apiBaseUrl}/Chapters/${chapterId}`)
  }
  updateBatch(batch){
    return this.$http.put(`${this.apiBaseUrl}/Batches/${batch.id}`, batch);
  }
  deleteBatch(batchId){
    return this.$http.delete(`${this.apiBaseUrl}/Batches/${batchId}`)
  }
  addBatch(newBatch){
    return this.$http.post(`${this.apiBaseUrl}/Batches`, newBatch)
  }
  addChapter(newChapter){
    return this.$http.post(`${this.apiBaseUrl}/Chapters`, newChapter)
  }

}

BudgetService.$inject = ['$http'];