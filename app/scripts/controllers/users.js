'use strict';

app.controller('UsersCtrl', function ($scope, $location, Profile, Auth) {
  $scope.user = Auth.user;
  $scope.profile = $scope.user.profile;
});