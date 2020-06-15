<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
                 <div :style="{ 'background-image' : 'url(' + image + ')' }">
                        <div class="background">
                            <img src="@/images/logos.png" width="250" height="100" alt="">
                        </div>

                          <v-layout row wrap style="text-align:center;">
                            <v-flex xs6 >
<center>
      <table style="text-align:center;">

                                <tbody>
 <tr v-for="ke in lista">

      <a>
          <span  class="email black-text" style=" color:white;font-family:roboto;">{{ke.nombre}}</span><br>
      </a>
      <a>
          <span  class="email black-text" style=" color:white;font-family:roboto;">{{ke.paterno}}</span><br>
      </a>
      <a>
          <span  class="email black-text" style=" color:white;font-family:roboto;">{{ke.materno}}</span><br>
      </a>
        <a>
          <span  class="name black-text" style=" color:white;Font-family:roboto;">{{ke.id}}</span><br>
      </a>


</tr>
 </tbody>
                            </table>
                            </center>
        </v-flex>

      <v-flex
          xs6
          sm6
          md6
          align-center
          justify-center
          layout
          text-xs-center
        >
          <v-avatar
            :tile="false"
            size=80
            color="grey lighten-4"
          >
          <!--:src="'../public/defaults/wini.jpg'"
            <img src="@/images/david.jpg" alt="avatar">-->
            <!--<img :src="comp.store+'/'+david.jpg" alt="avatar">
            <img :src="'@/images/david.jpg'" alt="avatar">-->
          <img v-bind:src="'data:image/jpeg;base64,'+keep2.data" width="100" height="100"/>

          </v-avatar>
        </v-flex>
        </v-flex>
      </v-layout>
  </div>






<template v-for="item in items">
        
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>

            <v-flex
              xs6
              class="text-xs-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-flex>
          </v-layout>

     

          <v-list-item color="indigo darken-1"   
            v-else
            :key="items.text"
            @click="$router.push(item.url)"
          >
          
            <v-list-item-action         
            >
              <v-icon>{{ item.icon }}</v-icon>

            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </template>
    </v-navigation-drawer>

 <v-app-bar
    color="blue darken-3"
      app
      clipped-left
    >
    <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <!--<v-btn class="red--text" icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>-->

      <!--<v-btn class="green--text" icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>-->

            <v-icon style="padding-left:60px;" color="warning" x-large>alarm</v-icon>


      <!--<img src="@/images/puntual.png" width="200" height="65" alt="">-->
      <v-toolbar-title class="white--text" v-text="title" style="font-size:40px;font-weight: bold;">
      </v-toolbar-title>
      <v-spacer></v-spacer>

     <div style="height: 70px; width: 100px; float: left;">
    <div>
      <center>
        <a class="white--text" href="./frontend_sigeal/images/manual.pdf" download="MANUAL SIDEAS">Manual</a>
      </center>
    </div>
    <div>
      <center>
        <a color="white" href="./frontend_sigeal/pdfs/manual.pdf" download="MANUAL SIDEAS">
        <img href="./frontend_sigeal/pdfs/manual.pdf"  src="@/images/pdf.gif" alt="sideas" width="40" height="40"/></a>
      </center>
    </div>
</div>
      <v-btn class="ma-2" outlined color="white" @click="dialog5 = true">
          CERRAR SESIÓN
      </v-btn>

 <v-btn class="white--text" icon @click.stop="$router.push('/prueba')">
        <v-icon>calendar_today</v-icon>
      </v-btn>

      <!--<v-btn class="white--text" icon @click.stop="$router.push('/papeletashoy')">
        <v-icon>speaker_notes</v-icon>
      </v-btn>-->


      <v-btn class="white--text" icon @click.stop="$router.push('/configuracion')">
        <v-icon>settings</v-icon>
      </v-btn>
     <!-- <v-btn class="white--text" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>-->
    </v-app-bar>


    <v-content>
