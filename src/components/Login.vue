<template>
  <validation-observer
      ref="observer"
  >
    <v-card height="550px" d-flex flex-column align-center justify-center>
      <v-form @submit.prevent="submit">
        <v-layout align-center justify-center>
          <v-flex xs8 class="form-flex">
            <validation-provider
                v-slot="{ errors }"
                name="Email"
                rules="required|email"
            >
              <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
              ></v-text-field>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="Password"
                rules="required"
            >
              <v-text-field
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :error-messages="errors"
                  label="Password"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                  required
              ></v-text-field>
            </validation-provider>
            <v-btn class="button"
                   color="accent"
                   elevation="2"
                   rounded
                   type="submit"
            >
              LOGIN
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card>
  </validation-observer>
</template>

<script>
import {email, required} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'

setInteractionMode('eager')
extend('email', {
  ...email,
  message: 'Email must be valid',
})
extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
export default {
  name: "LoginForm",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: '',
    password: '',
    show: false
  }),
  methods: {
    submit() {
      this.$refs.observer.validate()
    },
  },
}
</script>

<style>
.form-flex {
  margin-top: 27%;
}

.button {
  margin-left: 37%;
  margin-top: 5%;
}
</style>