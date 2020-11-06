<template>
  <div>
    <v-app-bar
      color="teal accent-4"
      app
      dark
      clipped-left
      fixed
    >
      <v-row
        dense
        nav
      >
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-btn>
        <v-btn
          color="teal accent-4"
        >
          <h2 class="subheading font-weight-regular">
            Nuxt - Vue - Vuetify
          </h2>
        </v-btn>
      </v-row>

      <v-btn>
        <v-icon>mdi-laptop</v-icon>
      </v-btn>
      <v-btn>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Inicio', icon: 'mdi-home', link: '/' },
        { title: 'Contacta', icon: 'mdi-phone', link: '/contactar' }
      ],
      right: null
    }
  }
}
</script>

<style>
</style>
