module.exports = function (Budget) {

    Budget.observe('before delete', async function (ctx) {
        // Delete the budget's offspring
        if (ctx.where && ctx.where.id) {
            const budgetId = ctx.where.id;
            const chapters = await Budget.app.models.Chapter.find({ where: { budgetId: budgetId } });

            const chaptersIds = [];
            chapters.forEach(chapter => {
                chaptersIds.push(chapter.id);
            });

            if (chapters) {
                const a = await Budget.app.models.Batch.destroyAll({ chapterId: { inq: chaptersIds } });
            }

            await Budget.app.models.Chapter.destroyAll({ budgetId: budgetId });


            return;
        }
    });










    // Add a virtual property to include `totalCost` in API responses
    Budget.defineProperty('totalCostImport', { type: 'number', required: false });
    Budget.defineProperty('totalSaleImport', { type: 'number', required: false });
    Budget.defineProperty('listOfChapters', { type: 'array', required: false });
    // Calculate them costs
    Budget.afterRemote('findById', async function (ctx, instance, next) {
        if (instance) {
            // instance.totalCostImport = await instance.calculateTotalCostImport();
            const chapters = await Budget.app.models.Chapter.find({
                where: { budgetId: instance.id }//this.id }
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
                    where: { budgetId: instance.id }//this.id }
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