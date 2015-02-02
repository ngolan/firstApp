angular.module('latet').factory('machsanService',['$http','restApiBaseUrl',function($http,restApiBaseUrl) {
       
	var machsan = {};
        machsan.getCustomers = function(){
        return $http.get(restApiBaseUrl + 'machsan');
    };
	return machsan;
}]);