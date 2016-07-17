/**
 * Created by patri on 7/16/2016.
 */
angular.module('apartmentTracker', ['ionic', 'apartmentTracker.controllers', 'apartmentTracker.services', 'apartmentTracker.filters'])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/side_menu.html',
        controller : 'menuController'
      })
      .state('app.addPlace', {
        url: '/addPlace',
        views: {
          'menuContent' : {
            templateUrl: 'templates/AddPlaceToLive.html',
            controller: 'apartmentController'
          }
        }
      })
      .state('app.viewPlace', {
        url: '/viewPlace/:placeId',
        views: {
          'menuContent' : {
            templateUrl: 'templates/viewPlaceToLive.html',
            controller: 'apartmentDetailController'
          }
        }
      })
      .state('app.landingPage', {
        url: '/landingPage',
        views: {
          'menuContent' : {
            templateUrl: 'templates/landingPage.html'
          }
        }
      });

      $urlRouterProvider.otherwise('/app/landingPage');
  });
