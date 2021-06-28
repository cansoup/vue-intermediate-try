<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer">
      <i class="fas fa-plus addBtn" @click="addTodo"></i>
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
        // this.$emit('이벤트 이름', 인자1, 인자2, ...
        this.$emit('addTodoItem', this.newTodoItem);
        // localStorage.setItem(this.newTodoItem, obj); -> 로컬스토리지 콘솔 내에서 내용 확인이 불가능
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