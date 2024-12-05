module.exports = function (Chapter) {

    // Add a virtual property to include `totalCost` in API responses
    Chapter.defineProperty('totalCostImport', { type: 'number', required: false });
    Chapter.defineProperty('totalSaleImport', { type: 'number', required: false });
    Chapter.defineProperty('listOfBatches', { type: 'array', required: false });
    // Calculate them costs
    Chapter.afterRemote('findById', async function (ctx, instance, next) {
        if (instance) {
            const batches = await Chapter.app.models.Batch.find({
                where: { chapterId: instance.id },
            });
            const totalCostImport = batches.reduce((sum, batch) => sum + (batch.totalCostImport || 0), 0);
            const totalSaleImport = batches.reduce((sum, batch) => sum + (batch.totalSaleImport || 0), 0);
            const listOfBatches = batches;

            await instance.updateAttributes({ totalCostImport: totalCostImport, totalSaleImport: totalSaleImport, listOfBatches: listOfBatches });
        }
        next();
    });

    // Calculate them costs
    Chapter.afterRemote('find', async function (ctx, instances, next) {
        if (instances) {
            for (const instance of instances) {
                const batches = await Chapter.app.models.Batch.find({
                    where: { chapterId: instance.id },
                });
                const totalCostImport = batches.reduce((sum, batch) => sum + (batch.totalCostImport || 0), 0);
                const totalSaleImport = batches.reduce((sum, batch) => sum + (batch.totalSaleImport || 0), 0);
                const listOfBatches = batches;
    
                await instance.updateAttributes({ totalCostImport: totalCostImport, totalSaleImport: totalSaleImport, listOfBatches: listOfBatches });
            }
        }
        next();
    });
};