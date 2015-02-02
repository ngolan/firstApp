angular.module('admin', ['ui.bootstrap', 'ui.router']);

angular.module('admin').config(function ($stateProvider) {

    $stateProvider
            .state('admin', {
                url: '/admin',
                views: {
                    body: {
                        templateUrl: 'admin/view/admin.html'
                    },
                    menu: {
                        templateUrl: 'common/view/menu/menu.html'
                    }
                },
                //abstract: true,
                resolve: {
                    user: ['loginService', '$q', function (loginService, $q) {
                            return loginService.user || $q.reject
                                    ({unAuthorized: true});
                        }]
                }

            });
    /* Add New States Above */

}).run(['$rootScope', '$state',
    '$cookieStore', 'loginService', function ($rootScope, $state,
            $cookieStore, loginService) {

        $rootScope.$on('$stateChangeError', function (event, toState,
                toParams, fromState, fromParams, error) {
            if (error.unAuthorized) {
                $state.go('login');
            }
            else if (error.authorized) {
                $state.go('admin');
            }
        }
        );

        loginService.user = $cookieStore.get('user');

    }]);