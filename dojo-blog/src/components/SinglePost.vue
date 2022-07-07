
<template>
    <div class="post">
        <router-link :to="{name:'Details',params:{ id: post?.id}}">
            <h3>title:{{post?.title}}</h3>
        </router-link>
       
        <p>{{snippet}}</p>
        <br/>
         <span v-for="tag in post?.tags" :key="tag">
        #{{tag}}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent,computed, toRefs } from 'vue'
import { IPost } from '../types';

export default defineComponent({
    name: "SinglePost",
    props:{
        post: Object,
    },
    setup (props) {
        // const {post} = toRefs(props)
        const snippet = computed(()=>{
            console.log("snippet props",props.post);
            return props.post?.body.substring(0,100)+ "..."
        })

        return {snippet}
    }
})
</script>

<style scoped>
    .post{
        border: solid 1px blue;
    }
</style>