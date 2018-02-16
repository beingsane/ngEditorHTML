(function(){
  angular.module('application.ngEditoHTML.configuration', []);
  angular.module('application.ngEditoHTML.controller', []);
  angular.module('application.ngEditoHTML.component', []);
  angular.module('application.ngEditoHTML.application', []);
  angular.module('application.ngEditoHTML.directive', []);
  angular.module('application.ngEditoHTML.filter', []);
  angular.module('application.ngEditoHTML.view', []);
  angular.module('application.ngEditoHTML.providers', []);
  angular.module('application.ngEditoHTML.providers.constant', []);
  angular.module('application.ngEditoHTML.providers.decorator', []);
  angular.module('application.ngEditoHTML.providers.factory', []);
  angular.module('application.ngEditoHTML.providers.provider', []);
  angular.module('application.ngEditoHTML.providers.service', []);
  angular.module('application.ngEditoHTML.providers.value', []);
  angular.module('application.ngEditoHTML.route', []);

  /**
   * @module application.ngEditoHTML
   */
  angular
    .module('application.componentes-setec', [
      'application.ngEditoHTML.configuration',
      'application.ngEditoHTML.controller',
      'application.ngEditoHTML.component',
      'application.ngEditoHTML.application',
      'application.ngEditoHTML.directive',
      'application.ngEditoHTML.filter',
      'application.ngEditoHTML.providers',
      'application.ngEditoHTML.view',
      'application.ngEditoHTML.providers.constant',
      'application.ngEditoHTML.providers.decorator',
      'application.ngEditoHTML.providers.factory',
      'application.ngEditoHTML.providers.provider',
      'application.ngEditoHTML.providers.service',
      'application.ngEditoHTML.providers.value',
      'application.ngEditoHTML.route',
      'pascalprecht.translate',
      'ngMaterial'
    ]);
})();
