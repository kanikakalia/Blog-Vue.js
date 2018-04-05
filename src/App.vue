<template>
  <v-app id="app">
    <v-navigation-drawer fixed v-model="drawer" right app>
      <v-list dense>
        <app-form class= app-form></app-form>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="cyan" dark fixed app>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid >
        <router-view/>
      </v-container>
    </v-content>
    <v-footer color="cyan" app>
      <span class="white--text px-2">kanika kalia</span>
    </v-footer>
  </v-app>
</template>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>
<script src="https://use.fontawesome.com/73c8e2621d.js"></script>
<script>
/* eslint-disable */
  import AppForm from '@/components/AppForm'
  import axios from 'axios'
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    components: {
      AppForm
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navigation-drawer {
 margin-top: 64px !important
}
.toolbar {
  padding-right: 0px !important;
}
.app-form{
padding: 15px;
}

</style>
