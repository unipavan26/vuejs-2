<template>
<div>
   <input type="text" v-model="search" placeholder="Search in Posts">
    <p>Todos</p>
    <div class="todos">
      
       
        <div v-for="todo in filtered"  :key="todo.id" class="todo" >{{todo.title}}
          <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>
        
    </div>
</div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return{
            todo:[],
      search:''
    }
  },
    methods:{
        ...mapActions(["fetchTodos","deleteTodo"])
    },
    computed:{
      ...mapGetters(['allTodos']),
       filtered:function(){
            return this.allTodos.filter((todo)=>{
                return todo.title.match(this.search)
            })
        }
      },
   /* created(){
        this.fetchTodos()
    }*/
    created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}



</style>
