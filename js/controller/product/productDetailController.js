'use strict';
app.controller('ProductDetailController', [
    '$scope',
    '$rootScope',
    '$state',
    '$stateParams',
    '$location',
    function($scope, $rootScope, $state, $stateParams, $location) {
     console.log("inside ProductDetailController ",$stateParams.offerId);
     
    }]);