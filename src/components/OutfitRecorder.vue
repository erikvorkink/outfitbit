<template>
  <section class="outfitRecorder">
    <h4>{{ getGreeting() }}</h4>

    <section>
      <h5>Shirt</h5>
      <ArticleChooser type="shirt" :choices="shirts" :selectedId="newOutfit.selections.shirt" @choseArticle="onChoseArticle"></ArticleChooser>
    </section>

    <section>
      <h5>Pants</h5>
      <ArticleChooser type="pants" :choices="pants" :selectedId="newOutfit.selections.pants" @choseArticle="onChoseArticle"></ArticleChooser>
    </section>

    <section>
      <h5>Shoes</h5>
      <ArticleChooser type="shoes" :choices="shoes" :selectedId="newOutfit.selections.shoes" @choseArticle="onChoseArticle"></ArticleChooser>
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
import ArticleChooser from '@/components/ArticleChooser'

let newOutfit = {}
let resetNewOutfit = () => {
  newOutfit = {
    moment: moment(),
    selections: {
      shirt: null,
      pants: null,
      shoes: null
    }
  }
}

let outfitIsValid = (outfit) => {
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
    ArticleChooser
  },

  data () {
    return {
      newOutfit: newOutfit // TODO: not resetting the way we need it to
    }
  },

  methods: {
    getGreeting: () => {
      return greetingMessages[Math.floor(Math.random() * greetingMessages.length)]
    },

    onChoseArticle: (article) => {
      newOutfit.selections[article.type] = article.id
    },

    createOutfit: () => {
      if (!outfitIsValid(newOutfit)) {
        alert('Please choose an article from each category')
        return
      }
      database.createOutfit(newOutfit)
      resetNewOutfit()

      let msg = successMessages[Math.floor(Math.random() * successMessages.length)]
      EventBus.$emit('snackbar', msg)
    }
  }
}
</script>

<style scoped>
h5 {
  margin-top: 40px;
}

section:first-of-type h5 {
  margin-top: 0;
}
</style>