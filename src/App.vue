<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br />
    <input v-model="todo" placeholder="to..." v-on:keypress="addTodo" />
    <div>
      <TodoList
        :list="todos"
        :removeTodo="removeTodo"
      />
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import { savetoLocal, getFromLocal } from './utils.js'

export default {
  name: 'app',
  data() {
    return{
      todo: '',
      todos: getFromLocal() || [],
    };
  },
  methods: {
    addTodo: function() {
      if ((event.which == 13 || event.keyCode == 13) && this.todo) {
        this.todos.push(this.todo);
        savetoLocal(this.todos);
        this.todo = '';
      }
    },
    removeTodo: function(todoId) {
      this.todos.splice(todoId, 1);
      savetoLocal(this.todos);
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: transparent;
}
body {
  background: linear-gradient(45deg, rgba(107,55,190,1) 0%, rgba(0,128,128,1) 100%);
  height: 100vh;
}
input {
  width: 250px;
  padding: 1rem;
  outline: 0;
  border: none;
  font-size: 24px;
  margin-top: 20px;
  border: 1px solid #e1dfdf;
  box-shadow: 10px 10px 82px -25px rgba(0,0,0,0.75);
  border-radius: 5px;
}
</style>
