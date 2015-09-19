angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // add data object
  $scope.data = {};
  // get links
  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(links){
      $scope.data.links = links;
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.getLinks();
});
