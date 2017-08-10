<template>
  <p class="outfititem">
    {{ article.type }}: {{ article.name }}
    <Thumbnail :article="article"></Thumbnail>
  </p>
</template>

<script>
import Thumbnail from '@/components/Thumbnail'

export default {
  name: 'article',
  props: ['article'],
  components: {
    Thumbnail
  }
}
</script>

<style scoped>

</style>