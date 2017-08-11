<template>
  <section class="article">
    <Thumbnail :article="article"></Thumbnail>
  </section>
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