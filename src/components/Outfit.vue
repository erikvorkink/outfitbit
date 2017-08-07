<template>
  <section class="outfit">
    <p>
      Shirt: {{ articles[outfit.shirt_id].name }}
      <Thumbnail :article="articles[outfit.shirt_id]"></Thumbnail>
    </p>
    <p>
      Pants: {{ articles[outfit.pant_id].name }}
      <Thumbnail :article="articles[outfit.pant_id]"></Thumbnail>
    </p>
    <p>
      Shoes: {{ articles[outfit.shoe_id].name }}
      <Thumbnail :article="articles[outfit.shoe_id]"></Thumbnail>
    </p>
  </section>
</template>

<script>
import Thumbnail from '@/components/Thumbnail'

export default {
  name: 'outfit',
  props: ['articles', 'outfit'],
  components: {
    Thumbnail
  }
}
</script>

<style scoped>

</style>