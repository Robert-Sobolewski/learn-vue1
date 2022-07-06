<template>
  <img alt="Vue logo" src="./assets/logo.png">
 <h2>{{title}}</h2>
 <h4>Name: {{name}}</h4>
 <input type="text" v-model="name" name="" id="">
 <button @click="handleClick">Click</button>
 <Modal v-show="{visible:modal}"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Modal from './components/Modal.vue'

export default defineComponent({
  name: 'App',
  data: ()=>{
    return {
      modal: true,
      title: 'Hello World',
      name: ""
    }
  },
  components: {
    HelloWorld,
    Modal
  },
  methods:{
    handleClick: function(){
     console.log("name=", this.name);
     
    }
  }
});
</script>

<style lang="scss">
*{
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
