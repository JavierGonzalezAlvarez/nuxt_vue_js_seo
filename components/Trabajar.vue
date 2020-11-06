<template>
  <div>
    <v-card>
        <v-card-title>
           <span class="headline">
               Por favor, envíanos tu CV actualizado en formato pdf, preferentemente,
                y nos pondremos en contacto contigo.
               <br>
               Si eres <strong>analítico, proactivo, trabajas en equipo</strong> y
                te apasiona la tecnología esta es tu empresa.
            </span>
        </v-card-title>
        <!--  aqui empieza el formulario -->
        <v-card-text>
           <v-container>
            <v-form v-model="valid">
                <v-row>
                <!-- campo -->
                    <v-col cols="12">
                        <v-text-field
                            label="Nombre y apellidos"
                            outlined
                            required
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <!-- campo -->
                <v-row>
                    <v-col cols="12">
                      <!-- accept=".pdf/*" -->
                      <v-file-input
                        accept="application/pdf/*"
                        label="Adjuntar CV en formato pdf"
                        show-size
                      ></v-file-input>
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
                            label="Comentarios"
                            outlined
                            hint="Escribe tu carta de presentación o comentarios si lo ves necesario"
                            required
                        >
                        </v-textarea>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
              <small>*campos requeridos</small>
            </v-card-text>

            <!-- Botones en el formulario :disabled="!valid" -->
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
        // v => v.length < 10 || 'body must be less than 10 characters'
      ]
    }
  },
  methods: {
    enviar () {
      alert('Consulta enviada')
      // if (this.editedIndex > -1) {
      //  Object.assign(this.datos_posts[this.editedIndex], this.editedItem)
      // } else {
      //  this.datos_posts.push(this.editedItem)
      // }
      // this.close()
    }
  }
}
</script>

<style>
</style>
