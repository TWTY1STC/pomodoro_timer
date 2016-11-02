(function(){
    function config ($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('work',{
                url: '/',
                templateUrl: '/templates/work.html'
            })
            .state('tasks',{
                url: '/tasks',
                templateUrl: '/templates/tasks.html'
            })
            .state('break',{
                url: '/break',
                templateUrl: '/templates/break.html'
            });
    }
    

    angular
        .module("pomodoro", ['ui.router'])
        .config(config);
})();

