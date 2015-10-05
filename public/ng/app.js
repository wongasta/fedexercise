var app = angular.module('appMod', ['ngRoute']);

app.run(function($rootScope) {
    $rootScope.currentDate = new Date();
    $rootScope.urlSmall = "https://farm{{farm-id}}.staticflickr.com/{{server-id}}/{{id}}_{{secret}}.jpg";
    $rootScope.urlLarge = "https://farm{{farm-id}}.staticflickr.com/{{server-id}}/{{id}}_{{secret}}_b.jpg";
    $rootScope.displayMode = '';
});
