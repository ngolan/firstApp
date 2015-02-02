angular.module('admin').controller('AdminCtrl',function($scope,$cookieStore){

$scope.userLevel={};

    $scope.userLevel=$cookieStore.get('user').level;

});