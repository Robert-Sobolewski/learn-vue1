
<template>
    <div class="block">
        <h3>Click me ...</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped lang="scss">
    .block{
        border: 2px solid black;
        padding: 1em;
        background: blue;
        color: white;
    }
</style>