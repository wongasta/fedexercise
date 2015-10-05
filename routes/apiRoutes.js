var express = require('express');
var request = require('request');
var access = require('../access.json');
var router = express.Router();

router.get('/getImg', function(req, response) {
    var opt = {
        url: "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key="+access.API_KEY+"&user_id="+access.USER_ID+"&format=json&nojsoncallback=1"
    };
    request(opt, function(err, res, body){
        if(err){ throw err; }
        response.setHeader('Content-Type', 'application/json');
        response.send(body);
    });
});

module.exports = router;
