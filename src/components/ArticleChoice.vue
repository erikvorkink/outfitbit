<template>
  <v-layout class="articleChoice">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid v-bind="{ [`grid-list-lg`]: true }">
          <v-layout row wrap>
            <v-flex xs4 v-for="article in choices"
                v-bind:data="article" v-bind:key="article.id">
              <v-card flat tile>
                <Article :article="article" v-on:click.native="chooseArticle(article)"></Article>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Article from '@/components/Article'

export default {
  name: 'articleChoice',
  props: ['choices'],
  components: {
    Article
  },
  methods: {
    chooseArticle: function (article) { // using this style so 'this' works
      // Tell the parent that this article was chosen.
      // The article has the type inside of it so we'll know
      // which category the selection refers to.
      this.$emit('choseArticle', article)
    }
  }
}
</script>