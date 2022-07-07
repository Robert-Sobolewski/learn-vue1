<template>
<section>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Reaction timer</h1>
 
  <button :disabled="isPlaying" @click="start">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <ResultsComp v-if="showResults" :score="score"/>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import Block from './components/Block.vue';
import ResultsComp from './components/Results.vue';

export default defineComponent({
  name: 'App',
  components: {
    Block,
    ResultsComp
  },
  setup () {
    const isPlaying = ref<boolean>(false);
    const delay = ref<number|null>(null);
    const score = ref<number>(-1)
    const showResults = ref<boolean>(false);

    const endGame = (reactionTime:number)=>{
      score.value = reactionTime
      isPlaying.value =false;
      showResults.value = true;
    }

 const start = ()=>{
        isPlaying.value = true;
        delay.value = 2000 + Math.round(Math.random()*5000);
        showResults.value =false;
      }
    return {
     start,endGame,
     isPlaying, delay,score,showResults
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
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
