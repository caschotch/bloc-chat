(function(){
    function ModalInstanceCtrl($scope, $uibModalInstance, Room){

        // creates room from open modal
        $scope.confirm = function(roomInput){
            Room.create(roomInput);
            $uibModalInstance.close(); //standard close per uibmodal website
        };

        // closes modal window
        $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel'); //standard close per uibmodal website 
        };

    }

    angular
        .module("blocChat")
        .controller("ModalInstanceCtrl", ["$scope", "$uibModalInstance", "Room", ModalInstanceCtrl]);
})();
