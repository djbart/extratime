'use strict';

app.controller('SpelersCtrl', function ($scope, $location, Auth, Players) {
  $scope.players = Players.all;
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;

  $scope.user = Auth.user;

  $scope.submitPlayer = function () {
  $scope.player.creator = $scope.user.profile.username;
  $scope.player.creatorUID = $scope.user.uid;
  Players.create($scope.player);
  };

  $scope.deletePlayer = function (player) {
    Players.delete(player);
  };
});