<template>
<v-container fluid fill-height style="background-color:#fffacd;">
<v-row align="center" justify="center">
            <v-col align="center" justify="center" cols="3">
                  <v-hover
                    v-slot:default="{ hover }"
                  >
                    <v-card style="border-radius:100%;"
                      :elevation="hover ? 16 : 2"
                      height="200"
                      max-width="200"
                    >
                     <a href="#/almacen">       
                    <img
                    height="100%"
                    width="100%"
                    src="@/images/almacenes.png"
                  ></a><center><h1 style="color:indigo;">ALMACEN</h1></center>
                    </v-card>
                  </v-hover> 
                </v-col>
                <v-col align="center" justify="center" cols="3">
                  <v-hover
                    v-slot:default="{ hover }"
                  >
                    <v-card style="border-radius:100%;"
                      :elevation="hover ? 16 : 2"
                      height="200"
                      width="200"
                    >
                     <a href="#/asistencia">        <img
                    height="100%"
                    width="100%"
                    src="@/images/example.png"
                  ></a><center><h1 style="color:indigo;">ASISTENCIA</h1></center>
                    </v-card>
                  </v-hover> 
                </v-col>
                <v-col align="center" justify="center" cols="3">
                  <v-hover
                    v-slot:default="{ hover }"
                  >
                    <v-card style="border-radius:100%;"
                      :elevation="hover ? 16 : 2"
                      height="200"
                      max-width="200"
                    >
                     <a href="http://localhost:4200">        <img
                    height="100%"
                    width="100%"
                    src="@/images/tasita.png"
                  ></a><center><h1 style="color:indigo;">TASA DE REGULACIÓN</h1></center>
                    </v-card>
                  </v-hover> 
                </v-col>
</v-row>
</v-container>
</template>

