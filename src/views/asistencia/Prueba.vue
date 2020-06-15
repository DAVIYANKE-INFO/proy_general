<template>
<v-container fluid>
 <v-row justify="center" align="center">
      <v-col class="text-center">
        <v-sheet height="1000">
           <v-btn @click="$refs.calendar.prev()" >
          <v-icon
            dark
            left
          >
            keyboard_arrow_left
          </v-icon>
          ANTERIOR
        </v-btn>
        <v-space></v-space>
    
        <v-btn @click="$refs.calendar.next()">
          SIGUIENTE
          <v-icon
            right
            dark
          >
            keyboard_arrow_right
          </v-icon>
        </v-btn>
          <v-calendar
            :now="today"
            :value="today"
                      
            ref="calendar"
            v-model="start"
            :type="type"
            :end="end"
            color="primary"
            locale="es"
            align="center"
          >
          
            <template v-slot:day="{ date }">
              <template v-for="event in eventsMap[date]">
                <v-menu
                  :key="event.hora"
                  v-model="event.open"
                  full-width
                  offset-x
                >
                  <template v-slot:activator="{ on }">
                    <div
                      v-if="!event.time"
                      v-ripple
                      class="myevent"
                      v-on="on"
                      v-html="event.hora"
                    ></div>
                  </template>
                 
                </v-menu>
              </template>
            </template>
            
          </v-calendar>
          <v-flex xs12>
              <v-btn @click="$refs.calendar.prev()">
                <v-icon
                  dark
                  left
                >
                  keyboard_arrow_left
                </v-icon>
                ANTERIOR
              </v-btn>
    
              <v-btn @click="$refs.calendar.next()">
                SIGUIENTE
                <v-icon
                  right
                  dark
                >
                  keyboard_arrow_right
                </v-icon>
              </v-btn>
              </v-flex>
        </v-sheet>
      </v-col>
  <center>
  <!--<div style="text-align: center;width:1200px;">
      <v-flex 
        sx6

      >
        <v-btn @click="$refs.calendar.prev()">
          <v-icon
            dark
            left
          >
            keyboard_arrow_left
          </v-icon>
          ANTERIOR
        </v-btn>
    
        <v-btn @click="$refs.calendar.next()">
          SIGUIENTE
          <v-icon
            right
            dark
          >
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </v-flex>
      </div>-->
      </center>
    </v-row>
    </v-container>
</template>

