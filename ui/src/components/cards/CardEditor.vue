<template>
  <v-container class="d-flex flex-column">
    <v-row class="justify-center mb-4">
      <v-col cols="8">
        <v-card class="d-flex flex-column pa-8">
          <v-text-field
            v-model="deck.name" 
            filled
            label="name"
            ref="deckName"
          />
          <v-textarea
            v-model="deck.description" 
            filled 
            auto-grow
            label="description"
          />
          <v-card 
            v-for="(card, i) in deck.cardList" 
            :key="i" 
            :elevation="8"
            outlined
            class="d-flex align-center justify-center px-4 mb-4"
          >
            <div>{{i + 1}}.</div>
            <v-textarea 
              filled 
              auto-grow 
              row-height="8"
              v-model="card.front" 
              class="flex-grow-1 ml-4 pt-6" 
              label="front"
            />
            <v-textarea 
              filled 
              auto-grow 
              row-height="8"
              v-model="card.back" 
              class="flex-grow-1 ml-4 pt-6" 
              label="back"
            />
            <v-icon class=" ml-4" @click="deleteCard(i)">{{ deleteIcon }}</v-icon>
          </v-card>
          <v-btn @click="addCard" block>add card</v-btn>
          <div class="mt-6 mb-4 d-flex flex-row-reverse">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-if="deck._id" color="primary" v-bind="attrs" v-on="on" class="ml-1">save</v-btn>
                <v-btn v-else :disabled="!isValidCardData" color="primary" @click="saveCardSet" class="ml-1">save</v-btn>
              </template>
              <v-card>
                <v-card-title>Save {{ deck.name }}</v-card-title>
                <v-card-text>Save changes to {{ deck.name }}?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="saveCardSet"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-btn @click="studyCards" class="mr-4" color="primary">study</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar :timeout="2000" v-model="showSuccess">{{ snackbarText }}</v-snackbar>
  </v-container>
</template>

<script>
import { cardsUrl, getAuthToken, jsonContentHeader } from '../../config/api'
import { mdiDelete } from '@mdi/js'
export default {
  name: 'CardsEditor',
  data() {
    return {
      showSuccess: false,
      snackbarText: '',
      deleteIcon: mdiDelete,
      dialog: false,
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
    if (!this.deck._id) {
      this.$refs.deckName.focus()
    }
  },
  computed: {
    isValidCardData() {
      return this.validateCardData()
    }
  },
  methods: {
    addCard() {
      this.deck.cardList.push({front: '', back: ''})
    },
    createDeck(reqBody, reqHeaders) {
      if (this.$store.getters.isDemo) return
      this.$http.post(
        cardsUrl,
        reqBody,
        reqHeaders
      ).then(res => {
        this.deck = res.data
        this.$router.replace(`/cards/${this.deck._id}/edit`)
        this.showSuccess = true
        this.snackbarText = 'deck created'
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteCard(i) {
      this.deck.cardList.splice(i, 1)
    },
    saveCardSet() {
      const { _id, token } = this.$store.getters.user
      const reqBody = {
        name: this.deck.name,
        cardList: this.deck.cardList.filter(card => card.front !== '' || card.back !== ''),
        userId: _id,
        _id: this.deck._id
      }
      if (this.deck.description) reqBody.description = this.deck.description
      const reqHeaders = {
        headers: {
          ...jsonContentHeader,
          ...getAuthToken(token)   
        }
      }
      this.deck._id ?
        this.updateDeck(reqBody, reqHeaders, this.deck._id) : 
        this.createDeck(reqBody, reqHeaders)
    },
    studyCards() {
      this.$router.push(`/work/flashcards/cards/${this.deck._id}`)
    },
    updateDeck(reqBody, reqHeaders, id) {
      if (this.$store.getters.isDemo) return
      this.$http.put(
        `${cardsUrl}/${id}`,
        reqBody,
        reqHeaders
      ).then(() => {
        this.showSuccess = true
        this.snackbarText = 'deck updated'
      }).catch((err) => {
        console.log(err)
      }) 
      this.dialog = false
    },
    validateCardData() {
      // TODO: add better validation
      return this.deck.name.length > 0
    }
  }
}
</script>

<style scoped>
</style>