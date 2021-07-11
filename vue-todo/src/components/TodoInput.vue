<template>
  <div class="inputBox shadow">
    <!-- keyup.enter -> 한글 입력시 이벤트가 두 번 발생 -->
    <!-- https://www.inflearn.com/questions/9010 -->
    <input type="text" v-model="newTodoItem" @keypress.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn" aria-hidden="true"></i>
    </span>

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        아무것도 입력되지 않았습니다.
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
export default {
  data() {
    return  {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      // 비어 있는지 확인 
      if(this.newTodoItem !== '') {
        const item = this.newTodoItem.trim();
        this.$store.commit('addOneItem', item);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      // input box 초기화
      this.newTodoItem = '';
    }
  },
  components: {
    Modal,
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>