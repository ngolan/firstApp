angular.module('latet').controller('RegisterCtrl',['$scope', 'machsanService', function($scope, machsanService){

$scope.user={};
 machsanService.getCustomers().then(function(data){
        $scope.machsan = data.data;
        console.log( $scope.machsan);
    });



/*$scope.machsan = [{
id: '1',
desc: 'יבנה'
}, {
id: '2',
desc: 'תל אביב'
}, {
id: '3',
desc: 'באר שבע'
}];
*/
$scope.saveUser = function() {
if($scope.userForm.$valid){
console.log('saving user'); // save $scope.user object
}
else{
console.log('Unable to save. Validation error!');
}
};
}]);