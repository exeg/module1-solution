(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController)

 LunchCheckController.$inject = ['$scope'];

 function LunchCheckController ($scope) {

 
  $scope.count = function () {
    if ($scope.menu) {
    var totalNameValue =calculatNumericForString($scope.menu);
    $scope.totalValue = totalNameValue;
    $scope.myStyle = {
    "color" : "green",
    "border" : "1px solid green"
  }
    } else {
    $scope.totalValue = "Please enter data first";
    $scope.myStyle = {
    "color" : "red",
    "border" : "1px solid red"
   
  }
    

    }
    
  };


  function calculatNumericForString(string) {
    var totalString = [];
    totalString = string.trim();
    totalString = totalString.split(',');
    var rlenght = 0;
    for (var i = 0; i < totalString.length; i++) {
      if (totalString[i].trim()) {
        rlenght += 1;
        continue;
      } else {
        continue;
      }
    }
    
    if (rlenght <= 3) {
      return 'Enjoy';
    } 
    else {
      return 'Too Much';
    }
  }



  //});
  
    
}})();