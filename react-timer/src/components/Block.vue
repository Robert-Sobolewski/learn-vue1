
<template>
  <div v-if="showBlock" class="block" @click="stopTimer();$emit('end',reactionTime)">
    <h3>Click me ...</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent,  onMounted,  ref } from "vue";


export default defineComponent({
  props: ["delay"],
  setup(props) {
    const showBlock = ref<boolean>(false);
    const timer = ref<number|undefined>(undefined);
    const reactionTime = ref<number>(0);
    

    const startTimer = ()=>{
        timer.value = setInterval(()=>{
            reactionTime.value += 10;
        }, 10)
    }
    const stopTimer = ()=>{
        clearInterval(timer.value)
       
        //  emit('end',reactionTime.value)
    }

    //lifecycle hooks
    onMounted(() => {
      setTimeout(function () {
        showBlock.value = true;
        startTimer();
      }, props.delay);
    });

    return { showBlock, startTimer, stopTimer, reactionTime};
  },
});
</script>

<style scoped lang="scss">
.block {
  border: 2px solid black;
  padding: 1em;
  background: blue;
  color: white;
  width: 300px;
  border-radius: 1em;
  margin: 1em auto;
}
</style>