(function() {
    function RoomCtrl(Room, $scope, Message) {
        $scope.rooms = Room.all;

// need to find out how to list all messages
        $scope.messages = []; // from roomCtrl
        $scope.currentRoom = {};

// function for ng-click to determine which room we are in while clicking room names
        $scope.activeRoom = function(room){
            $scope.currentRoom = room;

            //messages from db
            $scope.messages = Room.getMessages(room.$id);
        };

        $scope.send = function(newMessage) {
            Message.send(newMessage.trim(), $scope.currentRoom.$id);
            $scope.newMessage = null;
        };

    }




    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room','$scope', 'Message', RoomCtrl]);
})();
