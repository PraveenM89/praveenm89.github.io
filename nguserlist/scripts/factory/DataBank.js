/**
 * Created by Praveen on 7/6/2015.
 */
(function IIFE() {
    angular.module("userapp")
        .factory('DataBank', ['$http', DataBank]);


    function DataBank($http){
        var obj = {};
        obj.userData = [];
        obj.getData = getData;
        return obj;

        /////////////////////////////////////////////////
        function getData() {
            $http.get('./data.json')
                .success(get_success)
                .error(get_error);
        }

        function get_success(data) {
            angular.copy(data, obj.userData);
        }

        function get_error(data, status) {
            console.log("error fetching data .. "+ status);
        }

    }
})();