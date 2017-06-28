(function () {
  'use strict'

  angular.module('app')
    .controller('editLink', editLink);

    function editLink ($http, $stateParams, $state) {
      const vm = this;

      vm.$onInit = function () {
        $http.get('/api/posts/' + $stateParams.id, $stateParams).then(res => {
          vm.editLink = res.data;
        })
      }

      vm.changeLink = function (link) {
        $http.patch('/api/posts/' + link.id, vm.editLink).then(res => {
          console.log(res);
          $state.go('home');
        })
      }
    }
})()
