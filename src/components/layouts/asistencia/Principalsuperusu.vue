<template>
  <v-app>
  
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >

                 <div :style="{ 'background-image' : 'url(' + image + ')' }">
                        <div class="background">
                            <img src="@/images/logos.png" width="300" height="100" alt="">
                        </div>

                          <v-layout row wrap style="text-align:center;">
                            <v-flex xs7>
                            <div>
<center>  
      <table style="text-align:center;">
                            
                                <tbody>
 <tr v-for="ke in lista">
      <a>
          <span style=" color:white;font-family:roboto;">{{ke.nombre}}</span><br>
      </a>
      <a>
          <span style=" color:white;font-family:roboto;">{{ke.paterno}}</span><br>
      </a>
      <a>
          <span style=" color:white;font-family:roboto;">{{ke.materno}}</span><br>
      </a>
      <a>
          <span style=" color:white;Font-family:roboto;">{{ke.id}}</span><br>
      </a>  
</tr>
 </tbody>
                            </table>
                            </center> 
                            </div>
        </v-flex>

      <v-flex
          xs12
          sm5
          md5
          align-center
          justify-center
          layout
          text-xs-center
        >
          <v-avatar
            :tile="false"
            size=100
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
          <v-list-item color="indigo darken-1"   
            :key="items.text"
            @click="$router.push(item.url)"
          >
          
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </template>


<!--


      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          @click="$router.push(item.url)"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>-->
    </v-navigation-drawer>

<v-app-bar
    color="red darken-3"
      app
      clipped-left
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!--<v-btn class="red--text" icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>-->

      <v-btn class="yellow--text" icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>

      <!--<v-btn class="green--text" icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>-->

            <v-icon style="padding-left:60px;" class="blue--text" x-large>alarm</v-icon>


      <!--<img src="@/images/puntual.png" width="200" height="65" alt="">-->
      <v-toolbar-title class="white--text" v-text="title" style="font-size:40px;font-weight: bold;">
      </v-toolbar-title>
      <v-spacer></v-spacer>

<div style="height: 70px; width: 100px; float: left;">
    <div>
      <center>
        <a class="white--text" href="@/images/manual.pdf" download="MANUAL SIDEAS">Manual</a>
      </center>
    </div>

    <div>
      <center>
         <a color="white" href="./images/manual.pdf" download="MANUAL SIDEAS">
         <img href="./images/manual.pdf"  src="@/images/pdf.gif" alt="sideas" width="40" height="40"/></a>
      </center>
    </div>
</div>

      <v-btn class="white--text" icon @click.stop="$router.push('/feriados')">
        <v-icon>today</v-icon>
      </v-btn>
      <v-btn class="white--text" icon @click.stop="$router.push('/prueba')">
        <v-icon>calendar_today</v-icon>
      </v-btn>
        <v-btn class="ma-2" outlined color="white" @click.stop="salir() & $router.push('/asistencia')">
        CERRAR SESIÓN
      </v-btn>
      


      <v-btn class="white--text" icon @click.stop="$router.push('/papeletashoy')">
        <v-icon>speaker_notes</v-icon>
      </v-btn>


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
                        <v-btn slot="activator" v-model="fab" color="red darken-2" dark fab>
                          <v-icon>account_circle</v-icon>
                          <v-icon>close</v-icon>
                        </v-btn>

                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="green" @click="$router.push('/principal')">
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
                        <v-btn slot="activator" fab dark small color="red" @click="$router.push('/copypaste')">
                          <v-icon>file_copy</v-icon>
                        </v-btn>
                        <span>COPIAR/PEGAR</span>
                        </v-tooltip>
  
                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="indigo" @click="$router.push('/papeleta')">
                          <v-icon >label_important</v-icon>
                        </v-btn>
                        <span>SOLICITAR SALIDA</span>
                        </v-tooltip>

                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="lime accent-4" @click="$router.push('/reporte')">
                          <v-icon >calendar_today</v-icon>
                        </v-btn>
                        <span>REPORTES</span>
                        </v-tooltip>

                           <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="cyan" @click="$router.push('/pasante')">
                          <v-icon >group</v-icon>
                        </v-btn>
                        <span>PASANTES</span>
                        </v-tooltip>

                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="orange darken-2" @click="$router.push('/grafico')">
                          <v-icon >assignment</v-icon>
                        </v-btn>
                        <span>REPORTES ADMINISTRADOR</span>
                        </v-tooltip>

                        <v-tooltip top>
                        <v-btn slot="activator" fab dark small color="lime" @click="$router.push('/consultatodo')">
                          <v-icon >assignment_ind</v-icon>
                        </v-btn>
                        <span>CONSULTA USUARIOS</span>
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
    <v-footer color="red darken-3" :fixed="fixed" app >
      <span class="white--text">&copy; SISTEMAS AFCOOP 2020</span>
    </v-footer>
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
    keep2:[],
    lista:[],

    transition: 'slide-x-transition',
      cod_usu:JSON.parse(localStorage.getItem('usuario')),
      image:'./fondonave3.jpg',
      clipped: true,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'search',
        text: 'CONSULTA USUARIOS',
        url:'/consultatodo'
        },
        {
        icon: 'file_copy',
        text: 'COPIAR / PEGAR',
        url:'/copypaste'
        },
        {
        icon: 'assignment',
        text: 'REPORTES ADMINISTRADOR',
        url:'/grafico'
        },
        {
        icon: 'save',
        text: 'ESTADISTICAS ADMINISTRADOR',
        url:'/estadisticasadmin'
        },
        {
        icon: 'home',
        text: 'PRINCIPAL',
        url:'/principal_asiste'
        },
        /*{
        icon: 'assessment',
        title: 'ESTADISTICAS',
        url:'/estadisticas'
        },*/
        {
        icon: 'label_important',
        text: 'SOLICITAR PAPELETA',
        url:'/papeleta'
        },
        {
        icon: 'calendar_today',
        text: 'REPORTES',
        url:'/reporte_asiste'  
        },
        {
        icon: 'group',
        text: 'CONTROL PASANTES',
        url:'/pasante'  
        },
        {
        icon: 'group',
        text: 'CONSULTA USUARIOS',
        url:'/adminusuario'  
        },
        {
        icon: 'search',
        text: 'CALENDARIOS',
        url:'/calendarios'  
        }
        ],
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
                          comp.keep = response.data;
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
