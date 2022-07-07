<template>
    <div>
        <div class="error" v-if="error">
        {{ error}}
        </div>
            <div v-if="post" class="post">
                <h3>{{post.title}}</h3>
                <p class="pre">{{post.body}}</p>
            </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import getPost from '../composables/get-post';

type IDType ={
    id: undefined | string
};

export default defineComponent({
    name: "DetailView",
    components:{
    },
    props:["id"],
    setup (props) {
        
        const {post,error,load} = getPost(props.id)
        load();
        return {post,error}
    }
})
</script>

<style scoped>

</style>