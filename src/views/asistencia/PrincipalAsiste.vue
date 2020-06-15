<template>
<center>
    <div class="text-xs-center">
     <v-dialog v-model="dialog" width="450">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            <h3 style="text-align:center;color:blue;">{{picker}}</h3>
          </v-card-title>
          <v-card-text>
            <center>
              <table style="font-family:roboto;text-align:center;font-size:16px;" width="100%" class="table table-hover table-striped"
>
                                <thead style="margin-left:5em;margin-right:5em;">
                                    <tr>
                                        <th>CI</th>
                                        <th>FECHA</th>
                                        <th>HORA</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr v-for="keep in keeps">
                                        <td width="10px" style="margin: 10px;padding: 10px;">{{ keep.ci}}</td>
                                        <td style="margin: 10px;padding: 10px;">{{ keep.fecha }}</td>
                                        <td width="10px" style="margin: 10px;padding: 10px;">{{ keep.hora }}</td>
                                    </tr>
                                </tbody>
                            </table>
                          </center>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="dialog = false"
            >
              ACEPTAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

<v-container v-if="color==1">
<v-tabs
      centered
      background-color="red darken-1"
      dark
      icons-and-text
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
  
      <v-tab href="#tab-1">
        Calendario
        <v-icon>calendar_today</v-icon>
      </v-tab>
  
      <v-tab href="#tab-2">
        Mensual
        <v-icon>list_alt</v-icon>
      </v-tab>
  
    
  
      <v-tab-item
        v-for="i in 2"
        :key="i"
        :value="'tab-' + i"
      >

        <div v-if="i==1">
    <center>
    <br>

    <v-layout row wrap>
      <v-flex xs12 >
                        <table style="font-family:roboto;text-align:center;font-size:16px; width:100%;" class="table table-hover table-striped">
                            
                                <tbody align="center" style="color:blue;text-align:center;font-family:roboto;font-size:40px;"> 
                                <td><v-chip label color="warning" text-color="black"> <v-icon left>label</v-icon>BIENVENID@ : </v-chip>
</td>
                                    <td>
                                        <tr style="color:blue;text-align:center;font-family:roboto;font-size:25px;padding-left:40px;" v-for="kee in lista">  
                                         {{ kee.nombre}} {{ kee.paterno }} {{ kee.materno }}    |    {{kee.id}}  
                                        </tr>
                                    </td>
                                    <td style="color:black;text-align:center;font-family:roboto;font-size:15px;">
                                                    {{ picker2 }}
                                    </td>
                                </tbody>
                            </table>
      </v-flex> 
      <v-flex xs12 sm3>
        <v-checkbox v-model="landscape" hide-details label="VISTA HORIZONTAL"></v-checkbox>
      </v-flex>
    </v-layout>
    </center>
    <center>
        <v-container grid-list-md text-xs-center>
          <v-date-picker @change="consulta()" 
                :landscape="landscape" 
                reactive:="true" 
                year-icon="mdi-calendar-blank" 
                show-current="true"  
                width=100%
                style="font-family:roboto;font-size:15px;width:75%;height:100%;" 
                locale="es"
                v-model="picker" 
                :max="restriccionmax"
                min="2018-01-01"
                color="red lighten-0"
                scrollable="true">
          </v-date-picker>


        </v-container>
            </center>
  </div>      



<div v-if="i==2">
  <v-flex>
  


  
        <v-sheet>
          <v-calendar
            :now="today"
            :value="today"
            color="primary"
            height="100%"
            locale="es"
          >
            <template v-slot:day="{ date }">
              <template v-for="event in eventsMap[date]">
                <v-menu
                  :key="event.hora"
                  v-model="event.open"
                  full-width
                  offset-x>
                  <template v-slot:activator="{ on }">
                    <div
                      v-if="!event.time"
                      v-ripple
                      class="my-event-1"
                      v-on="on"
                      v-html="event.hora"
                    ></div>
                  </template>
                </v-menu>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
</div>




      </v-tab-item>
    </v-tabs>
</v-container>



<v-container v-if="color==2">
<v-tabs
      centered
      background-color="light-blue accent-4"
      dark
      icons-and-text
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
  
      <v-tab href="#tab-1">
        Calendario
        <v-icon>calendar_today</v-icon>
      </v-tab>
  
      <v-tab href="#tab-2">
        Mensual
        <v-icon>list_alt</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Semanal
        <v-icon>list_alt</v-icon>
      </v-tab>
  
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >

        <div v-if="i==1">
    <center>
    <br>

    <v-layout row wrap>
      <v-flex xs12 >
                        <table style="font-family:roboto;text-align:center;font-size:16px; width:100%;" class="table table-hover table-striped">
                            
                                <tbody align="center" style="color:blue;text-align:center;font-family:roboto;font-size:40px;"> 
                                <td><v-chip label color="warning" text-color="black"> <v-icon left>label</v-icon>BIENVENID@ : </v-chip>
