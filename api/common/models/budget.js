module.exports = function (Budget) {

    // Add a virtual property to include `totalCost` in API responses
    Budget.defineProperty('totalCostImport', { type: 'number', required: false });
    Budget.defineProperty('totalSaleImport', { type: 'number', required: false });
    Budget.defineProperty('listOfChapters', { type: 'array', required: false });
    // Calculate them costs
    Budget.afterRemote('findById', async function (ctx, instance, next) {
        if (instance) {
            // instance.totalCostImport = await instance.calculateTotalCostImport();
            const chapters = await Budget.app.models.Chapter.find({
                where: { budgetId: this.id }
            });
            instance.totalCostImport = chapters.reduce((sum, chapter) => sum + (chapter.totalCostImport || 0), 0);
            instance.totalSaleImport = chapters.reduce((sum, chapter) => sum + (chapter.totalSaleImport || 0), 0);

            // instance.totalSaleImport = await instance.calculateTotalSaleImport();
            instance.listOfChapters = chapters;
        }
        next();
    });

    // Calculate them costs
    Budget.afterRemote('find', async function (ctx, instances, next) {
        if (instances) {
            for (const instance of instances) {
                // instance.totalCostImport = await instance.calculateTotalCostImport();
                const chapters = await Budget.app.models.Chapter.find({
                    where: { budgetId: this.id }
                });
                instance.totalCostImport = chapters.reduce((sum, chapter) => sum + (chapter.totalCostImport || 0), 0);
                instance.totalSaleImport = chapters.reduce((sum, chapter) => sum + (chapter.totalSaleImport || 0), 0);

                // instance.totalSaleImport = await instance.calculateTotalSaleImport();
                instance.listOfChapters = chapters;
            }
        }
        next();
    });
};