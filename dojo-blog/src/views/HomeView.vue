<template>
  <div class="home">
   <h2>Home</h2>
   <div v-if="error">{{error}}</div>
   <h4>posts</h4>
   <div v-if="posts.length">
    <PostList :posts="posts" />
   </div>
   <div v-else>
    <h2>Loading.....</h2>
   </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import PostList from '../components/PostList.vue';
import getPosts from '../composables/get-posts';

export default defineComponent({
  name: 'HomeView',
  components: {
    PostList
  },
  setup(){
   const {posts,error,load } =getPosts();
   load();
    return {
      load,
      posts,error
    }
  }
});
</script>

<style scoped lang="scss">
  .clicked{
    border: solid 2px green;
  }
</style>
