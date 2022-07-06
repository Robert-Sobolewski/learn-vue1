<template>
<section>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Reaction timer</h1>
  <Block />
  <Results/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default defineComponent({
  name: 'App',
  components: {
    Block,
    Results
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
