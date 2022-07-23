<template>
  <v-container class="justify-center align-center">
    <v-card color="#e7ecf0">
      <v-card-title class="text-h5">
        {{name}}
      </v-card-title>
      <v-row>
        <v-col cols="10">
          <v-card-subtitle class="teal--text">
            {{text}}
          </v-card-subtitle>
        </v-col>
        <v-col cols="1">
          <v-btn
            class="ma-2"
            outlined
            color="#021348"
            @click="routeHome"
          >
            Посты
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    id: String
  },
  methods: {
    routeHome(){
      this.$router.push({ path: '/',})
    }
  }
}
</script>

<style>

</style>