angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    // 7:30 in video
    Links.addLink($scope.link)
        .then(function(data){
          //solution wants to redirect back to the root
          $location.path('/');
          console.log(data);
    })
  };
});
