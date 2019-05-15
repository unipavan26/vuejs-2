<template>
  <div id="app">
    <div class="container">
        <AddTodo/>
         <fileUpload/>
        <FilterTodos/>
        
        <todos/>

       
    </div>
  </div>
</template>

<script>
import todos from './components/todos.vue'
import FilterTodos from './components/FilterTodos.vue'
import SearchTodos from './components/SearchTodos.vue'

import AddTodo from './components/AddTodo.vue'
import fileUpload from './components/fileUpload.vue'

export default {
  name: 'app',
  data () {
    return {
  
    }
  },
  components:{
    todos,
    AddTodo,
    FilterTodos,
    SearchTodos,
    fileUpload
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
