var socket = require('socket.io-client')('http://localhost:8080');

var HomeCtrl = function($scope, usSpinnerService)
{
  var vm = this;
  var parts = [];

  socket.on('connect', function(){
    console.log('connect');
  });
  
  socket.on('message', function(data){
    $scope.$apply(function () {
      
      if(!parts.length){
        vm.currentImage = null;
        usSpinnerService.spin('spinner-1');
      }
      
      console.log('message');   
      parts.push(data);
    });
  });

  socket.on('end', function(){
    console.log('end');    
    var url = (window.URL || window.webkitURL).createObjectURL(new Blob(parts));
    console.log(vm.currentImage);
    $scope.$apply(function () {
      usSpinnerService.stop('spinner-1');
      vm.currentImage = url;
      parts = [];
    });    
  });

  socket.on('disconnect', function(){
    console.log('disconnect'); 
    
    $scope.$apply(function () {
      vm.currentImage = null;
    });
  });
}

module.exports = HomeCtrl;