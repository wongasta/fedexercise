app.directive('imageContainer', [function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/image-container.html',
        scope: {
            imgData: '=',
            display: '='
        },
        controller: function() {

        }
    };
}]);
