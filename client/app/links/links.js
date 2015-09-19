angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // add data object
  $scope.data = {};
  // get links
  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(links){
      // links is an array of objects which are links --> [{base url: 127.0..., code: 32ig, title: google, url:www.google}]
      $scope.data.links = links;
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  $scope.getLinks();
});
