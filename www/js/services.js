Hyy.service('HyyraService', function ($http) {
    var o = "http://messi.hyyravintolat.fi/publicapi/restaurants";
    this.getData = function (callbackFunc) {
        $http({
            method: 'GET',
            url: o,
            params: 'limit=10'
        }).success(function (data) {
            callbackFunc(data);
        }).error(function () {
            alert("error");
        });
    }
});