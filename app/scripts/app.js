(function() {
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url:'/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/home.html'
            });
    }

    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
		if (!currentUser || currentUser ===''){
			$uibModal.open({ // same modal from the other modal, will copy the createroommodal items
				templateUrl: '/templates/usermodal.html',
				controller: 'UserModalCtrl',
				size: 'sm',
				backdrop: 'static'
			});
			currentUser = $cookies.get('blocChatCurrentUser');
		}
	}



    angular
        .module('blocChat', ['ui.router','firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
