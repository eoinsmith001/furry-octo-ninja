'use strict';

app.controller( 'PostsCtrl', function($scope) {
  // post object consists of url and title
  $scope.post = { url : "http://", title : '' };
  $scope.posts = [];

  $scope.submitPost = function() {
    $scope.posts.push( $scope.post );
    $scope.post = { url : "http://", title : '' };
  };

  $scope.deletePost = function(index) {
    console.log("delete from index " + index );
    $scope.posts.splice( index, 1 );
  };
});
