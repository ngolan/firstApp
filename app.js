angular.module('latet', ['ui.bootstrap', 'ui.router', 'home', 'register', 'login', 'ngCookies', 'admin']);

angular.module('latet').config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $stateProvider.state('home', {
        url: '/home', views: {
            body: {
                templateUrl: 'home/view/home.html'
            },
            menu: {
                templateUrl: 'common/view/menu/menu.html'
            }
        }
    });
    $stateProvider.state('register', {
        url: '/register', views: {
            body: {
                templateUrl: 'register/view/register.html'
            },
            menu: {
                templateUrl: 'common/view/menu/menu.html'
            }
        }
    });
    $stateProvider.state('login', {
        url: '/login', views: {
            body: {
                templateUrl: 'login/view/login.html'
            },
            menu: {
                templateUrl: 'common/view/menu/menu.html'
            }
        }, resolve: {
            user: ['loginService', '$q', function (loginService, $q) {
                    if (loginService.user) {
                        return $q.reject({authorized: true});
                    }
                }]
        }
    });




    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');
    $httpProvider.defaults.withCredentials = true;

    delete $httpProvider.defaults.headers.common["X-Requested-With"];

  


});





