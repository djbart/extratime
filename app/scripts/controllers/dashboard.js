'use strict';

app.controller('DashboardCtrl', function ($scope, $location, Auth) {
	$scope.user = Auth.user;

});