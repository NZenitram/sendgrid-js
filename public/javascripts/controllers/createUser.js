var app = angular.module("sendgridWebhook", ["ngRoute"]);
app.config( ($routeProvider) => {
  $routeProvider
  .when("/createuser", {
    templateUrl: "createuser.html"
  })
})
