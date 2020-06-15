<template>
<v-container grid-list-md text-xs-center>
 <v-layout wrap>
       
<v-flex sm4>
<v-select
            v-on:change="consulta123()"
            label="Seleccione CI : "
            item-text="id"
            :items="users"
            v-model="defaultSelected"
            max-height="200"
            dense
            autocomplete
          >
        </v-select>
</v-flex>
<v-flex sm8>
<v-select
            v-on:change="consulta12345()"
            label="Seleccione Nombre : "
            item-text="nombrecompleto"
            :items="fullnombre"
            v-model="defaultSelected"
            max-height="200"
            dense
            autocomplete
          >
        </v-select>
</v-flex>



      <v-flex
        xs12
        class="mb-3"
      >
        <v-sheet height="1000">
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
          <v-calendar
            :now="today"
            :value="today"
                      
            ref="calendar"
            v-model="start"
            :type="type"
            :end="end"
            color="primary"
            locale="es"
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
                      class="my-event"
                      v-on="on"
                      v-html="event.hora"
                    ></div>
                  </template>
                 
                </v-menu>
              </template>
            </template>
          </v-calendar>
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
        </v-sheet>
      </v-flex>
  <center>
  

      </center>
    </v-layout>
    </v-container>
</template>

<script>
var CARNET_;
var DEPA;
var ci;

  export default {
     data: () => ({
       defaultSelected: {
      id: "6988076",
      nombrecompleto:"DAVID ALEGRIA QUISPE"
    },
    fullnombre:[],
    users: [],
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
    color:0,
    len:'',
    keep2:[],
    lista:[],
            AUX:[]

  }),
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap () {
      const map = {}
      this.events.forEach(e => (map[e.fecha] = map[e.fecha] || []).push(e))
      console.log("bas-> ",this.events);
      return map
    }
  },
  methods: {
    open (event) {
      alert(event.title)
    },
     consulta123()
                {
                    var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
                    var cont=JSON.parse(localStorage.getItem('usuario')).password;
                    //this.lista=[];
                     let varia = this;
                    // componentes.dialog= true;
                     console.log("carnet verifica: ",varia.defaultSelected);
                    axios.post(varia.store+'/getusucontra',{
                        ide:varia.defaultSelected
                    }).then(function (response) 
                    {
                      console.log("CONTRA USU-> ", response.data[0].usuario);
                                  axios.post(varia.store+'/cons2',{
                                      usuario:response.data[0].usuario,
                                      contraseña:response.data[0].contraseña
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
                     }).
                    catch(function (error) 
                    {
                        console.log("error", error)
                    }); 
                   
                },    

                consulta12345()
                {
                     let pri = this;
                      console.log("respondio-> ", pri.defaultSelected)//resultado = response.data;
                      axios.post(pri.store+'/desarmanombre',{
                          fullname:pri.defaultSelected
                      }).then(function (response) 
                      {
                          console.log("resp-> ", response.data)//resultado = response.data;
                          pri.AUX = response.data;
                          pri.lista = pri.AUX.cliente;
                          ci=pri.AUX.CARNET;
                          console.log("respUESTA-> ", pri.lista)//resultado = response.data;

                    // componentes.dialog= true;
                     console.log("carnet verifica: ",ci);
                    axios.post(pri.store+'/getusucontra',{
                        ide:ci
                    }).then(function (response) 
                    {
                      console.log("CONTRA USU-> ", response.data[0].usuario);
                                  axios.post(pri.store+'/cons2',{
                                      usuario:response.data[0].usuario,
                                      contraseña:response.data[0].contraseña
                                  }).then(function (response) 
                                  {
                                        CARNET_= response.data;
                                        console.log("CI ORIGEN CALENDAR-> ", response.data);//resultado = response.data;

                                        axios.post(pri.store+'/consultacalendario',{
                                            codigousu:CARNET_,
                                        }).then(function (response) 
                                        {
                                            console.log("resp CALENDAR-> ", response.data)//resultado = response.data;
                                          pri.events = response.data;
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



            let comp = this;

                    axios.post(comp.store+'/obtienedepartamento',{
                        usuariodepa:this.codigousuario,
                          contraseñadepa:this.password
                    }).then(function (response) 
                    {                        
                        DEPA= response.data;
                           console.log("DEPA ORIGEN-> ", response.data)//resultado = response.data;


                    axios.post(comp.store+'/consultausupordepa',{
                        departament:DEPA
                    }).then(function (response) 
                    {                        
                        console.log("respuesta sal: ", response.data)//resultado = response.data;
                        comp.users = response.data;
                        console.log("nombre todo-> ",comp.users[0].nombre+" "+comp.users[0].paterno+" "+comp.users[0].materno);
                        console.log("longitud-> ",comp.users.length);
                        for(var i=0;i<comp.users.length;i++)
                        {
                            var gg={};
                            gg.nombrecompleto=comp.users[i].nombre+' '+comp.users[i].paterno+' '+comp.users[i].materno;
                            comp.fullnombre.push(gg);
                        }
                        console.log("todo-> ",comp.fullnombre);
                       // comp.fullnombre=JSON.stringify(comp.fullnombre);
                        //comp.defaultSelected=comp.users;
                    }).
                    
                        catch(function (error) {
                            console.log("error", error)
                });
   }).
                    
                        catch(function (error) {
                            console.log("error", error)
                });
                   
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


                      }).

                          catch(function (error) 
                          {
                              console.log("error", error)
                          });

                    console.log("usu-> ",usuar);
                    console.log("cont-> ",cont);

                
                  

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
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  color: blue;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>