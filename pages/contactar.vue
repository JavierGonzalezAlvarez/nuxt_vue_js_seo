<template>
  <div>
    <v-container>
      <v-col class="mb-5" cols="12">
        <h1 class="headline font-weight-bold mb-3">
          Contacta con nosotros
        </h1>
      </v-col>
      <Contactar />
    </v-container>
  </div>
</template>

<script>

import Contactar from '@/components/Contactar'
export default {
  name: 'Contacta',
  components: {
    Contactar
  }
}
</script>

<style>
</style>
