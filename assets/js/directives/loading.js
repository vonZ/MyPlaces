app.directive('loading', function () {
    return {
        restrict: 'E',
        replace:true,
        template: '<div class="respCenter loading"><img src="images/ajax-loader.gif" class="respCenterIcon"/></div>',
        link: function (scope, element, attr) {
            scope.$watch('loading', function (val) {
                if (val)
                    $(element).show();
                else
                    $(element).hide();
            });
        }
    }
})
