angular.module('nodeUsers', [])
.controller('mainController', ($scope, $http) => {
  $scope.formData = {};
  $scope.userData = {};
  // Get all users
  $http.get('api/v1/users')
  .success((data) => {
    $scope.todoData = data;
    console.log(data);
  })
  .error((error) => {
    console.log('Error: ' + error);
  });
});
