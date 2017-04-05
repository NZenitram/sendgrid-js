var app = angular.module('sendgrid-webhook', [])
app.controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.userData = {};
  // Get all users
  $http.get('api/v1/users')
  .success((data) => {
    $scope.userData = data;
    console.log(data);
  })
  .error((error) => {
    console.log('Error: ' + error);
  });
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
    $http.delete('/api/v1/users/' + todoID)
    .success((data) => {
      $scope.userData = data;
      console.log(data);
    })
    .error((data) => {
      console.log('Error: ' + data);
    });
  };
});
