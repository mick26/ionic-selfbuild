
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
.controller('BuildTasksCtrl', function($scope, $sce, buildStages) {
  //Get the full list of buildtasks
  $scope.buildtasks = buildStages.all();

})


/**
 * Controller
 */
.controller('BuildTaskCtrl', function($scope, $stateParams, $sce, buildStages) {
 
  //console.log("$stateParams= "+JSON.stringify($stateParams)); //TEST
  //console.log("$stateParams.playlistId= "+$stateParams.playlistId); //TEST

  //The name of the image file 
  $scope.image = $stateParams.buildtaskId +".png";
  console.log("image = "+$scope.image); //TEST

  //Get build stage information using the factory service methods
  $scope.stageTitle = buildStages.getStageTitle($stateParams.buildtaskId);
  $scope.description = buildStages.getStageDescription($stateParams.buildtaskId);
  $scope.description = $scope.description.replace(/(?:\r\n|\r|\n)/g, '<br />');
});
