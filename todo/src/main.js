
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'
import { createNamespacedHelpers } from 'vuex';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
  /*,
  created(){
    firebase.initializeApp({
      storageBucket:'https://upload-cf55d.firebaseio.com/'
    })
  }*/
})

