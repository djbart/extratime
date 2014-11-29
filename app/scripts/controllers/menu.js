'use strict';

app.controller('MenuCtrl', function ($scope, $location, Auth) {
	$scope.user = Auth.user;
	$scope.signedIn = Auth.signedIn;

    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
});