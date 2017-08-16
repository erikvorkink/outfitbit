<template>
  <section class="outfitRecorder">
    <h4>{{ greeting }}</h4>

    <section>
      <h5>Shirt</h5>
      <ClothingArticleChooser
        type="shirt"
        :choices="shirts"
        :selectedId="newOutfit.selections.shirt"
        @choseArticle="onChoseArticle"></ClothingArticleChooser>
    </section>

    <section>
      <h5>Pants</h5>
      <ClothingArticleChooser
        type="pants"
        :choices="pants"
        :selectedId="newOutfit.selections.pants"
        @choseArticle="onChoseArticle"></ClothingArticleChooser>
    </section>

    <section>
      <h5>Shoes</h5>
      <ClothingArticleChooser
        type="shoes"
        :choices="shoes"
        :selectedId="newOutfit.selections.shoes"
        @choseArticle="onChoseArticle"></ClothingArticleChooser>
    </section>

    <v-btn secondary
      v-on:click="createOutfit"
      v-bind:style="{ marginTop: '30px' }">Record Outfit</v-btn>
  </section>
</template>

<script>
import { EventBus } from '@/services/event-bus'
import database from '@/services/database'
import moment from 'moment'
import ClothingArticleChooser from '@/components/ClothingArticleChooser'

let newOutfit = {}
const resetNewOutfit = () => {
  newOutfit = {
    moment: moment(),
    selections: {
      shirt: null,
      pants: null,
      shoes: null
    }
  }
}

const outfitIsValid = (outfit) => {
  return outfit.selections.shirt && outfit.selections.pants && outfit.selections.shoes
}

const greetingMessages = [
  'What\'ll it be today?',
  'Arm yourself for battle',
  'Don\'t forget pants'
]

const successMessages = [
  'Good choice!',
  'Looking sharp!',
  'Muy caliente!'
]

export default {
  name: 'outfitRecorder',

  beforeCreate: () => {
    resetNewOutfit()
  },

  firebase: {
    shirts: database.getArticlesByType('shirt'),
    pants: database.getArticlesByType('pants'),
    shoes: database.getArticlesByType('shoes')
  },

  components: {
    ClothingArticleChooser
  },

  data () {
    return {
      newOutfit: newOutfit,
      greeting: greetingMessages[Math.floor(Math.random() * greetingMessages.length)]
    }
  },

  methods: {
    onChoseArticle: (article) => {
      newOutfit.selections[article.type] = article.id
    },

    createOutfit: function () {
      if (!outfitIsValid(newOutfit)) {
        alert('Please choose an article from each category')
        return
      }

      // Saving happens so quickly that it doesn't feel "real" so pretend to slow down
      const fakeTimeout = 500
      EventBus.$emit('snackbar', {
        text: 'Saving...',
        context: 'secondary',
        timeout: fakeTimeout
      })

      database.createOutfit(newOutfit)

      setTimeout(() => {
        // Real success message
        EventBus.$emit('snackbar', {
          text: successMessages[Math.floor(Math.random() * successMessages.length)],
          context: 'success',
          timeout: 3000
        })

        // Redirect to the history page. This works around the issue
        // of resetNewOutfit not giving us what we want, plus it's
        // more interesting to the user.
        this.$router.push('/history')
        window.scrollTo(0, 0)
      }, fakeTimeout + 300) // buffer so we don't clash with the fake message
    }
  }
}
</script>

<style scoped>
h4 {
  margin-bottom: -15px;
}

h5 {
  margin-top: 40px;
}
</style>