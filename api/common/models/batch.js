module.exports = function (Batch) {


    Batch.defineProperty('unitaryCostImport', { type: 'number', required: false });
    Batch.defineProperty('totalCostImport', { type: 'number', required: false });
    Batch.defineProperty('unitarySaleCost', { type: 'array', required: false });
    Batch.defineProperty('totalSaleImport', { type: 'array', required: false });


    Batch.prototype.calculateCosts = async function (instance) {
        const unitaryCostImport = instance.materialCostImport + instance.labourCostImport;
        const totalCostImport = unitaryCostImport * instance.ammount;
        const chapter = await Batch.app.models.Chapter.findById(instance.chapterId);
        const unitarySaleCost = instance.materialCostImport * chapter.materialSaleCoefficient + instance.labourCostImport * chapter.labourSaleCoefficient;
        const totalSaleImport = unitarySaleCost * instance.ammount;

        instance.unitaryCostImport = unitaryCostImport;
        instance.totalCostImport = totalCostImport;
        instance.unitarySaleCost = unitarySaleCost;
        instance.totalSaleImport = totalSaleImport;
    };



    Batch.afterRemote('findById', async function (ctx, instance, next) {
        if (instance) {
            await instance.calculateCosts();
        }
        next();
    });

    Batch.afterRemote('find', async function(ctx, instances, next) {
        if (instances) {
          for (const instance of instances) {
            await instance.calculateCosts();
          }
        }
        next();
      });



};