(function(){
	function UserModalCtrl($scope, $uibModalInstance, $cookies){
		$scope.confirm = function(username){
			if (username.trim()){
				$cookies.put('blocChatCurrentUser', username);
				$uibModalInstance.close();
			} else {alert("Please enter a username");}
		};

	}

	angular
		.module('blocChat')
		.controller("UserModalCtrl", ["$scope", "$uibModalInstance", "$cookies", UserModalCtrl]);
})();
