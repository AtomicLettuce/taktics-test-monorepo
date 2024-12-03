
import angular from 'angular';
import 'angular-cookies';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-simple-logger';
import 'angular-bootstrap-colorpicker';
import 'angular-bootstrap-colorpicker/css/colorpicker.css';
import 'angular-elastic';
import 'angular-strap';
import 'angular-local-storage';
import 'angular-translate';
import 'angular-translate-loader-url';
import 'angular-resource';
import './app/assets/js/common/services/lb-services';
import './app/assets/js/common/config/app.config';
import './app/assets/js/common/config/app.statics';
import directives from './app/assets/js/common/directives/app.directives';
import sessions from './app/assets/js/modules/sessions/app.sessions';
import MainController from './app/assets/js/common/controllers/main.controller';
import dashboard from './app/assets/js/modules/dashboard/app.dashboard';
import users from './app/assets/js/modules/users/app.users';


angular
  .module('app', [
    'ngCookies',
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'nemLogging',
    'monospaced.elastic',
    'mgcrea.ngStrap',
    'LocalStorageModule',
    'pascalprecht.translate',
    'ngResource',
    'lbServices',
    'colorpicker.module',
    'app.config',
    'app.statics',
    directives,
    sessions,
    dashboard,
    users,
  ])
  .controller('MainController', MainController);
