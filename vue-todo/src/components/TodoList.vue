<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" :class="{checkBtnCompleted: todoItem.completed}" @click="toggleComplete({todoItem, index})"></i>
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      // helper에서는 파라미터를 직접 넘기지 않아도 암묵적으로 넘기게 되어 있다.
      // 인자가 2개 이상일 경우 객체로 묶어 1개로 넘기도록 한다.
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
    }),
    // removeTodo(todoItem, index) {
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete(todoItem, index) {
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }

    // vuex에 선언한 속성을 그대로 컴포넌트에 연결하는 문법
    ...mapGetters(['storedTodoItems']) 
    // vuex에 선언한 속성을 컴포넌트의 특정 메서드에 연결하는 문법
    // ...mapGetters({
    //   컴포넌트의 메서드: store에 선언된 메서드
    //   testFunction: 'storedTodoItems'
    // })
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>