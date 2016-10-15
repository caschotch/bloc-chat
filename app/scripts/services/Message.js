(function(){
    function Message($firebaseArray, $cookies, $scope) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
		var currentUser = $cookies.get('blocChatCurrentUser');

		return {
			send: function(newMessage, roomID) {
				messages.$add({
					content: newMessage,
					roomId: roomID,
					username: currentUser
				});
			}
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
