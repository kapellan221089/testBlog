<template>
<v-card flat >
  <transition name="modal">
    <div class="modal-mask ">
    <div class="modal-wrapper d-flex justify-center" >
              <v-col
                cols="4"
                class="d-flex justify-center"
                color="pink"
                >
                    <v-form class="form">
                        <v-container fluid>
                            <v-row >
                            <v-col
                                cols="12"
                                sm="6"
                            >
                                <v-text-field
                                v-model="form.autor"
                                :rules="rules.name"
                                color="purple darken-2"
                                label="Название"
                                v-on:input="validNameCheck"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                auto-grow
                                v-model="form.descriptions"
                                :rules="rules.descriptions"
                                v-on:input="validDescriptionCheck"
                                height="50"
                                color="teal"
                                >
                                <template v-slot:label>
                                    <div>
                                    Текст поста
                                    </div>
                                </template>
                                </v-textarea>
                            </v-col>
                            </v-row>
                        </v-container>
                        <v-card-actions>
                            <v-btn
                            :disabled="!formIsValid"
                            text
                            color="primary"
                            @click ="$emit('close');createPost();clearForm()"
                            >
                            Создать пост
                            </v-btn>
                            <v-btn
                                depressed
                                color="second"
                                @click="$emit('close'); clearForm()"
                                >
                                Отмена
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-col>
          </div>
        </div>
      </transition>
    
</v-card>
</template>

<script>
export default {
    data(){
        return {
            rules: {
                name: [val => val.length < 12 || 'Максимальная длина 12 символов', val => val.length > 1 || 'Минимальная длина 2 символа'],
                descriptions: [val => val.length < 50 || 'Максимальная длина 50 символов', val => val.length > 1 || 'Минимальная длина 2 символа']
            },
            defaultForm: {
                autor:'',
                descriptions : ''
            },
            form:{
                autor:'',
                descriptions : ''
            },
            formIsValid: false,
            descriptionsValid: false,
            autorValid:false
        }
    },

    methods: {
      validNameCheck () {
          console.log(this.form.autor.length)
          if(this.form.autor.length < 2 || this.form.autor.length > 11){
              this.formIsValid=false
              this.autorValid=false
          } else {
              this.autorValid = true
              if(this.descriptionsValid){
                  this.formIsValid=true
              }
          }
      },
      validDescriptionCheck() {
          if(this.form.descriptions.length < 2 || this.form.descriptions.length > 49){
              this.formIsValid=false
              this.descriptionsValid=false
          } else {
              this.descriptionsValid = true
              if(this.autorValid){
                  this.formIsValid=true
              }
          }
      },
      createPost(){
          this.$socket.emit("createPost", {
                name: this.form.autor,
                text: this.form.descriptions,
                id: Math.round(Math.random()*Math.random()*576).toString()
            });
        this.formIsValid = false
      },
      clearForm(){
          this.form.autor = '',
          this.form.descriptions = ''
      }
    },
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
  display: table-cell;
  vertical-align: middle;
}

.form {
    background-color: #E8EAF6;
}
</style>