<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-card>
          <v-form class="d-flex flex-column pa-4 ma-4">
            <div class="text-center text-h6">Register</div>
            <div class="text-center" v-for="(error, key) in errors" :key="key">{{ error  }}</div>
            <div class="text-center" v-if="success">{{ success }}</div>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
            />
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Username"
              required
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Password"
              required
            />
            <v-btn 
              @click="registerUser" 
              class="ma-auto" 
              color="primary" 
              :disabled="!isValidForm"
            >
              Register
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
import { registerUrl, jsonContentHeader } from '../../config/api'
export default {
  name: 'Register',
  data() {
    return {
      valid: false,
      email: '',
      username: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => this.validateEmail(v) || 'E-mail must be valid',
      ],
      usernameRules: [
        v => !!v || 'username is required',
      ],
      passwordRules: [
        v => !!v || 'password is required',
      ],
      errors: [],
      success: null
    }
  },
  methods: {
    validateEmail(email) {
      return /.+@.+/.test(email)
    },
    registerUser() {
      if (this.$store.getters.isDemo) return
      const reqBody = {
        email: this.email,
        username: this.username,
        password: this.password
      }
      const reqHeaders = {
        headers: {
          ...jsonContentHeader
        }
      }
      this.$http.post(
        registerUrl,
        reqBody,
        reqHeaders
      ).then(() => {
        this.errors = []
        this.success = 'registration successful'
      }).catch(err => {
        const { errorList } = err.response.data
        this.errors = errorList
        this.success = null
      })
    }
  },
  computed: {
    isValidForm() {
      return this.validateEmail(this.email) 
        && this.username !== '' 
        && this.password !== ''
    }
  }
}
</script>

<style scoped>
  .register-button {
    width: 50%;
  }
</style>