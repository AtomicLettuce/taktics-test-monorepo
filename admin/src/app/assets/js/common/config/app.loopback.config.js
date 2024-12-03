export default angular.module('app.loopback.config', []).config(LoopbackConfig);

function LoopbackConfig(LoopBackResourceProvider) {
  LoopBackResourceProvider.setUrlBase(process.env.API_URL);
}

LoopbackConfig.$inject = ['LoopBackResourceProvider'];
