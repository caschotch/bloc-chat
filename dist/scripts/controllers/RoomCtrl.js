(function() {
    function RoomCtrl(Room, $scope) {
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


    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room','$scope', RoomCtrl]);
})();
