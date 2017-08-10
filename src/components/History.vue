<template>
  <div class="history">
    <section v-for="outfit in outfits">
      <h4>{{ outfit.date | moment('dddd, MMMM D YYYY') }}</h4>
      <Outfit :articles="articles" :outfit="outfit"></Outfit>
    </section>
  </div>
</template>

<script>
import database from '@/services/database'
import Outfit from '@/components/Outfit'

const maxOutfits = 30

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
h4 {
  margin-top: 40px;
}
section:first-child h4 {
  margin-top: 0;
}
</style>