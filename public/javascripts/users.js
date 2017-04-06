angular.module('sendgrid-webhook', [])
.controller('mainController', ($http, $scope) => {
  $scope.formData = {};
  // Get all users
  $http.get('api/v1/users')
    .then(function(response) {
      $scope.userData = response.data;
      console.log($scope.userData);
    });
    // Create a new todo
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
  // Delete a todo
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
