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

            // Angular filter on ng-repeat / sort proto doesn't account for uppercase characters.
            $scope.results = results.data.data.sort(function (a, b){
              var nameA = a.name.toLowerCase();
              var nameB = b.name.toLowerCase();

              return nameA.localeCompare(nameB);
            });
          });
      };
    }]);
})(window.angular);