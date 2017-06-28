(function () {
  'use strict'

  angular.module('app')
    .controller('addLinkController', addLinkController)

    function addLinkController ($http, $state) {
      const vm = this;

      vm.addLink = function () {
        $http.post('/api/posts', vm.newLink).then(res => {
          console.log(res);
          $state.go('home');
        })
      }
    }
})()
