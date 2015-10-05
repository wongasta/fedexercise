app.factory('parseFactory', ['$rootScope', function($rootScope) {

    var farmidReg = new RegExp('{{farm-id}}', 'g');
    var serverReg = new RegExp('{{server-id}}', 'g');
    var idReg = new RegExp('{{id}}', 'g');
    var secretReg = new RegExp('{{secret}}', 'g');

    var parseUrl = function(farmid, server, id, secret){
        var linkSm = $rootScope.urlSmall.replace(farmidReg, farmid).replace(serverReg, server).replace(idReg, id).replace(secretReg, secret);
        var linkLg = $rootScope.urlLarge.replace(farmidReg, farmid).replace(serverReg, server).replace(idReg, id).replace(secretReg, secret);
        return {
            linkSm: linkSm,
            linkLg: linkLg
        };
    };

    var mapObj = function(data){
        return {
            title: data.title,
            url: parseUrl(data.farm, data.server, data.id, data.secret),
            meta: {
                isfamily: data.isfamily,
                isfriend: data.isfriend,
                ispublic: data.ispublic,
                farm: data.farm,
                server: data.server,
                id: data.id,
                secret: data.secret
            }
        };
    };

    return {
        "parse": function(obj){
            return obj.map(function(data){
                return mapObj(data);
            });
        }
    };
}]);
