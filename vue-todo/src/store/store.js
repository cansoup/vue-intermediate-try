import Vue from 'vue'
import Vuex from 'vuex'

// use -> Vue의 플러그인, 글로벌 펑셔널리티를 사용해야할 때 
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoItems: []
  }
});