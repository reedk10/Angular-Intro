"use strict";
{
    angular.module('app')
      .controller('MainController', function(){
          const $ctrl = this;
          $ctrl.myName = 'Kyle';
        //   $ctrl.band = [
        //       {name: 'eminem', instrument:'nothing'},
        //       {name: 'weezy', instrument: 'guitar poorly'},
        //       {name: 'frank sinatra', instrument: 'piano???'},
        //       {name: 'childish gambino', instrument: 'about as much as eminem'}
        //   ];

        //   $ctrl.names = [{name: 'Ivan', Present: true}, {name: 'Mishara', Present: true}, {name:'John', Present: false}, {name:'Grant', Present: false}];



          $ctrl.familyMembers = [
            {name:'Randy', relation: 'dad', age:'64'}, 
            {name:'Lori', relation:'mom', age:'63'}, 
            {name:'Erin', relation:'sister', age:'35'}, 
            {name:'Karlee', relation:'sister', age:'33'}
        ];
        
    //       $ctrl.familyMembers = function (name) {
    //           $ctrl
    //       }


    //       $ctrl.changeName = function (name) {
    //           $ctrl.me.name = name;
    //       };

    //       $ctrl.addName = function() {
    //           $ctrl.names.push($ctrl.newName);
    //           $ctrl.newName= '';
    //       }

    //       $ctrl.togglePresent = function(student) {
    //           student.present = !student.present;
    //       }
     });
}