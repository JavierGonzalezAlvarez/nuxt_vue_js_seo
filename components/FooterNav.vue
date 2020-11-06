<template>
<div>
  <v-footer
    color="teal accent-4"
    app
    dark
    fixed
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.title"
        :to="link.link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.title }}
      </v-btn>
    </v-row>
  </v-footer>
</div>
</template>

<script>
export default {
  name: 'FooterNav',
  data: () => ({
    links: [
      { title: 'Inicio', link: '/' },
      { title: 'Empresa', link: '/empresa' },
      { title: 'Contacta', link: '/contactar' }
    ]
  })
}
</script>
