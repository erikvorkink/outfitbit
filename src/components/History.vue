<template>
  <div class="history">
    <h4>History</h4>
    <section v-for="outfit in outfits">
      <h5>{{ outfit.date | moment('dddd, MMMM D YYYY') }}</h5>
      <Outfit :articles="articles" :outfit="outfit"></Outfit>
    </section>
  </div>
</template>

<script>
import database from '@/services/database'
import Outfit from '@/components/Outfit'

const maxOutfits = 90

export default {
  name: 'history',

  firebase: {
    outfits: database.getOutfits(maxOutfits)
  },

  components: {
    Outfit
  },

  data () {
    return {
      articles: database.getArticles()
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