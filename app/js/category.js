routerApp.controller('categoryController', function($scope, $http) {

    $scope.formData = {};

    $scope.editData = {};

    $http.get('/api/categories')
        .success(function(data) {
            $scope.categories = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createCategory = function() {
        $http.post('/api/categories', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.categories = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    
    $scope.edit = function(category) {
        $scope.activeCategory = category;
        $scope.toggle = !$scope.toggle;
        $scope.editData.name = category.name;
        $scope.editData.competitors = category.competitors;
    };

    $scope.update = function(id) {
        $scope.toggle = !$scope.toggle;
        $scope.activeCategory = null;
        $scope.formData = $scope.editData;
        $http.put('/api/categories/' + id, $scope.formData)
            .success(function(data) {
                $scope.categories = data;
                $scope.formData = "";
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.cancel = function() {
        $scope.toggle = !$scope.toggle;
        $scope.activeCategory = null;
    }

    $scope.deleteCategory = function(id) {
        $http.delete('/api/categories/' + id)
            .success(function(data) {
                $scope.categories = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
});