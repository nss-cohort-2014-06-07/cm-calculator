(function(){
  'use strict';

  angular.module('cm-calculator')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.number = function(num){
      var dis = $scope.display;
      num += '';

      if(dis === '0'){
        dis = num;
      }else{
        dis += num;
      }

      $scope.display = dis;
    };

    $scope.decimal = function(){
      if($scope.display.indexOf('.') === -1){
        $scope.display += '.';
      }
    };

    $scope.clear = function(){
      $scope.display = '0';
    };

    $scope.op = function(operator){
      $scope.operator = operator;
      $scope.memory = $scope.display;
      $scope.clear();
    };

    $scope.compute = function(){
      $scope.display = eval($scope.memory + $scope.operator + $scope.display);
      $scope.display = $scope.display.toFixed(2);
    };

    $scope.clear();
  }]);
})();
