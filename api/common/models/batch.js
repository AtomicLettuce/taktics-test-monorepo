module.exports = function (Batch) {


  Batch.defineProperty('unitaryCostImport', { type: 'number', required: false });
  Batch.defineProperty('totalCostImport', { type: 'number', required: false });
  Batch.defineProperty('unitarySaleCost', { type: 'number', required: false });
  Batch.defineProperty('totalSaleImport', { type: 'number', required: false });


  Batch.afterRemote('findById', async function (ctx, instance, next) {
    if (instance) {

      const unitaryCostImport = instance.materialCostImport + instance.labourCostImport;
      const totalCostImport = unitaryCostImport * instance.ammount;
      const chapter = await Batch.app.models.Chapter.findById(instance.chapterId);
      const unitarySaleCost = instance.materialCostImport * chapter.materialSaleCoefficient + instance.labourCostImport * chapter.labourSaleCoefficient;
      const totalSaleImport = unitarySaleCost * instance.ammount;
      await instance.updateAttributes({ unitaryCostImport: unitaryCostImport, totalCostImport: totalCostImport, unitarySaleCost: unitarySaleCost, totalSaleImport: totalSaleImport });
    }
    next();
  });

  Batch.afterRemote('find', async function (ctx, instances, next) {
    if (instances) {
      for (const instance of instances) {
        const unitaryCostImport = instance.materialCostImport + instance.labourCostImport;
        const totalCostImport = unitaryCostImport * instance.ammount;
        const chapter = await Batch.app.models.Chapter.findById(instance.chapterId);
        const unitarySaleCost = instance.materialCostImport * chapter.materialSaleCoefficient + instance.labourCostImport * chapter.labourSaleCoefficient;
        const totalSaleImport = unitarySaleCost * instance.ammount;
        await instance.updateAttributes({ unitaryCostImport: unitaryCostImport, totalCostImport: totalCostImport, unitarySaleCost: unitarySaleCost, totalSaleImport: totalSaleImport });
      }
    }
    next();
  });



};