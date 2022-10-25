<template>
  <v-row>
    <v-card class="d-flex flex-wrap align-center justify-center" min-height="250" max-width="450px">
      <v-card-title>
        Login
      </v-card-title>
      <v-card-text>

        <v-form @submit.prevent="onSubmit()" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field dense v-model="v$.form.email.$model" label="E-mail"/>
            </v-col>
            <v-col cols="12">
              <v-text-field dense v-model="v$.form.name.$model" label="Name"/>
            </v-col>
            <v-col cols="12">
              <v-text-field dense v-model="v$.form.password.$model" label="Password" hint="At least 8 characters" type="password"/>
            </v-col>
            <v-col cols="12">
              <div class="input-errors" v-for="(error, index) of v$.form.$errors" :key="index">
                <div class="red--text" >{{ error.$message }}</div>
              </div>
            </v-col>
            <v-col cols="12">
              <v-btn block :disabled="v$.$invalid" color="success" type="submit" > Login </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-row>
</template>
<script>

import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'



export default {

  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      }
    }
  },

  validations() {
    return {
      form: {
        name: {
          required,
        },
        email: { required, email },
        password: { required, min: minLength(6) },
      },
    }
  },
  methods: {
    onSubmit(){
      console.log('asdad')
      this.$router.push('products')
    }
  }
}
</script>
