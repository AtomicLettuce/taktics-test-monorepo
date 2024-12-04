module.exports = function (Chapter) {

    Chapter.prototype.calculateTotalCostImport = async function () {
        // Get all chapters
        const batches = await Chapter.app.models.Batch.find({
            where: { ChapterId: this.id }
        });
        // Sum all costs
        return batches.reduce((sum, batch) => sum + (batch.totalCostImport || 0), 0);
    };

    Chapter.prototype.calculateTotalSaleImport = async function () {
        // Get all batches
        const batches = await Chapter.app.models.Batch.find({
            where: { ChapterId: this.id }
        });
        // Sum all costs
        return batches.reduce((sum, batch) => sum + (batch.totalSaleImport || 0), 0);
    };



    // Add a virtual property to include `totalCost` in API responses
    Chapter.defineProperty('totalCostImport', { type: 'number', required: false });
    Chapter.defineProperty('totalSaleImport', { type: 'number', required: false });
    Chapter.defineProperty('listOfBatches', { type: 'array', required: false });
    // Calculate them costs
    Chapter.afterRemote('findById', async function (ctx, instance, next) {
        if (instance) {
            instance.totalCostImport = await instance.calculateTotalCostImport();
            instance.totalSaleImport = await instance.calculateTotalSaleImport();
            const batches = await Chapter.app.models.Batch.find({
                where: { ChapterId: instance.id },
            });
            instance.listOfBatches = batches;
        }
        next();
    });

    // Calculate them costs
    Chapter.afterRemote('find', async function(ctx, instances, next) {
        if (instances) {
          for (const instance of instances) {
            instance.totalCostImport = await instance.calculateTotalCostImport();
            instance.totalSaleImport = await instance.calculateTotalSaleImport();
            const batches = await Chapter.app.models.Batch.find({
                where: { ChapterId: instance.id },
            });
            instance.listOfBatches = batches;
          }
        }
        next();
      });
};