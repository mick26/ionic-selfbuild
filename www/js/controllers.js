
/**
 * Module - for Controllers
 */
angular.module('selfbuildApp.controllers', [])


/**
 * Controller
 */
.controller('AppCtrl', function($scope) {
})


/**
 * Controller - buildStages is a service 
 */
.controller('BuildTasksCtrl', function($scope, buildStages) {
  //Get the full list of buildtasks
  $scope.buildtasks = buildStages.all();

})


/**
 * Controller
 */
.controller('BuildTaskCtrl', function($scope, $stateParams, buildStages) {
 
  //console.log("$stateParams= "+JSON.stringify($stateParams)); //TEST
  //console.log("$stateParams.playlistId= "+$stateParams.playlistId); //TEST

  //The name of the image file 
  $scope.image = $stateParams.buildtaskId +".png";

  //Get build stage information using the factory service methods
  $scope.stageTitle = buildStages.getStageTitle($stateParams.buildtaskId);
  $scope.description = buildStages.getStageDescription($stateParams.buildtaskId);
});
