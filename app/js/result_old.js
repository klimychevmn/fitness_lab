routerApp.controller('resultController', function($scope, $http) {

    // $scope.identificator = 0;
    // console.log($scope.identificator);
    $scope.formData = {};
    $scope.tmp = {};
    var i;

    $http.get('/api/competitors')
        .success(function(data) {
            $scope.competitors = data;
            $scope.competitors.index = 0;
            log
            // console.log(Object.keys($scope.competitors).length);
            // for(var i=0;i++;i<Object.keys($scope.competitors).length) {
            //     // $scope.competitors[index].i = i;
            //     // console.log($scope.competitors.index)
            //     $scope.competitors.push({text: text + i});
            // }
            // for(i = 0; i<Object.keys($scope.competitors).length; i++) {
            //     $scope.competitors.index = i+1;
            //     console.log($scope.competitors.index);
            //     // console.log($scope.competitor.index);
            //     // console.log(Object.keys($scope.competitors).length);
            //     // tmp.push( );
            // }
            // $scope.competitors = tmp;
            $scope.tmp = $scope.competitors;
            // console.log(typeof(tmp));
            console.log(Object.keys($scope.tmp).length);

        })
        .error(function(data) {
            console.log('Error' + data);
        });
    console.log(Object.keys($scope.tmp).length);
    for(i = 0; i<Object.keys($scope.tmp).length; i++) {
        $scope.competitors.index = i+1;
        console.log($scope.competitors.index);
        // console.log($scope.competitor.index);
        // console.log(Object.keys($scope.competitors).length);
        // tmp.push( );
    }
    // $scope.formData = {};
    // for(var i=0;i++;i<Object.keys($scope.competitors).length) {
    //     // $scope.competitors[index].i = i;
    //     // console.log($scope.competitors.index)
    //     console.log(Object.keys($scope.competitors).length);
    //     tmp.push({text: text + i});
    // }
    // $scope.competitors = tmp;

    // $http.get('/api/competitors')
    //     .success(function(data) {
    //         $scope.competitors = data;
    //         // console.log(Object.keys($scope.competitors).length);
    //         // for(var i=0;i++;i<Object.keys($scope.competitors).length) {
    //         //     // $scope.competitors[index].i = i;
    //         //     // console.log($scope.competitors.index)
    //         //     $scope.competitors.push({text: text + i});
    //         // }
    //     })
    //     .error(function(data) {
    //         console.log('Error' + data);
    //     });

    $scope.update = function(id) {
        console.log(id);
        $http.put('/api/competitors'+id, $scope.formData)
            .success(function(data) {
                $scope.competitors = data;
            })
            .error(function(data) {
                console.log('Error' + data);
            });
    };


    $scope.sortableOptions = {
        stop: function(e, ui) {
            for (var index in $scope.competitors) {
                $scope.competitors[index].i = index;
                console.log($scope.competitors[index].i);
                $scope.update = function(id) {
                    console.log(id);
                }
            }

        }
    };



    // for(var i = 0 ; i++ ; i<competitors.length()){
    //     console.log(i);
    // }

    // $http.get('/api/competitors')
    //     .success(function(data) {
    //         $scope.competitors = data;
    //         console.log(Object.keys($scope.competitors).length);
    //         for(var i = 0 ; i++ ; i==Object.keys($scope.competitors).length){
    //             console.log(i);
    //         }
    //         $scope.competitors.sort(function(a,b) {
    //             return a.index > b.index;
    //         })
    //     })
    //     .error(function(data) {
    //         console.log('Error' + data);
    //     });



    // $scope.updatingId = function(id) {
    //     $scope.competitorId = id;
    //     console.log($scope.competitorId);
    //     // return id;
    // };
    // $scope.updatingIndex = function(index) {
    //     $scope.competitorIndex = index;
    //     console.log(index);
    // };
    //
    // $scope.updatingIndexStart = function(index) {
    //     console.log(index);
    // };
    //
    // $scope.save = function() {
    //     console.log($scope.competitorId);
    //     console.log($scope.competitorIndex);
    //     // $scope.formData = $scope.competitorIndex;
    //     $http.put('/api/competitors/'+$scope.competitorId, $scope.formData)
    //         .success(function(data) {
    //             $scope.competitors = data;
    //             console.log(data);
    //         })
    //         .error(function(data) {
    //             //console.log('Error: ' + data);
    //         });
    // };


});