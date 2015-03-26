/**
 * Created by gongbin on 15/3/23.
 */
var app = angular.module('myApp.controllers');

/**
 * Render Job Watch controller
 */
app.controller('JobWatchCtrl', function ($scope, $http) {
  console.log("JobWatch");

});

/**
 * Render Job Submit controller
 */
app.controller('JobSubmitCtrl', function ($scope, $routeParams, $http) {
  console.log("JobSubmit");

  $scope.SetEngineName = function (engineName) {
    $scope.engineName = engineName;
  };

});

/**
 * File Upload controller
 */
app.controller('FileUploadCtrl', function ($scope, $http) {
  console.log("fileupload");
});


