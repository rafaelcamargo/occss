(function (){
  'use strict';

  const coverPageComponent = {
    templateUrl: '/components/cover-page/cover-page-template.html',
    transclude: true
  };

  angular.module('app').component('coverPage', coverPageComponent);

}());
