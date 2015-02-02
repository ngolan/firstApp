angular.module('latet').controller('MenuCtrl', function ($scope, userData, $cookieStore) {

    var userLevel = $cookieStore.get('user').level;

    switch (userLevel) {
        case "1":
            $scope.menu = [{
                    url: 'manageDepotManager',
                    link: 'ניהול מנהלי מחסן'
                }, {
                    url: 'manageUser',
                    link: 'ניהול משתמשים'
                }, {
                    url: 'manageDepot',
                    link: 'ניהול מחסנים'
                }, {
                    url: 'logout',
                    link: 'התנתקות'
                }];
            break;
        case "2":
            $scope.menu = [{
                    url: 'home',
                    link: 'דף הבית'
                }, {
                    url: 'login',
                    link: 'התחברות'
                }, {
                    url: 'register',
                    link: 'הרשמה'
                }];
            break;
        case "3":
            $scope.menu = [{
                    url: 'home',
                    link: 'דף הבית'
                }, {
                    url: 'login',
                    link: 'התחברות'
                }, {
                    url: 'register',
                    link: 'הרשמה'
                }];
            break;
        default:
            $scope.menu = [{
                    url: 'home',
                    link: 'דף הבית'
                }, {
                    url: 'login',
                    link: 'התחברות'
                }, {
                    url: 'register',
                    link: 'הרשמה'
                }];
    }

});