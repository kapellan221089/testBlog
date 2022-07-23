<template>
  <div>
    <v-btn
      x-large
      color="success"
      dark
      @click="showCreate"
      >
        Создать пост
    </v-btn>
    <CreatePost
      @close='close'
      v-show="createVisible"
    />
    <Post v-for="p in post" :key="p.text"
      :name = "p.name"
      :text = "p.text"
      :id = "p.id" 
    />
  </div>
</template>

<script>
import Post from '@/components/Post';
import CreatePost from '@/components/CreatePostForm';
import{mapState} from 'vuex';
export default {
  methods:{
    showCreate() {
      this.createVisible = !this.createVisible;
    },
    close(){
      this.createVisible = false;
    },
    routePost (){
      this.$router.push({ path: '/123' })
    }
  },
  data () {
    return {
      createVisible: false,
    };
  },
  computed: mapState(["post"]),
  components: {Post, CreatePost}  
}

</script>

<style>

</style>