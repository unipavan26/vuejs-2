<template>
    <div >
         <input type="text" v-model="search" placeholder="Search in Posts">
        <div v-for="todo in filtered">{{todo.title}}</div>
      
        

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
        ...mapActions(["fetchTodos"])
    },
     computed:{
        ...mapGetters(['allTodos']),
        filtered:function(){
            return this.allTodos.filter((todo)=>{
                return todo.title.match(this.search)
            })
        }
    },
  created() {
    this.fetchTodos();
  }


}
</script>

<style>

</style>
