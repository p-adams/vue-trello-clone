var TODOS = [];
var INPROGRESS = [];
var DONE = [];

var contains = function(arr, todo){
    return(arr.indexOf(todo) != -1);
}
    
Vue.component('to-do', {
    props: ['todos'],
    template: "#to-do",
    data: function(){
        return {newTodo : ''}
    },
    methods:{
        addTodo: function(){
            var todo = this.newTodo.trim();
            if(!contains(TODOS, todo)){
                TODOS.push(todo);
            }else{
                alert("Todo already contains: " +  todo);
            }
            this.newTodo = ''            
        },
        remove: function(index){
            TODOS.splice(index, 1);
        },
        inProgress: function(todo, index){
           INPROGRESS.push(todo)
           TODOS.splice(index,1);
        }
    }
});

Vue.component('in-progress', {
    props: ['progress'],
    template: "#in-progress",
    methods:{
        done: function(todo, index){
            DONE.push(todo)
            INPROGRESS.splice(index,1);
        }
    }
});

Vue.component('done', {
    props: ['done'],
    template: "#done",
    methods:{
        remove: function(index){
            DONE.splice(index, 1);
        }
    }
});

new Vue({
    el: "#app",
    data: {
        todos: TODOS,
        progress: INPROGRESS,
        finished: DONE,
    },
});