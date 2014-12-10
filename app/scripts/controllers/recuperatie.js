'use strict';

app.controller('RecuperatieCtrl', function ($scope, $location, Auth) {
	$scope.user = Auth.user;

});