</td>
                                    <td>
                                        <tr style="color:blue;text-align:center;font-family:roboto;font-size:25px;padding-left:40px;" v-for="kee in lista">  
                                         {{ kee.nombre}} {{ kee.paterno }} {{ kee.materno }}    |    {{kee.id}}  
                                        </tr>
                                    </td>
                                    <td style="color:black;text-align:center;font-family:roboto;font-size:15px;">
                                                    {{ picker2 }}
                                    </td>
                                </tbody>
                            </table>
      </v-flex> 
      <v-flex xs12 sm3>
        <v-checkbox v-model="landscape" hide-details label="VISTA HORIZONTAL"></v-checkbox>
      </v-flex>
    </v-layout>
    </center>
    <center>
  

        <v-container grid-list-md text-xs-center>
          <v-date-picker @change="consulta()" 
                :landscape="landscape" 
                reactive:="true" 
                year-icon="mdi-calendar-blank" 
                show-current="true"  
                width=100%
                style="font-family:roboto;font-size:15px;width:75%;height:100%;" 
                locale="es"
                v-model="picker" 
                :max="restriccionmax"
                min="2018-01-01"
                color="blue lighten-0"
                scrollable="true">
          </v-date-picker>
        </v-container>


            </center>
            
  </div>      



<div v-if="i==2">
  <v-flex>
        <v-sheet>
          <v-calendar
            :now="today"
            :value="today"
          
          >
            <template v-slot:day="{ date }">
              <template v-for="event in eventsMap[date]">
                <v-menu
                  :key="event.hora"
                  v-model="event.open"
                  full-width
                  offset-x>
                  <template v-slot:activator="{ on }">
                    <div
                      v-if="!event.time"
                      v-ripple
                      class="my-event"
                      v-on="on"
                      v-html="event.hora"
                    ></div>
                  </template>
                </v-menu>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
</div>



<v-card v-if="i==3">
        <v-sheet height="1300">
          <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            :events="eventos"
            color="primary"
            type="week"
            locale="es"
            width="100%"
            event-color="blue"
          ></v-calendar>
        </v-sheet>
</v-card>



      </v-tab-item>
    </v-tabs>
</v-container>



<v-container v-if="color==3">
{{ $router.push('/consultausu')}}

</v-container>



<v-container v-if="color==4">
<v-tabs
      centered
      background-color="deep-orange darken-1"
      dark
      icons-and-text
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
  
      <v-tab href="#tab-1">
        Calendario
        <v-icon>calendar_today</v-icon>
      </v-tab>
  
      <v-tab href="#tab-2">
        Mensual
        <v-icon>list_alt</v-icon>
      </v-tab>
  
  
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'tab-' + i"
      >

        <div v-if="i==1">
    <center>
    <br>

    <v-layout row wrap>
      <v-flex xs12 >
                        <table style="font-family:roboto;text-align:center;font-size:16px; width:100%;" class="table table-hover table-striped">
                            
                                <tbody align="center" style="color:blue;text-align:center;font-family:roboto;font-size:40px;"> 
                                <td><v-chip label color="warning" text-color="black"> <v-icon left>label</v-icon>BIENVENID@ : </v-chip>
</td>
                                    <td>
                                        <tr style="color:blue;text-align:center;font-family:roboto;font-size:25px;padding-left:40px;" v-for="kee in lista">  
                                         {{ kee.nombre}} {{ kee.paterno }} {{ kee.materno }}    |    {{kee.id}}  
                                        </tr>
                                    </td>
                                    <td style="color:black;text-align:center;font-family:roboto;font-size:15px;">
                                                    {{ picker2 }}
                                    </td>
                                </tbody>
                            </table>
      </v-flex> 
      <v-flex xs12 sm3>
        <v-checkbox v-model="landscape" hide-details label="VISTA HORIZONTAL"></v-checkbox>
      </v-flex>
    </v-layout>
    </center>
    <center>
        <v-container grid-list-md text-xs-center>
          <v-date-picker @change="consulta()" 
                :landscape="landscape" 
                reactive:="true" 
                year-icon="mdi-calendar-blank" 
                show-current="true"  
                width=100%
                style="font-family:roboto;font-size:15px;width:75%;height:100%;" 
                locale="es"
                v-model="picker" 
                :max="restriccionmax"
                min="2018-01-01"
                color="deep-orange lighten-1"
                scrollable="true">
          </v-date-picker>



        </v-container>
            </center>
            
  </div>      



