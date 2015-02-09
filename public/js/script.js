(function(angular) {

angular.module('guidebook', [])
  .controller('SearchController', ['$scope', '$http',
    function($scope, $http) {
      $scope.results = [];
      $scope.term = '';

      $scope.performSearch = function() {
        var config = {
          responseType: 'json'
        };

        $http.get('/search?term=' + $scope.term, config).then(function (results){
            $scope.resultsTotal = results.data.total;
            $scope.results = results.data.data;
          });
      };
    }]);
})(window.angular);