<router-view/>
<center>
      <br>
          <v-container grid-list-md>
                <v-layout col wrap>
                  <v-flex xs8 sm6 md1 align-cent text-xs-center>
                      <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition">
                        <v-btn slot="activator" v-model="fab" color="blue darken-2" dark fab>
                          <v-icon>account_circle</v-icon>
                          <v-icon>close</v-icon>
                        </v-btn>

                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="red" @click="$router.push('/principal')">
                          <v-icon>home</v-icon>
                        </v-btn>
                        <span>PRINCIPAL</span>
                        </v-tooltip>

                        <!--<v-tooltip top>
                        <v-btn slot="activator"  fab dark small color="yellow" @click="$router.push('/estadisticas')">
                          <v-icon>assessment</v-icon>
                        </v-btn>
                        <span>ESTADISTICAS</span>
                        </v-tooltip>-->

                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="orange darken-1" @click="$router.push('/papeleta')">
                          <v-icon >label_important</v-icon>
                        </v-btn>
                        <span>SOLICITAR SALIDA</span>
                        </v-tooltip>

                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="green" @click="$router.push('/reporte')">
                          <v-icon >calendar_today</v-icon>
                        </v-btn>
                        <span>REPORTES</span>
                        </v-tooltip>

                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="purple" @click="salir() & $router.push('/')">
                          <v-icon >power_settings_new</v-icon>
                        </v-btn>
                        <span>SALIR</span>
                        </v-tooltip>



                      </v-speed-dial>
                </v-flex>
              </v-layout>
          </v-container>
</center>

    </v-content>



    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)

          </v-list-tile-title>
        </v-list-tile>
                  <!--<img src="@/images/david.jpg" width="300" height="300" alt="">-->

      </v-list>
    </v-navigation-drawer>
    <v-footer color="blue darken-3" :fixed="fixed" app >
      <span class="white--text">&copy; SISTEMAS AFCOOP 2020</span>
    </v-footer>





<v-dialog
        v-model="dialog5"
        max-width="500"
      >
        <v-card>
          <v-card-title class="headline">NOTIFICACIÓN</v-card-title>

          <v-card-text>
          ¿Esta seguro que quiere salir del sistema de asistencias?.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog5 = false"
            >
              CANCELAR
            </v-btn>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click.stop="salir() & $router.push('/asistencia')"
            >
              ACEPTAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-app>
</template>
<script>
export default {
  data () {
    return {

    direction: 'right',
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    keep:[],
    lista:[],
    keep2:[],
    dialog5: false,


    transition: 'slide-x-transition',
           cod_usu:JSON.parse(localStorage.getItem('usuario')),

//       codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario,
     // password:JSON.parse(localStorage.getItem('usuario')).password,
     //  console.log("flash:  ",JSON.parse(cod_usu)),
        image:'./fondonavi.jpg',
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
        icon: 'home',
        title: 'PRINCIPAL',
        url:'/principal_asiste'
        },
        {
        icon: 'label_important',
        title: 'SOLICITAR PAPELETA',
        url:'/papeleta'
        },
        {
        icon: 'assessment',
        title: 'ESTADISTICAS',
        url:'/estadisticas'
        },
        {
        icon: 'calendar_today',
        title: 'REPORTES',
        url:'/reporte_asiste'
        },
        /*{
        icon: 'search',
        title: 'SIRVE',
        url:'/sirve'
        },*/
        {
        icon: 'chrome_reader_mode',
        title: 'CALENDARIO',
        url:'/cale'
        },],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'REGISTRO DE ASISTENCIAS'
    }
  },
  methods: {
    salir()
    {
      localStorage.removeItem("usuario");
      localStorage.removeItem("directores");
      localStorage.removeItem("apoyos");
    },
    vale(){
         let comp = this;
                      axios.post(comp.store+'/cons',{
                          usuario:this.codigousuario,
                          contraseña:this.password
                      }).then(function (response)
                      {
                          console.log("respuesta: ", response.data)//resultado = response.data;
                          comp.keeps = response.data;
                      }).
                          catch(function (error)
                          {
                              console.log("error", error)
                          });
    }
  },

   computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },
    created: function()
    {

            var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
            var cont=JSON.parse(localStorage.getItem('usuario')).password;
           console.log("LOGIN: ", usuar)
                    console.log("CONTRASEÑA: ", cont)


                    let compon = this;
                      axios.post(compon.store+'/cons',{
                          usuario:usuar+'',
                          contraseña:cont
                      }).then(function (response)
                      {
                          console.log("resp ADMIN-> ", response.data)//resultado = response.data;
                          compon.lista = response.data;


                          axios.post(compon.store+'/cons3',{
                          usuarios:usuar+'',
                          contraseñas:cont
                      }).then(function (response)
                      {
                          console.log("resp FOTO-> ", response.data)//resultado = response.data;
                          compon.keep2 = response;

                      }).

                          catch(function (error)
                          {
                              console.log("error", error)
                          });




                      }).

                          catch(function (error)
                          {
                              console.log("error", error)
                          });
    },

  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  },
  name: 'App'
}
</script>

<style>

</style>
