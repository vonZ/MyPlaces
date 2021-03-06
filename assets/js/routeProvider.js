//Route provider
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: '/home.html',
		controller: 'postCtrl',
		resolve: {
			postPromise: ['posts', function(posts){
				return posts.getAll(); 
			}]
		}
	})
	.state('posts', {
		url: '/posts/{id}',
		templateUrl: '/posts.html',
		controller: 'PostsCtrl',
		resolve: {
			post: ['$stateParams', 'posts', function($stateParams, posts) {
				return posts.get($stateParams.id); 
			}]
		}
	})
	$urlRouterProvider.otherwise('home');
}]);