/**
 * Module - main App module
 */
angular.module('selfbuildApp', ['ionic', 'ngSanitize', 
  'selfbuildApp.controllers', 'selfbuildApp.services'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('app.buildtasks', {
      url: "/buildtasks",
      views: {
        'menuContent' :{
          templateUrl: "templates/buildtasks.html",
          controller: 'BuildTasksCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/buildtasks/:buildtaskId",
      views: {
        'menuContent' :{
          templateUrl: "templates/buildtask.html",
          controller: 'BuildTaskCtrl'
        }
      }
    });

  //if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/about');
});

