<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <router-link v-if="isLoggedIn" to="/work/flashcards/cards">
          <div class="router-link"><h3>Flashcards</h3></div>
        </router-link>
        <router-link v-else to="/work/flashcards/">
          <div class="router-link"><h3>Flashcards</h3></div>
        </router-link>
      </div>
      <v-spacer/>
      <div class="text-center">
        <v-row v-if="!isLoggedIn" align="center" justify="center">
          <router-link to="/work/flashcards/login">
            <div class="router-link">Login</div>
          </router-link>
          <v-btn @click="register" class="ma-2">sign up</v-btn>          
        </v-row>
        <v-row v-else align="center" justify="center">
          <router-link to="/work/flashcards/login" @click.native="logout">
            <div class="router-link mr-4">Logout</div>
          </router-link>
        </v-row>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    register() {
      return;
      // this.$router.push('register')
    },
    logout() {
      this.$store.dispatch('SET_USER', null)
      this.$router.push('/work/flashcards')
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.$store.getters.user
    }
  }
}
</script>

<style scoped>
  @import './assets/css/global.css';
</style>
