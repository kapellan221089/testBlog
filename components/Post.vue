<template>
  <v-container fluid>
    <v-col cols="12">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          color="#e7ecf0"
          class="card"
        >
          <v-card-title @click="routePost" class="text-h6">
            {{name}}
          </v-card-title>
            <v-row>
              <v-col cols="10">
                <v-card-subtitle @click="routePost" class="teal--text">
                {{text}}
                </v-card-subtitle>
              </v-col>
              
              <v-col cols="1">
                <v-btn
                  class="ma-2 btn"
                  outlined
                  color="#021348"
                  @click="showModal"
                >
                Редактировать
                </v-btn>
              </v-col>
              <v-col cols="1">
                <v-btn
                  cols="2"
                  class="ma-2"
                  outlined
                  color="#021348"
                  @click="remove"
                >
                Удалить
                </v-btn>
              </v-col>
            </v-row>
        </v-card>
      </v-hover>
    </v-col>
    <MdlaRedact 
      v-show="isModalVisible"
      @close='close'
      :name = "name"
      :text = "text"
      :id = "id"
    />
  </v-container>
</template>

<script>
import MdlaRedact from "./MdlaRedact.vue";
import { mapMutations } from 'vuex';
export default {
  props: {
    name: String,
    text: String,
    id: String
  },
  data () {
    return {
      isModalVisible: false,
      post: {
        name:this.name,
        text: this.text,
        id: this.id
      }
    }; 
  },
  methods: {
    ...mapMutations(["setCurrPost"]),
    remove() {
      this.$socket.emit("createMessage", {
        text: this.text,
          id: this.id
        });
      },
    update() {
      console.log("update");
    },
    showModal() {
      this.isModalVisible = true;
    },
    close(){
      this.isModalVisible = false;
    },
    routePost (){
      this.setCurrPost(this.post);
      console.log(this.post)
      this.$router.push({ 
        path: '/post',
      })
    },
  }, 
  components: { MdlaRedact }
}
</script>

<style>
.ma-2 {
  z-index: 7;
}
</style>