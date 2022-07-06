<template>
<section>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Reaction timer</h1>
  <button :disabled="isPlaying" @click="start">Play</button>
  <Block v-if="isPlaying" :delay="delay" />
  <Results/>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default defineComponent({
  name: 'App',
  components: {
    Block,
    Results
  },
  setup () {
    let isPlaying = ref<boolean>(false);
    let delay = ref<number|null>(null);
 const start = ()=>{
        isPlaying.value = true;
        delay.value = 2000 + Math.round(Math.random()*5000);
        console.log("delay =", delay.value);
      }
    return {
     start,
     isPlaying, delay
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
