app.factory('httpFactory', ['$http', function($http){
    return {
        "get": function(endpoint, cb){
            $http.get(endpoint).then(function (response) {
                cb(response.data);
                return false;
            }, function (err) {
                console.log(err);
            });
        }
    };
}]);
