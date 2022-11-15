<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-card>
          <v-form class="d-flex flex-column pa-4 ma-4">
            <div class="text-center text-h6">Login</div>
            <div class="text-center" v-for="(error, key) in errors" :key="key">{{ error  }}</div>
            <div class="text-center" v-if="success">{{ success }}</div>
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
              @click="loginUser" 
              class="ma-auto" 
              color="primary" 
              :disabled="!isValidForm"
            >
              Login
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
import { loginUrl, jsonContentHeader } from '../../config/api'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
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
    loginUser() {
      const reqBody = {
        credential: {
          username: this.username
        },
        password: this.password
      }
      this.$http.post(
        loginUrl,
        reqBody,
        jsonContentHeader
      ).then(res => {
        const { data } = res
        this.$store.dispatch('SET_USER', {...data})
        this.$router.push('/cards')
      })
      .catch(err => {
        const { errorList } = err.response.data
        this.errors = errorList
      })
    }
  },
   computed: {
    isValidForm() {
        return this.username !== '' && this.password !== ''
    }
  }
}
</script>
<style scoped>
</style>