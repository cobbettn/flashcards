<template>
  <v-card class="card notecard ma-2 pa-2">
    <v-row class="text-h6" align="center" justify="center">
      <div class="black--text">{{ cardData.name }}</div>
    </v-row>
    <v-row class="text-h6" align="center" justify="center">
      <v-btn color="white black--text" @click="editDeck">
        <v-icon>{{editIcon}}</v-icon>
      </v-btn>
      <v-btn color="white black--text" @click="studyDeck" class="ml-4">Study</v-btn>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="white black--text" v-bind="attrs" v-on="on" class="ml-4">
            <v-icon>{{deleteIcon}}</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Delete {{ cardData.name }}</v-card-title>
          <v-card-text>Are you sure you want to delete {{ cardData.name }}?</v-card-text>
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
              @click="deleteDeck"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>
<script>
import { cardsUrl, getAuthToken } from '../../config/api'
import { mdiDelete, mdiPencil } from '@mdi/js'
export default {
  name: 'Deck',
  props: [ 'cardData' ],
  data() {
    return {
      dialog: false,
      deleteIcon: mdiDelete,
      editIcon: mdiPencil,
    }
  },
  methods: {
    deleteDeck() {
      if (this.$store.getters.isDemo) return
      const id = this.cardData._id
      const { token } = this.$store.getters.user
      const reqUrl = `${cardsUrl}/${id}`
      const reqHeaders = {
        headers: {
          ...getAuthToken(token)
        }
      }
      this.$http.delete(
        reqUrl,
        reqHeaders
      ).then(() => {
        this.dialog = false
        this.$emit('showSnackbar', `${this.cardData.name} deleted`)
        const remainingCards = this.$store.getters.cards.filter(card => card._id !== id)
        this.$store.dispatch('SET_CARDS', remainingCards)
      }).catch((err) => {
        console.log(err)
      })
    },
    editDeck() {
      this.$router.push(`/work/flashcards/cards/${this.cardData._id}/edit`)
    },
    showDeleteDialog() {
      this.dialog = true
    },
    studyDeck() {
      this.$router.push(`/work/flashcards/cards/${this.cardData._id}`)
    },
  }
}
</script>
<style scoped>
  .card {
    width: 20rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
  }
</style>
