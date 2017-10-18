(function (){
  'use strict';

  const chapterPageComponent = {
    templateUrl: '/components/chapter-page/chapter-page-template.html',
    transclude: true
  };

  angular.module('app').component('chapterPage', chapterPageComponent);

}());
