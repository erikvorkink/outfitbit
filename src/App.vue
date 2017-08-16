<template>
  <v-app id="app" standalone>
    <!-- Drawer -->
    <v-navigation-drawer
      persistent
      v-model="drawer"
      :mini-variant.sync="mini"
      light
      overflow
      absolute
    >
      <v-list class="pa-0">
        <v-list-tile>
          <v-list-tile-content>
            <img id="logo" src="./assets/logo.png" />
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon dark @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0">
        <v-divider></v-divider>

        <!-- Menu items -->
        <v-list-tile v-for="item in items" :key="item.title" router :to="item.href">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed dark>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>outfitbit</v-toolbar-title>
    </v-toolbar>

    <!-- Main section -->
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>

      <!-- Notifications -->
      <v-snackbar
        :timeout="snackbar.timeout"
        :success="snackbar.context === 'success'"
        :info="snackbar.context === 'info'"
        :warning="snackbar.context === 'warning'"
        :error="snackbar.context === 'error'"
        :primary="snackbar.context === 'primary'"
        :secondary="snackbar.context === 'secondary'"
        v-model="snackbar.visible">
        {{ snackbar.text }}
        <v-btn dark flat @click.native="snackbar.visible = false">Close</v-btn>
      </v-snackbar>

    </main>
  </v-app>
</template>

<script>
import { EventBus } from '@/services/event-bus'

// Listen for events that trigger a snackbar-style notification
let snackbar = {
  visible: false,
  context: 'success',
  timeout: 5000,
  text: ''
}
EventBus.$on('snackbar', (options) => {
  snackbar.visible = true
  snackbar.timeout = options.timeout || 5000
  snackbar.context = options.context || 'success'
  snackbar.text = options.text
})

export default {
  name: 'app',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Record Outfit', href: '/record', icon: 'accessibility' },
        { title: 'History', href: '/history', icon: 'history' }
      ],
      mini: false,
      right: null,
      snackbar: snackbar
    }
  }
}
</script>

<style scoped>
#logo {
  height: 30px;
}

.application--light .toolbar {
  background-color: #12506B !important; /* match logo */
}
</style>