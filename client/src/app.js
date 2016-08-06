'use strict';

var app = angular.module('solarSales', [])
  .controller('salesController', function($scope, salesFactory) {
  $scope.addProspect = function(prospect) {
    salesFactory.addNewProspect(prospect);
    // reset form
    $scope.prospect = {};
    $scope.salesForm.$setPristine();
  };
}).factory('salesFactory', function($http) {
  var tools = { data: [] };

  tools.addNewProspect = function(prospect) {
    $http.post('/api/prospects', prospect)
      .success(function(data) {
        tools.data = data;
      })
      .error(function(data) {
        console.log('Error: ', data);
      });
    return tools.data;
  };

  return tools;
});
