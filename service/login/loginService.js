angular.module('latet').factory('loginService', ['$http', 'restApiBaseUrl', 'userData', '$cookieStore', function ($http, restApiBaseUrl, userData, $cookieStore) {



        var auth = {};
        auth.login = function (email, pass) {
            return $http({
                method: 'POST',
                url: restApiBaseUrl + 'login',
                data: $.param({email: email, pass: pass}),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                    .then(function (response, status) {
                        auth.user = response.data;
                        $cookieStore.put('user', auth.user);
                        userData = auth.user;
                        return auth.user;
                    });
        };

        auth.logOut = function () {

            return $http({
                method: 'POST',
                url: restApiBaseUrl + 'logout',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (response) {
                auth.user = undefined;
                $cookieStore.remove('user');
            });
        };


        return auth;
    }]);