<template>
    <div @click.self="$emit('close')" class="modal-bg">
        <div class="modal-body">
            <button @click="$emit('close')">Close</button>
            <slot></slot>
            <div class="actions">
                <slot name="links"> </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Modal",
    props:{
        header:String
    },
    setup () {
       

        return {}
    }
})
</script>

<style scoped lang="scss">
.modal-bg, .modals {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(54, 53, 53, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .modal-body {
        border: solid 2px black;
        background: #fff;
        padding: 1em;
        border-radius: 1em;

        h2{ color: green;}
    }
    .Links{
        border: solid 1px red;
    }
}

</style>