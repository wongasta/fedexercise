app.controller('mainCtrl', ['$scope', '$rootScope', 'initFactory', '$location', function($scope, $rootScope, initFactory, $location){
    $rootScope.displayMode = 'gallery';
    if(!$rootScope.display){
        $rootScope.display = {
            "mode": 'compact',
            "farms": [],
            "sorting": 'title',
            "sortType": false
        };
    }

    if(!$rootScope.images){
        initFactory.init(function(data){
            if(data){
                $rootScope.images = data;
                $scope.farms = data.map(function(v){
                    return v.meta.farm;
                });
                $scope.display.farms = _.uniq(data.map(function(v){
                    return v.meta.farm;
                }));
                console.log(data);
            }
        });
    }else{
        $scope.farms = $rootScope.images.map(function(v){
            return v.meta.farm;
        });
        $scope.display.farms = _.uniq($rootScope.images.map(function(v){
            return v.meta.farm;
        }));
    }
    $scope.toggleFarm = function(farm){
        if(~$scope.display.farms.indexOf(farm)){
            $scope.display.farms = _.without($scope.display.farms, farm);
        }else{
            $scope.display.farms.push(farm);
        }
    };
}]);

app.filter('unique', function() {
    return function (arr) {
        return _.uniq(arr);
    };
});
