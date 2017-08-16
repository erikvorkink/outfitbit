<template>
  <v-layout class="clothingArticleChooser">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid>
          <v-layout row wrap>

            <v-flex xs4 v-for="article in choices" :data="article" :key="article.id">
              <v-card hover tile
                :flat="article.id !== selectedId"
                :raised="article.id === selectedId"
                :class="{ articleCard: true,
                          selected: article.id === selectedId,
                          loser: selectedId && article.id !== selectedId }">
                <ClothingArticle :article="article" v-on:click.native="chooseArticle(article)"></ClothingArticle>
              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ClothingArticle from '@/components/ClothingArticle'

export default {
  name: 'clothingArticleChooser',
  props: ['choices', 'selectedId'],
  components: {
    ClothingArticle
  },
  methods: {
    chooseArticle: function (article) {
      // The article has the type inside of it so we'll know
      // which category the selection refers to.
      this.$emit('choseArticle', article)
    }
  }
}
</script>

<style scoped>
.articleCard {
  border: 1px dashed #AAA;
}

.articleCard.selected {
  border: 1px solid #7DBDD8;
}

@keyframes fadeout {
  0%{opacity:1}
  100%{opacity:0.3}
}

.articleCard.loser {
  -webkit-animation: 0.5s ease 0s normal forwards 1 fadeout;
  animation: 0.5s ease 0s normal forwards 1 fadeout;
}
</style>