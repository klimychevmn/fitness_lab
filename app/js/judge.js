fitnessApp.controller('judgeController', function ($scope, $http) {

    $scope.formData = {};

    $scope.editData = {};

    //Getting all Judges records from DB
    $http.get('/api/judges')
        .success(function (data) {
            $scope.judges = data;
            // console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    $scope.randomize = function () {
        var number = "0123456789";
        var outputNumbers = '';
        for (var x = 0; x < 3; x++) {
            var i = Math.floor(Math.random() * number.length);
            outputNumbers += number.charAt(i);
        }
        return outputNumbers;
    };

    //Create Judge record
    $scope.createJudge = function () {
        $scope.formData.password = $scope.randomize();
        $scope.formData.number = $scope.randomize();
        $http.post('/api/judges', $scope.formData)
            .success(function (data) {
                $scope.formData = {};
                $scope.judges = data;
                // console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    //Collapsing non-editable ouput and show editable input
    $scope.edit = function (judge) {
        $scope.activeJudge = judge;
        $scope.editData.number = judge.number;
        $scope.editData.password = judge.password;
        $scope.editData.surname = judge.surname;
        $scope.editData.name = judge.name;
        $scope.editData.lastname = judge.lastname;
    };

    //Updating Judge record from DB
    $scope.update = function (id) {
        $scope.activeJudge = null;
        $scope.formData = $scope.editData;
        $http.put('/api/judges/' + id, $scope.formData)
            .success(function (data) {
                $scope.judges = data;
                // console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    //deleting Judge record from DB
    $scope.deleteJudge = function (id) {
        $http.delete('/api/judges/' + id)
            .success(function (data) {
                $scope.judges = data;
                // console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
});