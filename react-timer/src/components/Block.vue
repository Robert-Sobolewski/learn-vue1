
<template>
    <div v-if="showBlock" class="block">
        <h3>Click me ...</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props:{
        delay:Number,
    },
    mounted:function () {
        console.log("component mounted");
        setTimeout(function (){
            this.showBlock = true;
            console.log("delay", this.delay);
        }, this.delay)
    },
    setup (props) {
        const showBlock = ref<boolean>(false);


        //lifecycle hooks
        

        return {showBlock,}
    }
})
</script>

<style scoped lang="scss">
    .block{
        border: 2px solid black;
        padding: 1em;
        background: blue;
        color: white;
        width: 300px;
        border-radius: 1em;
        margin: 1em auto;
    }
</style>