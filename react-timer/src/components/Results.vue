
<template>
    <div class="results">
        <p>Reaction time is {{score}} ms.</p>
        <p class="rank">{{rank}}</p>
    </div> 
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
    name: "ResultsComp",
    props:['score'],
    setup (props) {
        const rank = ref<string | null>(null)
        // lifecycle

        onMounted(()=>{
           if (props.score< 250){
            rank.value = "Ninja Fingers"
           }
           else if( props.score< 400){
            rank.value = "Rapid Reflexes"
           }
           else{
            rank.value = "Snail peace..."
           }
        })
        return {rank}
    }
})
</script>

<style scoped lang="scss">
.rank{
    font-size: 1.3em;
    font-weight: bold;
    
}
</style>