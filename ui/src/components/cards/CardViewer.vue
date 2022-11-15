<template>
  <div>
    <v-row class="d-flex justify-center align-center mt-4">
      <div class="text-center text-h3">{{deck.name}}</div>
    </v-row>
    <v-row class="d-flex justify-center align-center mt-4">
      <v-btn @click="editCards"><v-icon>{{ editIcon }}</v-icon></v-btn>
      <v-btn @click="resetCards" class="ml-4">reset cards</v-btn>
    </v-row>
    <v-row class="d-flex justify-center align-center">
      <v-card @click="turnOver" class="card notecard d-flex justify-center align-center pa-5 mt-5">
        <div class="black--text">{{ getCard }}</div>
      </v-card>
    </v-row>
    <v-row class="d-flex justify-center align-center mt-4">
      <div>{{ getNumCardsLeft }}</div>
    </v-row>
    <v-row class="d-flex justify-center align-center mt-4">
      <v-btn @click="prevCard" class="mr-4">&lt;</v-btn>
      <v-btn @click="setAsideCard">set aside this card</v-btn>
      <v-btn @click="nextCard" class="ml-4">&gt;</v-btn>
    </v-row>
  </div>
</template>

<script>
import { mdiPencil } from '@mdi/js'
export default {
  name: 'CardViewer',
  data() {
    return {
      currentCard: 0,
      flip: true,
      editIcon: mdiPencil,
      setAsideCards: [],
      deck: {
          name: '',
          description: '',
          cardList: []
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      const deck = this.$store.getters.cards.find(deck => deck._id === this.$route.params.id)
      if (deck) {
        this.deck = deck
      }
    }
  },
  methods: {
    nextCard() {
      this.flip = true
      let nextIndex = this.currentCard + 1
      while (this.setAsideCards.includes(nextIndex)) {
        nextIndex++
      }
      if (nextIndex < this.deck.cardList.length) this.currentCard = nextIndex
    },
    prevCard() {
      this.flip = true
      let prevIndex = this.currentCard - 1
      while (this.setAsideCards.includes(prevIndex)) {
        prevIndex--
      }
      if (prevIndex >= 0) this.currentCard = prevIndex
    },
    turnOver() {
      this.flip = !this.flip
    },
    editCards() {
      this.$router.replace(`/cards/${this.deck._id}/edit`)
    },
    setAsideCard() {
      this.setAsideCards.push(this.currentCard)
      this.nextCard()
    },
    resetCards() {
      this.setAsideCards = []
      this.currentCard = 0
    }
  },
  computed: {
    getCard() {
      const card = this.deck?.cardList[this.currentCard]
      return this.flip ? card?.front : card?.back
    },
    getNumCardsLeft() {
      return `${this.currentCard + 1}/${this.deck.cardList.length}`
    },
    getPrevDisabled() {
      return this.currentCard === 0
    },
    getNextDisabled() {
      return this.currentCard === this.deck.cardList.length - 1
    }
  }
}
</script>

<style scoped>
  .card {
    width: 30rem;
    min-height: 15rem;
  }
</style>