<div v-if="i==2">
  <v-flex>
        <v-sheet>
          <v-calendar
            :now="today"
            :value="today"
            color="primary"
            locale="es"
          >
            <template v-slot:day="{ date }">
              <template v-for="event in eventsMap[date]">
                <v-menu
                  :key="event.hora"
                  v-model="event.open"
                  full-width
                  offset-x>
                  <template v-slot:activator="{ on }">
                    <div
                      v-if="!event.time"
                      v-ripple
                      class="my-event-1"
                      v-on="on"
                      v-html="event.hora"
                    ></div>
                  </template>
                </v-menu>
              </template>
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
</div>








      </v-tab-item>
    </v-tabs>
</v-container>



    
</center>


</template>
<script>
var f = new Date();
var CARNET_;
    export default 
    {
    data: () => ({
      codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario,
      password:JSON.parse(localStorage.getItem('usuario')).password,
       today: f.getFullYear() + '-' + f.getMonth() + '-' + f.getDate,// '2019-01-08','2019-04-01',//
       
    eventos: [],
    eventoss: [],

    events: [],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    type: 'month',
      start: '2019-01-01',
      end: '2019-01-06',
      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: '4 Day', value: '4day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' },
        { text: 'Custom Daily', value: 'custom-daily' },
        { text: 'Custom Weekly', value: 'custom-weekly' }
      ],

        drawer: true,
        codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario,
      password:JSON.parse(localStorage.getItem('usuario')).password,
        fecha: '',
        hora:'',
        picker: new Date().toISOString().substr(0, 10),
        restriccionmax: new Date().toISOString().substr(0, 8)+""+(f.getDate()+30),//2019-01-15
        picker2: new Date().toISOString().substr(0, 10),
        keeps:[],
        keep: [],
        lista:[],
        listasuperuser:[],
        ke: [],
        dialog:false,
        landscape: false,
                  color:0,
                  apoy:[],
                  apoy2:[]
      }),
   mounted () {
    this.$refs.calendar.scrollToTime('08:00')
  },
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap () {
      const map = {}
      this.events.forEach(e => (map[e.fecha] = map[e.fecha] || []).push(e))
      console.log("MAPASS--> ",map);
      return map
    },
        eventsMaph () {
      const mapa = {}
      this.events.forEach(es => (mapa[es.fecha] = mapa[es.fecha] || []).push(es))
      console.log("MAPA--> ",mapa);
      return mapa
    }
  },
    methods: {
      open (event) {
      alert(event.hora)
    },
                consulta(fecha) 
                {
                   let compa = this;
                      axios.post(compa.store+'/cons2',{
                          usuario:this.codigousuario,
                          contraseña:this.password
                      }).then(function (response) 
                      {
                           CARNET_= response.data;
                           console.log("CI ORIGEN-> ", response.data)//resultado = response.data;


                    compa.dialog= true;
                    axios.post(compa.store+'/consultapost',{
                        codigousu:CARNET_+"",
                        fecha:compa.picker
                    }).then(function (response) 
                    {
                        //console.log("respuesta: ",response)//resultado = response.data;
                        
                        console.log("respuesta: ", response.data)//resultado = response.data;
                        compa.keeps = response.data;

                    }).
                        catch(function (error) {
                            console.log("error", error)
                        });



                         }).
                          catch(function (error) 
                          {
                              console.log("error", error)
                          });
                }
            },
            props: {
                source: String
            },
       

        created: function() 
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
                        this.apoy[t]=json[clave];
                        t=t+1;
                      }
                    }

                console.log("AM-->  ",this.apoy.length);

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
                            console.log(k+"--> ",this.apoy[k]);
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
                            
                            for(var p=0;p<varia.events.length;p++)
                            {
                              var prueba={
                                  name:varia.events[p].hora,
                                  start:varia.events[p].fecha+' '+varia.events[p].hora,//'2020-02-14 09:23:30',
                                  end:varia.events[p].fecha+' '+varia.events[p].hora,//'2020-02-14 09:23:30',
                                };
                            varia.eventos.push(prueba);
                            }


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
                          console.log("resp XXX-> ", response.data)//resultado = response.data;
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
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
.my-event-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 10px;
  background-color: white;
  color: blue;
  border: 1px solid #1867c0;
  width: 95%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;


  &.with-time {
    position: absolute;
    right: 4px;
    margin-right: 20px;
  }
}
/*.v-card--reveal 
{
align-items: center;
bottom: 0;
justify-content: center;
opacity: .7;
position: absolute;
width: 95%;
}

.my-event {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
border-radius: 2px;
background-color: red;
color: white;
border: 1px solid #1867c0;
font-size: 12px;
padding: 3px;
cursor: pointer;
margin-bottom: 1px;
left: 4px;
margin-right: 8px;
position: relative;
width: 95%;
}

.my-event.with-time {
position: absolute;
right: 4px;
margin-right: 0px;
}*/
</style>