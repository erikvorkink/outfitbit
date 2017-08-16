<template>
  <v-layout class="outfit">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid>
          <v-layout row wrap>

            <v-flex xs4>
              <v-card flat tile>
                <ClothingArticle :article="articles[outfit.selections.shirt]"></ClothingArticle>
              </v-card>
            </v-flex>

            <v-flex xs4>
              <v-card flat tile>
                <ClothingArticle :article="articles[outfit.selections.pants]"></ClothingArticle>
              </v-card>
            </v-flex>

            <v-flex xs4>
              <v-card flat tile>
                <ClothingArticle :article="articles[outfit.selections.shoes]"></ClothingArticle>
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
  name: 'outfit',
  props: ['articles', 'outfit'],
  components: {
    ClothingArticle
  }
}
</script>