'use strict';

app.controller( 'PostsCtrl', function($scope, Post) {
  // post object consists of url and title
  $scope.posts = Post.all;
  $scope.post = { url : 'http://', title : '' };

  $scope.submitPost = function() {
    Post.create( $scope.post ).then( function() {
      $scope.post = { url : 'http://', title : '' };
    });
    $scope.post = { url : 'http://', title : '' };
  };

  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };

});
