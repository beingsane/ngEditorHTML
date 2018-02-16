; (function () {
    'use strict';

    /**
   * @module application.ngEditorHTML
   */
    angular
        .module('application.ngEditorHTML.controller')
        .controller('ngcEditorHtmlController', ngcEditorHtmlController);

    /* @ngInject */
    function ngcEditorHtmlController($scope, $compile, $sce) {
        var vm = this;
        vm.textoSemHtml;
        vm.textCounter = 0;
        vm.isInvalidCounter=false;
        vm.$onInit = function () {  
        };
        vm.icons = [
            {type:'icon' ,data:'undo', icon:'undo',title: "Desfazer"},
            {type:'icon' ,data:'redo', icon:'redo',title: "Refazer"},
            {type:'icon' ,data:'bold', icon:'format_bold',title: "Negrito"},
            {type:'icon' ,data:'italic', icon:'format_italic',title: "Itálico"},
            {type:'icon' ,data:'underline', icon:'format_underlined',title: "Sublinhado"},
            {type:'icon' ,data:'justifyLeft', icon:'format_align_left',title: "Justificado a esquerda"},
            {type:'icon' ,data:'justifyCenter', icon:'format_align_center',title: "Justificado a direita"},
            {type:'icon' ,data:'justifyRight', icon:' format_align_right',title: "Centralizado"},
            {type:'icon' ,data:'justifyFull', icon:'format_align_justify',title: "Justificado"},
            {type:'icon' ,data:'indent', icon:'format_indent_increase',title: "Indentar a direita"},
            {type:'icon' ,data:'outdent', icon:'format_indent_decrease',title: "Indentar a esquerda"},
            {type:'icon' ,data:'insertUnorderedList', icon:'format_list_bulleted',title: "Lista não ordenada"},
            {type:'icon' ,data:'insertOrderedList', icon:'format_list_numbered',title: "Lista Ordenada"},
            //{data:'clickItem("h1")', icon:'h<sup>1</sup>'},
            {type:'text' ,data:'h2', icon:$sce.trustAsHtml('h<sup>2</sup>'), title: "Titulo 2"},
            {type:'text' ,data:'h3', icon:$sce.trustAsHtml('h<sup>3</sup>'),title: "Titulo 3"},
            {type:'text' ,data:'h4', icon:$sce.trustAsHtml('h<sup>4</sup>'),title: "Titulo 4"},
            {type:'text' ,data:'h5', icon:$sce.trustAsHtml('h<sup>5</sup>'),title: "Titulo 5"},
            //{data:'clickItem("h6")', icon:'h<sup>6</sup>'},
            {type:'text' ,data:'p', icon:'P',title: "Paragrafo"},
            {type:'text' ,data:'subscript', icon:'X<sub>2</sub>', title: "Subtitulo Inferior"},
            {type:'text' ,data:'superscript', icon:'X<sup>2</sup>', title: "Subtitulo Superior"},
        ];
        vm.clickItem = function(n){
            n = n.currentTarget;
            n = n.dataset.id;
            switch(n) {
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6':
                case 'p':
                    document.execCommand('formatBlock', false, n);
                    break;
                default:
                    document.execCommand(n, false, null);

                    break;
            }
        };
        $scope.$watch("vm.ngModel",function(e){
            vm.textoSemHtml = e.replace(/<[^>]+>/gm, '').replace(/\s|&nbsp;/g, ' ');
            vm.textCounter = (vm.textoSemHtml!=' ')? vm.textoSemHtml.length:0;
            vm.isInvalidCounter = (vm.textoSemHtml.length >  vm.tamanho)?true:false;
                    
        })

    }
}());
