let myApp = angular.module('myApp', ['ngRoute'])

myApp.config(function($routeProvider) {
    $routeProvider
    .when(
        '/trangchu',
        {
            templateUrl: 'view/trangchu.html',
            controller: trangchuController
        }
    )
    .when(
        '/list',
        {
            templateUrl: 'view/list.html',
            controller: listController
        }
    )
    .when(
        '/add-student',
        {
            templateUrl: 'view/add.html',
            controller: addController
        }
    )
    .when(
        '/edit/:id',
        {
            templateUrl: 'view/edit.html',
            controller: editController
        }
    )
  
    .when(
        '/detail/:id',
        {
            templateUrl: 'view/detail.html',
            controller: detailController
        }
    )
    .when(
        '/hotcombo',
        {
            templateUrl: 'view/hotcombo.html',
            controller: hotcomboController
        }
    )
    .when(
        '/tailieu',
        {
            templateUrl: 'view/tailieu.html',
            controller: tailieuController
        }
    )
    .otherwise({
        redirectTo: '/trangchu'
    })
})