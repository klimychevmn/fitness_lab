// competitor Controller

routerApp.controller('competitorController', function ($scope, $http, $filter) {

    $scope.currentDate = new Date();

    $scope.formData = {};

    $scope.editData = {};

    $http.get('/api/competitors')
        .success(function (data) {
            $scope.competitors = data;
            //console.log(data);
        })
        .error(function (data) {
            //console.log('Error: ' + data);
        });

    $http.get('/api/categories')
        .success(function (data) {
            $scope.categories = data;
            //console.log(data);
        })
        .error(function (data) {
            //console.log('Error: ' + data);
        });

    $scope.createCompetitor = function () {
        $http.post('/api/competitors', $scope.formData)
            .success(function (data) {
                $scope.formData = {};
                $scope.competitors = data;
                //console.log(data);
            })
            .error(function (data) {
                //console.log('Error: ' + data);
            });
    };

    $scope.edit = function (competitor) {
        $scope.activeCompetitor = competitor;
        $scope.editData.number = competitor.number;
        $scope.editData.surname = competitor.surname;
        $scope.editData.name = competitor.name;
        $scope.editData.lastname = competitor.lastname;
        $scope.formData.birthday = competitor.birthday;
        $scope.formData.category = competitor.category;
        // $scope.editData.index = competitor.index; for debugging index        
    };

    $scope.add = function () {
        $scope.formData.number = '';
        $scope.formData.surname = '';
        $scope.formData.name = '';
        $scope.formData.lastname = '';
        $scope.formData.birthday = '';
    }

    $scope.update = function (id) {
        $scope.activeCompetitor = null;
        // $scope.activeCategory = null;
        $scope.formData = $scope.editData;
        $http.put('/api/competitors/' + id, $scope.formData)
            .success(function (data) {
                $scope.competitors = data;
                // console.log(data);
            })
            .error(function (data) {
                // console.log('Error: ' + data);
            });
    };

    $scope.deleteCompetitor = function (id) {
        $http.delete('/api/competitors/' + id)
            .success(function (data) {
                $scope.competitors = data;
                //console.log(data);
            })
            .error(function (data) {
                //console.log('Error: ' + data);
            });
    };

    $scope.cancel = function () {
        $scope.toggle = !$scope.toggle;
        $scope.activeCompetitor = null;
    }
});