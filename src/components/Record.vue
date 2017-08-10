<template>
  <div class="record">
  	<form id="form" class="form-inline" v-on:submit.prevent="createOutfit">

      <h3>Shirt</h3>
      <div v-for="shirt in shirts">
        <Thumbnail :article="shirt" @click.native="selectArticle(shirt)"></Thumbnail>
      </div>

      <h3>Pants</h3>
      <div v-for="pant in pants">
        <Thumbnail :article="pant" @click.native="selectArticle(pant)"></Thumbnail>
      </div>

      <h3>Shoes</h3>
      <div v-for="shoe in shoes">
        <Thumbnail :article="shoe" @click.native="selectArticle(shoe)"></Thumbnail>
      </div>

      <hr>

      <input type="submit" class="btn btn-primary" value="Record Outfit">
    </form>
  </div>
</template>

<script>
import { EventBus } from '@/services/event-bus'
import database from '@/services/database'
import moment from 'moment'
import Thumbnail from '@/components/Thumbnail'

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
    Thumbnail
  },

  methods: {
    createOutfit: () => {
      if (!outfitIsValid(newOutfit)) {
        alert('Invalid outfit')
        return
      }
      database.createOutfit(newOutfit)
      EventBus.$emit('snackbar', 'looking sharp!')
      resetNewOutfit()
      // this.$router.push('/history')
    },

    selectArticle: (article) => {
      newOutfit.selections[article.type] = article.id
      console.log(newOutfit)
    }
  }
}
</script>

<style scoped>

</style>