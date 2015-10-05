app.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log('Current route name: ' + $location.path());
        console.log($routeParams);
    });
}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'mainCtrl'
        }).
        when('/img/:id', {
            templateUrl: 'partials/img.html',
            controller: 'imgCtrl'
        }).
        otherwise({
            redirectTo: '/gallery'
        })
}]);
