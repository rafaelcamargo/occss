(function (){
  'use strict';

  const deskComponent = {
    templateUrl: '/components/desk/desk-template.html',
    transclude: true
  };

  angular.module('app').component('desk', deskComponent);

}());
