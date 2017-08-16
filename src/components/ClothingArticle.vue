<template>
  <section class="clothingArticle" v-tooltip:top="{ html: article.name }">
    <Thumbnail :article="article"></Thumbnail>
  </section>
</template>

<script>
import Thumbnail from '@/components/Thumbnail'

export default {
  name: 'clothingArticle',
  props: ['article'],
  components: {
    Thumbnail
  }
}
</script>