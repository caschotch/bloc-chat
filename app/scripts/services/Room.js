(function(){
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        return {
            //array of all rooms
            all: rooms,
            // adds new room
            create: function(room) {
                rooms.$add({name: room});
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
