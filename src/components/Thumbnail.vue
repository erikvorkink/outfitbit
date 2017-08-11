<template>
  <v-card-media class="Thumbnail" :src="url" v-bind:height="height + 'px'"></v-card-media>
</template>

<script>
import images from '@/services/images'

const height = 150

export default {
  name: 'thumbnail',
  props: ['article'],
  data () {
    return {
      url: images.getUrl(this.article.cloudinary_id, {
        height: height,
        crop: 'fill'
      }),
      height: height
    }
  }
}
</script>

<style scoped>

</style>