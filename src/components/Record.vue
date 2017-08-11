<template>
  <section class="record">
    <h4>What'll it be today?</h4>

    <section>
      <h5>Shirt</h5>
      <ArticleChoice type="shirt" :choices="shirts" @choseArticle="onChoseArticle"></ArticleChoice>
    </section>

    <section>
      <h5>Pants</h5>
      <ArticleChoice type="pants" :choices="pants" @choseArticle="onChoseArticle"></ArticleChoice>
    </section>

    <section>
      <h5>Shoes</h5>
      <ArticleChoice type="shoes" :choices="shoes" @choseArticle="onChoseArticle"></ArticleChoice>
    </section>

    <v-btn light
      v-on:click="createOutfit"
      v-bind:style="{ marginTop: '30px' }">Record Outfit</v-btn>
  </section>
</template>

<script>
import { EventBus } from '@/services/event-bus'
import database from '@/services/database'
import moment from 'moment'
import ArticleChoice from '@/components/ArticleChoice'

let newOutfit = {}
let resetNewOutfit = () => {
  newOutfit = {
    date: moment().format('YYYY-MM-DD'),
    selections: {
      shirt: null,
      pants: null,
      shoes: null
    }
  }
}

let outfitIsValid = (outfit) => {
  console.log(outfit)
  return outfit.date && outfit.selections.shirt &&
        outfit.selections.pants && outfit.selections.shoes
}

export default {
  name: 'record',

  created: () => {
    resetNewOutfit()
  },

  firebase: {
    shirts: database.getArticlesByType('shirt'),
    pants: database.getArticlesByType('pants'),
    shoes: database.getArticlesByType('shoes')
  },

  components: {
    ArticleChoice
  },

  methods: {
    onChoseArticle: (article) => {
      newOutfit.selections[article.type] = article.id
      console.log(newOutfit)
    },

    createOutfit: () => {
      if (!outfitIsValid(newOutfit)) {
        alert('Invalid outfit')
        return
      }
      database.createOutfit(newOutfit)
      EventBus.$emit('snackbar', 'looking sharp!')
      resetNewOutfit()
      // this.$router.push('/history')
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