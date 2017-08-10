<template>
  <section class="outfit">
    <Article :article="articles[outfit.selections.shirt]"></Article>
    <Article :article="articles[outfit.selections.pants]"></Article>
    <Article :article="articles[outfit.selections.shoes]"></Article>
  </section>
</template>

<script>
import Article from '@/components/Article'

export default {
  name: 'outfit',
  props: ['articles', 'outfit'],
  components: {
    Article
  }
}
</script>

<style scoped>

</style>