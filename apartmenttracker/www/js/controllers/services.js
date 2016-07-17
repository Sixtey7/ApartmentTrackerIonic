/**
 * Created by patri on 7/16/2016.
 */
angular.module('apartmentTracker.services', [])

  .factory('PlaceToLive', function() {

    //Some fake testing data
    var placesToLive = [{
      id : 0,
      name : 'testOne',
      state : 'Researching'
    }, {
      id : 1,
      name: 'testTwo',
      state: 'Researching'
    }];

    return {
      all : function() {
        console.log('All is running!');
        return placesToLive;
      },
      remove : function(placeToLive) {
        placesToLive.splice(placesToLive.indexOf(placeToLive), 1);
      },
      get : function(placeToLiveId) {
        var idToFind = parseInt(placeToLiveId);
        for (var i = 0; i < placesToLive.length; i++) {
          if (placesToLive[i].id === idToFind) {
            return placesToLive[i];
          }
        }
        return null;
      },
      put : function(placeToLive) {
        console.log('Putting: ' + JSON.stringify(placeToLive));
        //assign an Id
        //making the assumption that the list is ordered
        var maxId = placesToLive[placesToLive.length - 1].id;
        console.log('Determined the max id to be: ' + maxId);
        placeToLive.id = maxId + 1;
        placesToLive.push(placeToLive);
      }
    };
  });
