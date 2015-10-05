app.controller('imgCtrl', ['$scope', '$rootScope', '$location', '$routeParams', 'initFactory', function($scope, $rootScope, $location, $routeParams, initFactory){
    $rootScope.displayMode = 'img';
    var bindImg = function(){
        $scope.currentImg = $rootScope.images.filter(function(v) {
            return (v.meta.id===$routeParams.id);
        })[0];
        console.log($routeParams.id);
    };
    if(!$rootScope.images){
        initFactory.init(function(data) {
            if (data) {
                $rootScope.images = data;
                bindImg();
            }
        });
    }else{
        bindImg();
    }
}]);
