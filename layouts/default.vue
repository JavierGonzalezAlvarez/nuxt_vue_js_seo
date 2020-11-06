<template>
    <!-- indica que dentro hay un componente de vuetify -->
    <v-app>
      <MainNav />
        <v-main>
          <nuxt />
        </v-main>
      <FooterNav />
    </v-app>
</template>

<script>
import MainNav from '@/components/MainNav'
import FooterNav from '@/components/FooterNav'

export default {
  components: {
    MainNav,
    FooterNav
  }
}
</script>
