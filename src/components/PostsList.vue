<template>
  <h1>Posts List</h1>
  <hr>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from '@vue/runtime-core'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['posts'],
    setup(props){
    
    }
}
</script>

<style>

</style>