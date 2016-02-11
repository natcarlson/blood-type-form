var ctrl = angular.module('BloodTypeApp', []);


ctrl.controller('BloodTypeController', [ '$scope', '$http', function($scope, $http) {

    $scope.editedPost = function(id){
      debugger
      var test = id
    };

    $scope.newBloodType = function() {
      // var bloodtypeDB = formData;
      console.log($scope.newBloodType.firstname);
        bloodtypeDB = {
          'firstname': $scope.newBloodType.firstname,
          'lastname': $scope.newBloodType.lastname,
          'bloodtype': $scope.newBloodType.bloodtype
        };
        console.log(bloodtypeDB);
      $http.post('/api/bloodtype/'+
          $scope.newBloodType.firstname + '/' +
          $scope.newBloodType.lastname + '/' +
          $scope.newBloodType.bloodtype);
      $scope.allBloodTypes();
    };


    $scope.allBloodTypes = function() {
      $http( {
        url: 'api/bloodtype',
        method: 'get',
      }).then(function(response) {
        var data = response.data.bloodtype;
        console.log(response.data.bloodtype);
        $scope.bloodtypes = data;
        console.log(data, "blood types");
      })
    };


    $scope.allBloodTypes();
      $scope.createBloodType = function() {
        $http( {
          url: 'api/bloodtypes',
          method: 'post',
          data: {bloodtype: $scope.newBloodType}
        }).then(function(response) {
          $scope.allBloodTypes();
        });
      };


      $scope.updateBloodType = function() {
        $http( {
          url: 'api/bloodtypes/' + $scope.editedPost,
          method: 'put'
        }).then(function() {
          $scope.bloodtypes.update($scope.editedPost);
        });
      };


      $scope.removeBloodType = function(id) {
        $http( {
          url: 'api/bloodtypes/' + id,
          method: 'delete'
        }).then(function() {
          $scope.bloodtypes.splice(id, 1);
        });
      };


}]);


// app.directive('repeatDone', function() {
//     return function(scope, element, attrs) {
//         if (scope.$last) { // all are rendered
//             scope.$eval(attrs.repeatDone);
//         }
//     }
// });
