<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title> Vee-validate Login Form
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <ValidationProvider rules="required|email" v-slot="{ errors }" name="email field">
                  <v-text-field
                      prepend-icon="person"
                      name="email"
                      label="E-mail"
                      type="text"
                      v-model="form.email"
                      :error-messages="errors"
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider rules="required|min:8|upCase|number" v-slot="{ errors }" name="password">
                  <v-text-field
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="form.password"
                      :error-messages="errors"
                  ></v-text-field>
                </ValidationProvider>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import { extend } from 'vee-validate';

extend('email', {
  ...email,
  message: 'Email format is incorrect'
});

extend('min', {
  ...min,
  message: (field, values)=>`Minimal length of ${values._field_} field is ${ values.length }`,
});

extend('upCase', {
  message: (field, values)=>`${values._field_} should contain at least one uppercase character`,
  validate: value => value.match(/[A-Z]/g) !== null
})

extend('number', {
  message: (field, values)=>`${values._field_} should contain at least one number`,
  validate: value => value.match(/[0-9]/g) !== null
})

extend('required', {
  ...required,
  message: 'This field is required'
});

export default {
  data(){
    return {
      form: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  components: {
    ValidationProvider,
  }
}

</script>

<style>
.v-text-field__details .error--text ::first-letter {
  text-transform: uppercase;
}
</style>