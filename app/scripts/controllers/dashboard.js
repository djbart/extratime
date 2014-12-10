'use strict';

app.controller('DashboardCtrl', function ($scope, $location, Post, Auth) {
	$scope.user = Auth.user;
    $scope.post = Post.get('-Jbvlbyy8sXatBFxkepS');
	  $scope.comments = Post.comments('-Jbvlbyy8sXatBFxkepS');

	  $scope.user = Auth.user;
	  $scope.signedIn = Auth.signedIn;

	  $scope.addComment = function () {
	    if(!$scope.commentText || $scope.commentText === '') {
	      return;
	    }

	    var comment = {
	      text: $scope.commentText,
	      creator: $scope.user.profile.username,
	      creatorUID: $scope.user.uid
	    };
	    $scope.comments.$add(comment);

	    $scope.commentText = '';
	  };
	
	  $scope.deleteComment = function (comment) {
	  $scope.comments.$remove(comment);};
});