<template>
  <transition name="modal">
    <div class="modal-mask ">
      <div class="modal-wrapper d-flex justify-center align-center">
        <v-col
          cols="4"
          class="d-flex justify-center"
          color="pink"
        >
          <v-textarea
            outlined
            background-color="indigo lighten-5"
            name="input-7-4"
            v-bind:label="user"
            v-model="post"
          ></v-textarea>
        </v-col>
      </div>
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-btn
            depressed
            color="blue darken-2"
            @click="$emit('close'); update()"
          >
            Сохранить
          </v-btn>
          <v-btn
            depressed
            color="error"
            @click="$emit('close')"
          >
            Отмена
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    id: String
  },
  data: function () {
    return {
      user: this.name,
        post: this.text
    }
  },
  methods:{
    update(){
      this.$socket.emit("updatePost", {
        name: this.name,
        text: this.post,
        id: this.id
      });
    }  
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  margin-top: 200px;
  display: table-cell;
  vertical-align: middle;
}
</style>