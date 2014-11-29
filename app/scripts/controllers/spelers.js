'use strict';

app.controller('SpelersCtrl', function ($scope, $location, Auth) {
	$scope.user = Auth.user;

});