<template>
    <div class="modal-bg">
        <div class="modal-body">
            <button>Close</button>
            <h3>modal title</h3>
            <p>modal body Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque.</p>
        </div>
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
.modal-bg {
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
    }
}

</style>