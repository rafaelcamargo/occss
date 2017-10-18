(function (){
  'use strict';

  const bookComponent = {
    templateUrl: '/components/book/book-template.html',
    transclude: true
  };

  angular.module('app').component('book', bookComponent);

}());
