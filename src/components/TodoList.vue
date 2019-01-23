<template>
  <div class="hello">
    <ul>
      <li
        v-for="(todo, index) in list"
        v-bind:key="index"
      >
        {{ index + 1 }}. {{ todo }}
        <b @click="removeTodo" class="delete">X</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    list: {
      type: Array,
      default () {
        return [];
      },
    },
    removeTodo: {
      type: Function,
      default: () => {},
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.delete {
  color: red;
  float: right;
  cursor: pointer;
}
ul {
  width: 400px;
  margin: 0px;
  padding: 0px;
  margin-top: 20px;
}
li {
  list-style-type: none;
  text-align: left;
  background-color: white;
  color: #5f5050;
  border-top: 2px solid whitesmoke;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
}
</style>
