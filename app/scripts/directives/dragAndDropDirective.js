angular.module('projiApp')

.directive('drag', function() {
    'use strict';
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {
        //     item: '=ngModel'
        // }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs) {
            var element = iElm[0];
            element.draggable = true;
            element.addEventListener('dragstart', function(e) {
                var itemData = iAttrs.dragData,
                    itemId = iAttrs.dragId;

                //$scope.eval needed to make itemData an object again
                itemData = $scope.$eval(itemData);

                var item = angular.toJson(itemData);
                console.log(item);

                e.dataTransfer.setData('json/itemId', itemId);
                e.dataTransfer.setData('json/item', item);
            });
        }
    };
})

.directive('drop', function($parse) {
    'use strict';
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: true, //{}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs) {
            var element = iElm[0];
            element.addEventListener('dragover', function(e) {
                //Default is not droppable, therefore prevent default.
                e.preventDefault();
            });

            element.addEventListener('drop', function(e) {
                var itemData = e.dataTransfer.getData('json/item'),
                    itemId = e.dataTransfer.getData('json/itemId'),
                    onDrop = $parse(iAttrs.onDrop);

                var item = angular.fromJson(itemData);

                //http://stackoverflow.com/questions/17583004/call-an-angularjs-controller-function-from-a-directive-without-isolated-scope
                onDrop($scope, {
                    $itemId: itemId,
                    $item: item
                });

                e.preventDefault();
            });
        }
    };
});