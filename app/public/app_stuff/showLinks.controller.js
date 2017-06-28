(function () {
  'use strict'

  angular.module('app')
    .controller('showLinksController', showLinksController)

    function showLinksController ($http, moment) {
      const vm = this;

      vm.$onInit = function () {
        $http.get('/api/posts').then(res => {
          vm.posts = res.data;
        })
      }

      vm.upVote = function (link) {
        let upVoteUrl = '/api/posts/' + link.id + '/votes';

        $http.post(upVoteUrl, link).then(res => {
          link.vote_count++;
        })
      }

      vm.downVote = function (link) {
        if (link.vote_count > 0) {
          let downVoteUrl = '/api/posts/' + link.id + '/votes';

          $http.delete(downVoteUrl, link).then(res => {
            link.vote_count--;
          })
        }
      }

      vm.selected = -1;

      vm.toggleComments = function (id) {
        if (vm.selected !== id) {
          vm.selected = id;
        } else {
          vm.selected = -1;
        }
      }

      vm.commentsOn = function (id) {
        return vm.selected === id;
      }

      vm.addComment = function (link) {
        let commentUrl = '/api/posts/' + link.id + '/comments';

        $http.post(commentUrl, vm.newComment).then(res => {
          link.comments.push(res.data);
          delete vm.newComment;
        })
      }
    }
})()
