
<template>
    <div>
        <ul v-for="post in posts"
            :key="post.id" >
        
        <li><SinglePost :post="post"/>
        
        <!-- <span v-for="tag in post.tags" :key="tag">
        #{{tag}}
        </span> -->
        </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SinglePost from './SinglePost.vue'

export default defineComponent({
    name: "PostList",
    props:["posts"],
    components: {SinglePost},
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
ul{
    list-style-type: none;
}
</style>