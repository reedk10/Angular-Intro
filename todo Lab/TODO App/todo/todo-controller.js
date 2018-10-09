"use strict";
{

    angular.module('app')
      .controller('TodoController', function(){

        const $ctrl= this;

        $ctrl.list=[
            { todo: "Workout", complete: true},
            { todo: "Wash the dog", complete: true},
            { todo: "Walk the dog", complete: false},
            {todo: "Go grocery shopping", complete: true},
            {todo: "Do homework", complete: false}
        ];

        $ctrl.add = function(){

            $ctrl.list.push({todo:$ctrl.toDos, complete:true});
            console.log($ctrl.list);
            
        };

       // $ctrl.toDoTasks.push{list.$ctrl.addTodo, done: false});

        $ctrl.remove = function($index) {
         $ctrl.list.splice($index, 1);
        };

        // $ctrl.completeTask = (index) => {
        //    $ctrl.toDoTasks[index].done = true;
        //}




 console.log("this works")
      });
}