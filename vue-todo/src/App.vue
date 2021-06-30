<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem="addOneItem"></TodoInput>
    <TodoList :propsdata="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem"></TodoList>
    <TodoFooter @clearTodo="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
// 로직을 app.vue에서 한 번에 관리하여 데이터의 추적을 쉽게 한다. - vuex와 유사
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },
  // 인스턴스가 생성되자마자 호출되는 라이프사이클 훅
  created() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i ++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
        // 저장하는 로직
        const obj = { completed: false, item: todoItem};
        // 로컬스토리지 목록과 화면 목록을 동기화
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      // 안티패턴 -> 사용을 지양하는 것이 좋다(props로 내린 데이터를 emit으로 다시 받아오고 있음)
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬 스토리지에 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
     clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
     },
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width:200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
