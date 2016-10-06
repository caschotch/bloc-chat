(function() {
    function RoomCtrl($scope, Room) {
        //$scope.rooms = Room;
    }

    angular
        .module('blocChat')
        .factory('RoomCtrl', ['$scope','Room', RoomCtrl]);
})();
