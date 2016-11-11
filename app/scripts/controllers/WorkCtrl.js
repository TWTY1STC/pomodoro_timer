

// (function(){
//     function WorkCtrl (Timer){
//         this.workTimer = Timer;
//     }
    
//     angular
//         .module('pomodoro')
//         .controller('WorkCtrl', ["Timer", WorkCtrl()]);
// })();

var app= angular.module('pomodoro', []);

   app.controller('ExampleController', ['$scope', '$interval',
      function($scope, $interval) {
        $scope.format = 'HH:mm:ss';
        $scope.time = '25:00:00';
        

app.controller('WorkCtrl', function($scope, $interval, $filter){
    
    $scope.workTimer = null;
    
    $scope.workTimer.start = function (){
        $scope.workTimer = $interval(function(){
            var time = $filter('date') (new Date(), 'HH:mm:ss');
            $scope.time = time;
        }, 1000)
        
    };
});