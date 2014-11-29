'use strict';

app.controller('ClubCtrl', function ($scope, $location, Auth) {
	$scope.user = Auth.user;

});