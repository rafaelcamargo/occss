(function (){
  'use strict';

  const pageComponent = {
    templateUrl: '/components/page/page-template.html',
    transclude: true
  };

  angular.module('app').component('page', pageComponent);

}());
