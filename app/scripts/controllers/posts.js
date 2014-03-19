'use strict';

app.controller( 'PostsCtrl', function($scope, $location, Post) {
  // post object consists of url and title
  $scope.posts = Post.all;
  $scope.post = { url : 'http://', title : '' };

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };

});
