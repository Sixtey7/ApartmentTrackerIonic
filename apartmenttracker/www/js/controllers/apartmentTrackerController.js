/**
 * Created by minty on 7/8/16.
 */
angular.module('apartmentTracker', [])

  .controller('apartmentController', function($scope) {

    $scope.createItem = function(itemToSave) {
      console.log("----------Create Item Called----------")
      console.log(JSON.stringify(itemToSave));
    }
  });
