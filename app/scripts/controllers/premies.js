'use strict';

app.controller('PremiesCtrl', function ($scope, $location, Auth) {
	$scope.user = Auth.user;

});