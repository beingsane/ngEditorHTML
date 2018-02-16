;(function () {
    'use strict';
  
    /**
     * @module application.ngEditorHTML
     */
    angular
      .module('application.ngEditorHTML.component')
      .component('ngcEditorHtml', {
        controller: 'ngcEditorHtmlController',
        controllerAs: 'vm',
        templateUrl: 'ngEditorHTML/view/ngc-editor-html-view.html',
        require: {
        },
        bindings: {
          label: '@',
          modelo: '@',
          tamanho: '<',
          descricao: '@',
          editavel: '<',
          ngModel: '=',
        }
      });
}());
