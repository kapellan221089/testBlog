<template>
  <PostView
    :name = "currentPost.name"
    :text = "currentPost.text"
    :id = "currentPost.id" 
  />
</template>

<script>
import PostView from "../components/PostView.vue";
export default {
  components: { PostView },
  computed: {
    currentPost() {
      return this.$store.state.currentPost
    }
  }
}

</script>

<style>

</style>