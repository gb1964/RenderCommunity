
var app = angular.module('myApp.controllers',[]);

/**
 * Main / Root controller
 */
app.controller('MainCtrl', function ($scope, user) {

  $scope.user = user.get();

  $scope.logout = function() {
    user.logout().then(function() {
      $scope.user = null;
    }, function(error) {
      console.log(error);
    });
  };

});


/**
 * Login controller
 */
app.controller('LoginCtrl', function ($scope, $window, user) {

  // submit form
  $scope.submit = function() {
    if ($scope.login && $scope.password) {
      user.login($scope.login, $scope.password)
        .then(function() {
          $window.location = '/';
        }, function(error) {
          $scope.error = error;
        });
    }
    else {
      $scope.error = "用户名或密码不能为空";
    }
  };

});

/**
 * Signup controller
 */
app.controller('SignupCtrl', function ($scope, user) {

  // submit form
  $scope.submit = function() {
    if ($scope.name && $scope.email && $scope.password) {
      user.signup($scope.name, $scope.email, $scope.password)
        .success(function(data, status) {
          $scope.error = false;
          $scope.success = '太好了，请查收邮箱.';
        }).error(function(data, status) {
          $scope.success = false;
          $scope.error = data.error;
        });
    }
    else {
      $scope.error = "用户名、邮箱或密码不能为空";
    }
  };

});

/**
 * ForgotPassword controller
 */

app.controller('ForgotPasswordCtrl', function ($scope, $routeParams, $http) {
  // submit form
  $scope.submit = function() {
    $http.post('/rest/forgot-password', {
      email: $scope.email
    }).success(function (data, status) {
      console.log("success");
      $scope.error = false;
      $scope.success = '太好了，请查收邮箱.';
    }).error(function (data, status) {

    });
  };
});

/**
 * ForgotPasswordToken controller
 */

app.controller('ForgotPasswordTokenCtrl', function ($scope, $routeParams, $http) {

  var token = $routeParams.token;

  $scope.success = false;
  $scope.error = false;

  $scope.submit = function() {
    if ($scope.password == $scope.repassword) {
      $http.post('/rest/forgot-password/' + token, {
        password: $scope.password
      }).success(function (data, status) {
        $scope.error = false;
        $scope.success = '密码设置成功';
      })
        .error(function (data, status) {
          $scope.error = '错误'
        });
    }
    else {
      $scope.error = '密码不同！！！';
      $scope.success = false;
    }
  };
});

/**
 * SignupToken controller
 */
app.controller('SignupTokenCtrl', function ($scope, $routeParams, $http) {

  var token = $routeParams.token;

  $http.get('/rest/signup/' + token)
    .success(function(data, status) {
      $scope.success = true;
    })
    .error(function(data, status) {
      $scope.error = true;
    });
});
