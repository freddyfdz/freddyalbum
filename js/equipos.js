var futbol = angular.module('futbol', ['ngRoute']);
 
  //definimos las rutas 
futbol.config(function($routeProvider) {
 
  $routeProvider
  .when('/', {
          templateUrl: 'colombia.html',
          controller: 'futbolcolombia'
  })
 
      //mediante dos puntos (:) definimos un parámetro
  .when('/colombia', {
          templateUrl: 'colombia.html',
          controller: 'futbolcolombia'
  })
          
  .when('/costademarfil', {
          templateUrl: 'costademarfil.html',
          controller: 'futbolcostademarfil'
  })
          
  .when('/grecia', {
          templateUrl: 'grecia.html',
          controller: 'futbolgrecia'
  })
          
  .when('/japon', {
          templateUrl: 'japon.html',
          controller: 'futboljapon'	
  })       
 
      //cualquier ruta no definida
  .otherwise({
          redirectTo: '/'
  });
 
});

futbol.controller('futbolcolombia', function($scope) {
    
});

futbol.controller('futbolcostademarfil', function($scope) {
    
});

futbol.controller('futbolgrecia', function($scope) {
    console.log("cargue el controlador de grecia")
});
futbol.controller('futboljapon', function($scope) {
    
});
futbol.controller('futbol', function($scope) {
    console.log("cargue el controlador de colombia")
});
