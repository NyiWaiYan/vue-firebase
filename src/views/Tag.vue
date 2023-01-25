<template>
    <div class="tag">
      <div v-if="error">
        {{ error }}
    </div>
    <div v-if="posts.length" class="layout">
     <div>
      <PostsList :posts="filteredPosts"></PostsList>
     </div>
     <div>
      <Tagcloud :posts="posts"></Tagcloud>
     </div>
    </div>
    <div v-else>
        loading ...
    </div>
    </div>
</template>

<script>
import Tagcloud from '../components/Tagcloud'
import PostsList from '../components/PostsList'
import getPosts from '@/composables/getPosts';
import { computed } from '@vue/runtime-core';
export default {
  components: {
    Tagcloud, PostsList },
    props:['tag'],
    setup(props){
       let{posts,error,load}=getPosts();
       load();
       let filteredPosts=computed(()=>{
        return posts.value.filter((post)=>{
        return post.tags.includes(props.tag)
        })
    })
    return{posts,error,filteredPosts}
    }
}
</script>

<style>
  .tag{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>