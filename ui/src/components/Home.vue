<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="8">
        <v-card class="notecard d-flex flex-column pa-4 mt-4">
          <div class="body-1 text-center black--text">Welcome to Flashcards, a <a href="https://quizlet.com/">quizlet</a> clone built entirely with javascript.</div>
          <div class="d-flex justify-center">
            <a href="https://vuetifyjs.com/">
              <img :src="vuetify"/>
            </a>
            <a href="https://vuejs.org/">
              <img :src="vuejs"/>
            </a>
            <a href="https://expressjs.com/">
              <img :src="express"/>
            </a>
            <a href="https://nodejs.org/">
              <img :src="node"/>
            </a>
            <a href="https://www.mongodb.com/">
              <img :src="mongo"/>
            </a>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      express: require('../assets/img/expressjs.svg'),
      mongo: require('../assets/img/mongodb.svg'),
      node: require('../assets/img/node.svg'),
      vuejs: require('../assets/img/vue.svg'),
      vuetify: require('../assets/img/vuetify.svg')
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 8rem;
    max-height: 6rem;
    margin: 7rem 1rem 7rem 1rem; 
    display: block;
    border-radius: 0.5rem;
    padding: 0.5rem
  }
  img:hover {
    box-shadow: 0.2rem 0.2rem 0.5rem #777777;
  }
</style>
