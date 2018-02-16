(function () {
    'use strict';
  
    /**
     * @module application.ngEditorHTML
     */
    angular
      .module('application.ngEditorHTML.directive')
      .directive('contenteditable', ['$sce', contentEditableDirective]);
  
    /* @ngInject */
    function contentEditableDirective($sce){
        return {
            restrict: 'A',
            require: '?ngModel',
            scope:{
                tamanhoMaximo: '<',
            },
            link: function(scope, element, attrs, ngModel) {
                    if (!ngModel) return; 
                    ngModel.$render = function() {
                        element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
                    };
              
                    element.on('blur keyup change', function() {
                        scope.$apply(read);
                    });

                    if(scope.tamanhoMaximo){
                        element.on("keydown", function (event) {
                            scope.$apply(function(){
            
                                if(event.repeat===true)
                                {
                                    switch(event.keyCode) {
                                        case 37:break;
                                        case 38:break;
                                        case 39:break;
                                        case 40:break;
                                        case 46:break;
                                        case 8:break;
                                        case 47:break;
                                        default:
                                            event.preventDefault();
                                    }
                                }
                                
                                if(ngModel.$modelValue && replaceText(ngModel.$modelValue) >= scope.tamanhoMaximo){ // scope.tamanhoMaximo
                                    switch(event.keyCode) {
                                        case 37:break;
                                        case 38:break;
                                        case 39:break;
                                        case 40:break;
                                        case 46:break;
                                        case 8:break;
                                        case 47:break;
                                        case 65:
                                            if(event.ctrlKey === false)
                                                event.preventDefault();
                                            break;  
                                        case 86:
                                            if(event.ctrlKey === true)
                                                event.preventDefault();
                                            break;
                                        default:
                                            event.preventDefault();
                                    }
                                }
                                
                            });
                        });

                        element.on("paste", function (event) {
                            scope.$apply(function(){
                                var clipboarddata =  window.event.clipboardData.getData('text');
                                if((ngModel.$modelValue && replaceText(ngModel.$modelValue) + replaceText(clipboarddata))  >= scope.tamanhoMaximo) {// vm.tamanhoMaximo
                                    event.preventDefault();
                                } 
                            })
                        });

                        element.on("drop", function (event) {
                            scope.$apply(function(){

                                var clipboarddropdata =  window.event.dataTransfer.getData('text');
                                if((ngModel.$modelValue && replaceText(ngModel.$modelValue) + replaceText(clipboarddropdata))  >= scope.tamanhoMaximo) { // vm.tamanhoMaximo
                                    event.preventDefault();
                                } 
                            })
                        });
                    }

                    read(); 
                
                    function read() {
                        var html = element.html();
                        if ( attrs.stripBr && html == '<br>' ) {
                            html = '';
                        }
                        ngModel.$setViewValue(html);
                    }

                    function replaceText(text){
                        var texto = text.replace(/<[^>]+>/gm, '').replace(/\s|&nbsp;/g, ' ').length
                        return texto
                    }

                }
        };
    }
}());
