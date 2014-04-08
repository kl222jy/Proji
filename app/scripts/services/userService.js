angular.module('projiApp')

.factory('User', function($firebase, FBURL, simpleLogin, $rootScope) {
    'use strict';
    var ref = new Firebase(FBURL + '/users'),
        users = $firebase(ref),
        User = {
            addProject: function(projectId, userId) {
                // return users.$child(userId).$child('projects').$child('pid').$set(projectId);
                return users.$child(userId).$child('projects').$add(projectId);
            },
            create: function(fbUser, username) {
                // fbUser.uid = fbUser.email;

                users[fbUser.uid] = {
                    md5Hash: fbUser.md5_hash,
                    username: username,
                    email: fbUser.email
                };

                users.$save(fbUser.uid).then(function() {
                    User.setCurrentUser(fbUser.uid);
                });
            },
            find: function(uid) {
                if (uid) {
                    return users.$child(uid);
                }
            },
            getCurrentProject: function() {
                return $rootScope.currentUser.pid;
            },
            getCurrentUser: function() {
                // return 'simplelogin:11';
                return users.$child($rootScope.currentUser.uid);

                // var d = $q.defer();

                // var cuser = users.$child($rootScope.currentUser.uid);
                // $timeout(function() {-
                //     d.resolve(cuser);
                // });
                // return d.promise;

                // var d = $q.defer();
                // users.$child($rootScope.currentUser.uid).then(function(data) {
                //     d.resolve(data);
                // });

                // return d.promise;
            },
            getProjects: function(userId) {
                return users.$child(userId).$child('projects');
            },
            setCurrentProject: function(uid, projectId) {
                $rootScope.currentUser.pid = projectId;
                return users.$child(uid).$child('projectId').$set(projectId);
            },
            setCurrentUser: function(fbUser) {
                // $rootScope.currentUser = fbUser.uid;
                // var pid = pid || users.$child(fbUser.uid).projectId;

                $rootScope.currentUser = {
                    email: fbUser.email,
                    uid: fbUser.uid,
                    md5Hash: fbUser.md5_hash,
                    pid: users.$child(fbUser.uid).projectId,
                    username: users.$child(fbUser.uid).username
                };

                // $timeout();
            },
            update: function(uid, user) {
                return users.$child(uid).$update(user);
            }
        };

    $rootScope.$on('$firebaseSimpleLogin:login', function(e, fbUser) {
        User.setCurrentUser(fbUser);
        // $timeout();
    });

    $rootScope.$on('firebaseSimpleLogin:logout', function() {
        delete $rootScope.currentUser;
    });


    return User;
});