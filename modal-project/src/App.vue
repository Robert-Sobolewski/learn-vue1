<template>
  <article>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>{{ title }}</h2>
    <strong>{{modal?"true":"false"}}</strong>
    <h4>Name: {{ name }}</h4>
    <input type="text" v-model="name" name="" id="" />
    <button @click="handleClick">Click</button>
    <teleport to=".modals" v-if="modal">
      <Modal v-show="{ visible: modal }" @close="modal = !modal">
       <template v-slot:links >
          <a href="#">sign up now</a>
          <br/>
          <a href="#">info</a>
        </template>
        <h2>modal title</h2>
        <p>
          modal body Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Tempora, neque.
        </p>
       
      </Modal>
    </teleport>
    <br />
    <p>Welcome...</p>
    <button @click="modal = !modal">Show Modal</button>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Modal from "./components/Modal.vue";

export default defineComponent({
  name: "App",
  data: () => {
    return {
      modal: false,
      title: "Hello World",
      name: "",
    };
  },
  components: {
    HelloWorld,
    Modal,
  },
  methods: {
    handleClick: function () {
      console.log("name=", this.name);
    },
    close: function () {
      this.modal = !this.modal;
    },
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: relative;
}
</style>
