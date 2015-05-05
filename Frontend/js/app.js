angular.module('whatIfCSH', [])
  .controller('WhatIfController', function($scope, $http) {
    var base = 'http://church.csh.rit.edu:5777';
    $scope.suggestions = [];
    $scope.description = "";
    $scope.error = null;

    var errorCallback = function(_, _, _, _) {
        $scope.error = "Something went wrong.";
    }

    $http.get(base + '/suggestions')
         .success(function(data, status, headers, config) {
             $scope.suggestions = $scope.suggestions.concat(data);
         })
         .error(errorCallback);
    $scope.submit = function() {
        var trimmed = $scope.description.trim();
        if (!trimmed) {
            return;
        }
        $http.post(base + '/suggestions', {description: trimmed})
             .success(function(data, status, headers, config) {
               $scope.description = "";
               $scope.suggestions.push(data);
             })
             .error(errorCallback);
    };
});
