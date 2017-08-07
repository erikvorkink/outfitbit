<template>
  <img class="Thumbnail" v-bind:src=url>
</template>

<script>
import images from '@/services/images'

export default {
  name: 'thumbnail',
  props: ['article'],
  data () {
    return {
      url: images.getUrl(this.article.cloudinary_id, {
        width: 150,
        height: 150,
        crop: 'fill'
      })
    }
  }
}
</script>

<style scoped>

</style>