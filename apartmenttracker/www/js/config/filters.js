/**
 * Created by patri on 7/17/2016.
 */
angular.module('apartmentTracker.filters', ['ionic'])

  .filter('helloWorld', function() {
    return function(value) {
      if (value) {
        return 'Yes';
      }
      else {
        return 'No';
      }
    }
  });
