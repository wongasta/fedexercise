app.factory('initFactory', ['httpFactory', 'parseFactory', function(httpFactory, parseFactory) {

    var nodeEndpoint = 'api/getImg';

    return {
        "init": function(cb){
            httpFactory.get(nodeEndpoint, function(data){
                var photos = data.photos.photo;
                cb(parseFactory.parse(photos));
                return false;
            })
        }
    };
}]);
