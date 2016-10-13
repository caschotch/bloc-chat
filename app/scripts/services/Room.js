(function(){
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        var refMes = firebase.database().ref().child("messages");

        return {
            //array of all rooms
            all: rooms,
            // adds new room
            create: function(room) {
                rooms.$add({name: room});
            },
            getMessages: function(roomId){
                //get all messages based on current room --- ? need to figure out display before I can test
                var messages = $firebaseArray(refMes.orderByChild("roomId").equalTo(roomId)); // ??
                return messages;
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
