(function(ng) {
  ng.module('GlassClassApp').service('DataRequestService', AllDataService);

    function AllDataService($http) {

      function getData(url) {
        return $http({
          method: 'GET',
          url: url
        });
      }

      return {
        get: getData
      };
    }
})(angular);
