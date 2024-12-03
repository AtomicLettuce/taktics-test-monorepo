import * as app from '../../../languages/es-language.json';

export default angular
  .module('app.translations', [])
  .config(TranslationsConfig);

function TranslationsConfig($translateProvider) {
  var defaultLanguage = 'es';


  $translateProvider.translations(defaultLanguage, app);
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.preferredLanguage(defaultLanguage);
}

TranslationsConfig.$inject = ['$translateProvider'];
