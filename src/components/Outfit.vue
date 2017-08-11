<template>
  <v-layout class="outfit">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid v-bind="{ [`grid-list-lg`]: true }">
          <v-layout row wrap>

            <v-flex xs4>
              <v-card flat tile>
                <Article :article="articles[outfit.selections.shirt]"></Article>
              </v-card>
            </v-flex>

            <v-flex xs4>
              <v-card flat tile>
                <Article :article="articles[outfit.selections.pants]"></Article>
              </v-card>
            </v-flex>

            <v-flex xs4>
              <v-card flat tile>
                <Article :article="articles[outfit.selections.shoes]"></Article>
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
  name: 'outfit',
  props: ['articles', 'outfit'],
  components: {
    Article
  }
}
</script>