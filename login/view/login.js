angular.module('latet').controller('LoginCtrl', ['$scope', 'loginService', '$state', function ($scope, loginService, $state) {


        $scope.login = {
            email: undefined,
            pass: undefined

        };
        
        
        

        $scope.chkUser = function () {

            loginService.login($scope.login.email, $scope.login.pass).
                    then(function (data) {
                        $state.go('admin');
                    }, function (err) {
                        $scope.invalidLogin = true;
                    });
        };


    }]);