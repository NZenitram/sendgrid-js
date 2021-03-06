var app = angular.module('sendgridWebhook', ["ngRoute"])

app.config( ($routeProvider) => {
  $routeProvider
  .when("/createuser", {
    templateUrl: "createuser.html",
    controller: "userController"
  })
})

app.controller('userController', function($http, $scope) {
  $scope.formData = {};
  // Get all users
  $http.get('api/v1/users')
    .then(function(response) {
      $scope.userData = response.data;
      console.log($scope.userData);
    })
    // Create a new user
  $scope.createUser = () => {
    $http.post('/api/v1/users', $scope.formData)
    .success((data) => {
      $scope.formData = {};
      $scope.userData = data;
      console.log(data);
    })
    .error((error) => {
      console.log('Error: ' + error);
    });
  };
  // Delete a user
  $scope.deleteUser = (userID) => {
    $http.delete('/api/v1/users/' + userID)
    .success((data) => {
      $scope.userData = data;
      console.log(data);
    })
    .error((data) => {
      console.log('Error: ' + data);
    });
  };
});
