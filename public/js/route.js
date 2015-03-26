
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.controllers',
  'myApp.services'
]).

config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/index.html'
    }).
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    }).
    when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
    }).
    when('/forgot-password', {
      templateUrl: 'views/forgotpassword.html',
      controller: 'ForgotPasswordCtrl'
    }).
    when('/forgot-password/:token', {
      templateUrl: 'views/ReInputforgotpassword.html',
      controller: 'ForgotPasswordTokenCtrl'
    }).
    when('/signup/:token', {
      templateUrl: 'views/signupToken.html',
      controller: 'SignupTokenCtrl'
    }).

    when('/jobWatch', {
      templateUrl: 'views/jobWatch.html',
      controller: 'JobWatchCtrl'
    }).
    when('/fileUpload', {
      templateUrl: 'views/fileUpload.html',
      controller: 'FileUploadCtrl'
    }).
    when('/jobSubmit', {
      templateUrl: 'views/jobSubmit.html',
      controller: 'JobSubmitCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
