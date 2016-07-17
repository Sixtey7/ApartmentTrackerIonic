/**
 * Created by minty on 7/8/16.
 */
angular.module('apartmentTracker.controllers', [])

  .controller('apartmentController', function($scope, PlaceToLive) {

    $scope.item = {};

    $scope.createItem = function(itemToSave) {
      PlaceToLive.put(itemToSave);
      var frm = document.getElementById('placeToLiveForm');
      frm.reset();

      $scope.item = {};
    }
  })

  .controller('menuController', function($scope, PlaceToLive) {
    $scope.placesToLive = PlaceToLive.all();
  })

  .controller('apartmentDetailController', function($scope, $stateParams, PlaceToLive) {
    $scope.placeToLive = PlaceToLive.get($stateParams.placeId);
    console.log('set the place to live: ' + JSON.stringify($scope.placeToLive));
  });
