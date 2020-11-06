<template>
  <div>
    <v-card>
        <v-card-title>
           <span class="headline">
               Por favor, rellena el siguiente formulario ....
            </span>
        </v-card-title>
        <!--  inicio formulario -->
        <v-card-text>
           <v-container>
            <v-form v-model="valid">
                <v-row>
                <!-- campo -->
                    <v-col cols="12">
                        <v-text-field
                            label="Nombre"
                            outlined
                            required
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <!-- campo -->
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            label="Email*"
                            outlined
                            hint="Dirección electrónica"
                            :rules="emailRules"
                            required
                        >
                        </v-text-field>
                    </v-col>
                  </v-row>
                  <!-- campo -->
                  <v-row>
                    <v-col cols="12">
                        <v-textarea
                            label="Solicitar información"
                            outlined
                            hint="Detalla tu consulta, deja un teléfono si lo ves necesario"
                            required
                        >
                        </v-textarea>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
              <small>*Campos obligatorios</small>
            </v-card-text>

            <!-- Botones en el formulario -->
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
             elevation="2"
             x-large
             color="primary"
             text
             @click="enviar"
             :disabled="!valid"
            >
             Enviar
           </v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Contactar',
  data () {
    return {
      valid: false,
      emailRules: [
        v => !!v || 'El email es necesario'
      ]
    }
  },
  methods: {
    enviar () {
      alert('Consulta enviada')
      // logica con backend
    }
  }
}
</script>

<style>
</style>
