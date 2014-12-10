'use strict';

app.controller('ProfileCtrl', function ($scope, $location, Profile, Auth) {
  $scope.user = Auth.user;
  $scope.profile = $scope.user.profile;
});