<script>
var CARNET_;
  export default {
     data: () => ({
       codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario,
      password:JSON.parse(localStorage.getItem('usuario')).password,
type: 'month',
    start: new Date().toISOString().substr(0, 10),
    end: '2019-12-31',
    typeOptions: [
      { text: 'Day', value: 'day' },
      { text: '4 Day', value: '4day' },
      { text: 'Week', value: 'week' },
      { text: 'Month', value: 'month' },
      { text: 'Custom Daily', value: 'custom-daily' },
      { text: 'Custom Weekly', value: 'custom-weekly' }
    ],
    today: new Date().toISOString().substr(0, 10),
    events: [],
    apoy:[],
    color:0
  }),
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap () 
    {
      const map = {}
      this.events.forEach(e => (map[e.fecha] = map[e.fecha] || []).push(e))
      console.log("bas-> ",this.events);
      return map
    }
  },
  methods: {
    open (event) {
      alert(event.title)
    }
  },
    created:function() 
        {
       
                    var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
                    var cont=JSON.parse(localStorage.getItem('usuario')).password;
                    
                    console.log("LOGINO: ", usuar);
                    console.log("CONTRASEÑAO: ", cont);


                    /*PARA DIRECTORES*/
                    var usuar_dir_daf=JSON.parse(localStorage.getItem('directores')).dir_daf_login;
                    var cont_dir_daf=JSON.parse(localStorage.getItem('directores')).dir_daf_password;

                     var usuar_dir_dcf=JSON.parse(localStorage.getItem('directores')).dir_dcf_login;
                    var cont_dir_dcf=JSON.parse(localStorage.getItem('directores')).dir_dcf_password;

                     var usuar_dir_dj=JSON.parse(localStorage.getItem('directores')).dir_dj_login;
                    var cont_dir_dj=JSON.parse(localStorage.getItem('directores')).dir_dj_password;

                    var usuar_dir_dge=JSON.parse(localStorage.getItem('directores')).dir_dge_login;
                    var cont_dir_dge=JSON.parse(localStorage.getItem('directores')).dir_dge_password;
                    /*PARA DIRECTORES*/

                    /*PARA EL ENCARGADO DE RRHH*/
                   var usuar_tec_rrhh=JSON.parse(localStorage.getItem('directores')).tec_rrhh_login;
                    var cont_tec_rrhh=JSON.parse(localStorage.getItem('directores')).tec_rrhh_password;
                    var usuar_analis_rrhh=JSON.parse(localStorage.getItem('directores')).analis_rrhh_login;
                    var cont_analis_rrhh=JSON.parse(localStorage.getItem('directores')).analis_rrhh_password;
                    /*PARA EL ENCARGADO DE RRHH*/

                    /*PARA LOS APOYOS*/
                    console.log("jjj-> ",Object.keys(JSON.parse(localStorage.getItem('apoyos'))).length);
                    console.log("amigo",JSON.parse(localStorage.getItem('apoyos')));
                    
                    var json=JSON.parse(localStorage.getItem('apoyos'));
                    var t=0;
                    for (var clave in json)
                    {
                      // Controlando que json realmente tenga esa propiedad
                      if (json.hasOwnProperty(clave))
                      {
                        // Mostrando en pantalla la clave junto a su valor
                        //  alert("La clave es " + clave+ " y el valor es " + json[clave]);
                       // this.apoy[t]=clave;
                        this.apoy[t]=json[clave];
                        t=t+1;
                      }
                    }

                  

                var sw=0;
                let varia =this;
                
                if((usuar==usuar_dir_daf && cont==cont_dir_daf)||(usuar==usuar_dir_dcf && cont==cont_dir_dcf)||(usuar==usuar_dir_dj && cont==cont_dir_dj)||(usuar==usuar_dir_dge && cont==cont_dir_dge))
                {
                      varia.$store.commit('SET_LAYOUT', 'principalsuperadmin-layout');
                      varia.color=3;

                                         // location.reload(); 

                }   
                else
                {    
                      if((usuar==usuar_tec_rrhh && cont==cont_tec_rrhh)||(usuar==usuar_analis_rrhh && cont==cont_analis_rrhh))
                      {
                            varia.$store.commit('SET_LAYOUT', 'principalsuperusu-layout');
                            varia.color=1;
                                                
                      }
                      else
                      {
                         for(var k=0;k<(this.apoy.length);k++)
                          {
                            console.log("--> ",this.apoy[k]);
                              if((usuar==this.apoy[k] && cont==this.apoy[k+1]))
                            {
                                  varia.$store.commit('SET_LAYOUT', 'principalapoyo-layout');
                                varia.color=4;
                                sw=1;
                            }
                          }
                      
                        if(sw==0)
                        {          
                            varia.$store.commit('SET_LAYOUT', 'principala-layout');
                            varia.color=2;
                                               // location.reload(); 
                        }
                      }
                }


                    axios.post(varia.store+'/cons2',{
                        usuario:varia.codigousuario,
                        contraseña:varia.password
                    }).then(function (response) 
                    {
                          CARNET_= response.data;
                          console.log("CI ORIGEN CALENDAR-> ", response.data);//resultado = response.data;

                          axios.post(varia.store+'/consultacalendario',{
                              codigousu:CARNET_,
                          }).then(function (response) 
                          {
                              console.log("resp CALENDAR-> ", response.data)//resultado = response.data;
                              varia.events = response.data;
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



                    
               
                      axios.post(varia.store+'/cons',{
                          usuario:usuar+'',
                          contraseña:cont
                      }).then(function (response) 
                      {
                          console.log("resp valor-> ", response.data)//resultado = response.data;
                         varia.lista = response.data;
                      }).

                          catch(function (error) 
                          {
                              console.log("error", error)
                          });              


  
        } 
}

</script>

<style>
.myevent {
  text-align:center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 5px;
  color: #B71C1C;
  border: 1px solid #1867c0;
  width: 95%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>