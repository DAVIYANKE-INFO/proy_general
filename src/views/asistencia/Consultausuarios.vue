<template>
<center>
    <div>
      <v-dialog v-model="dialog" width="400">
        <v-card>
          <center><v-card-title style="text-align:center;" class="headline grey lighten-2" primary-title>
            <h3 style="text-align:center;color:blue;">{{picker}}</h3>
          </v-card-title></center>
          <v-card-text>
            <center>
              <table style="font-family:roboto;text-align:center;font-size:16px;" class="table table-hover table-striped">
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
    <div>
    <center>
    
    <v-layout row wrap>
      <v-flex xs12 >
                        <!--<table style="font-family:roboto;text-align:center;font-size:16px;" class="table table-hover table-striped">
                            
                                <tbody align="center" style="color:blue;text-align:center;font-family:roboto;font-size:30px;"> 
                                <td><v-chip label color="warning" text-color="black"> <v-icon left>label</v-icon>BIENVENID@ : </v-chip>
</td>
                                    <td>
                                        <tr style="color:blue;text-align:center;font-family:roboto;font-size:20px;" v-for="kee in lista">  
                                            {{ kee.nombre}} {{ kee.paterno }} {{ kee.materno }}    |    {{kee.id}}  
                                        </tr>
                                    </td>
                                    <td style="color:black;text-align:center;font-family:roboto;font-size:15px;">
                                                    {{ picker2 }}
                                    </td>
                                </tbody>
                            </table>-->
      </v-flex> 
      <v-flex xs12 sm3>
      </v-flex>
    </v-layout>
    </center>
       <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
             <v-flex sm12>
            <div>
              <v-card hover="true" tile="true">
                <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;">CONSULTA USUARIO</h1></v-card-text></center>
              </v-card>
            </div>
      </v-flex>
  <br>

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

                <v-flex sm4>
                    <div style="align-items: center;">
                        <v-card hover="true">
<center>
                                    <table style="font-family:roboto;font-size:16px;" class="table table-hover table-striped">
                                    
                                        <tbody  v-for="kee in lista" style="color:blue;font-family:roboto;font-size:30px;"> 
                                              
                                                <tr v-if="len==1" style="color:blue;font-family:roboto;font-size:15px;">  
                                                <center><img v-bind:src="'data:image/jpeg;base64,'+keep2.data" width="140" height="140"/></center> 
                                                   <!-- <img src="@/images_usu/usuario.png" width="140" height="140" alt="daviud">-->
                                                </tr>
                                                <tr style="color:blue;font-family:roboto;font-size:15px;" v-else>  
                                                <!--<img v-bind:src="'data:image/jpeg;base64,'+keep2.data" width="140" height="140"/>-->
                                               <center> <img src="/usuario.png" width="140" height="140" alt="usuario"></center>
                                                </tr>

                                                <tr style="color:blue;text-align:center;font-family:roboto;font-size:15px;">  
                                                    NOMBRE : {{ kee.nombre}} 
                                                </tr>
                                                <tr style="color:blue;text-align:center;font-family:roboto;font-size:15px;">  
                                                    PATERNO : {{ kee.paterno}} 
                                                </tr>
                                                <tr style="color:blue;text-align:center;font-family:roboto;font-size:15px;">  
                                                    MATERNO : {{ kee.materno}} 
                                                </tr>
                                                <tr style="color:blue;text-align:center;font-family:roboto;font-size:15px;">  
                                                    CI : {{ kee.id}} 
                                                </tr>
                                                  <tr style="color:blue;text-align:center;font-family:roboto;font-size:15px;">  
                                                    CARGO : {{ kee.cargo}} 
                                                </tr>
                                                <tr style="color:blue;text-align:center;font-family:roboto;font-size:15px;">  
                                                    DEPARTAMENTO : {{ kee.departamento }} 
                                                </tr>
                                                <tr style="color:blue;text-align:center;font-family:roboto;font-size:15px;">  
                                                    FECHA INGRESO : {{ kee.fechaingreso }} 
                                                </tr>
                                                <tr style="color:blue;text-align:center;font-family:roboto;font-size:15px;">  
                                                    ESTADO: {{ kee.estado }} 
                                                </tr>
                                            </td>
                                            <td style="color:black;text-align:center;font-family:roboto;font-size:15px;">
                                                            {{ picker2 }}
                                            </td>
                                            
                                        </tbody>
                                        
                                    </table>
                                    </center>
                        </v-card>
                    </div>
                </v-flex>

                <v-flex sm8>
                    <div>
                        <v-card hover="true">
                            <v-date-picker @change="consulta()" 
                                    reactive:="true" year-icon="mdi-calendar-blank" 
                                    show-current="true"  
                                    width=100%
                                    height=100%
                                    style="font-family:roboto;font-size:20px;width:100%;height:100%;" 
                                    locale="es" v-model="picker" 
                                    color="green darken-1" 
                                     :max="restriccionmax"
                                        min="2018-01-01"
                                    scrollable="true">
                            </v-date-picker>
                        </v-card>
                    </div>
                </v-flex>




            </v-layout>
        </v-container>



 
  </div>     
</center>


</template>
<script>
var CARNET_;
var DEPA;
var ci;
var f = new Date();

    export default 
    {
        data () {
      return {
          defaultSelected: {
      id: "6988076",
      nombrecompleto:"DAVID ALEGRIA QUISPE"
    },
    users: [],
        drawer: true,
        codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario,
      password:JSON.parse(localStorage.getItem('usuario')).password,
        restriccionmax: new Date().toISOString().substr(0, 8)+""+(f.getDate()+30),//2019-01-15
        fecha: '',
        hora:'',
        picker: new Date().toISOString().substr(0, 10),
        picker2: new Date().toISOString().substr(0, 10),
        keeps: [],
        keep: [],
        lista:[],
        AUX:[],
        fullnombre:[],
        ke: [],
        len:'',
        keep2:[],
        dialog:false,
        landscape: false,
        co:'',
                          color:0,
                          apoy:[]

      }
    },

    methods: {    
                consulta123()
                {
                    var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
                    var cont=JSON.parse(localStorage.getItem('usuario')).password;
                    //this.lista=[];
                     let componentes = this;
                    // componentes.dialog= true;
                     console.log("zzz: ",this.defaultSelected);
                      axios.post(componentes.store+'/cusu',{
                          co:componentes.defaultSelected
                      }).then(function (response) 
                      {
                          console.log("respondio-> ", response.data)//resultado = response.data;
                          componentes.lista = response.data;
                          componentes.codigousuario=componentes.lista[0].usuario;
                          componentes.password=componentes.lista[0].contraseña;
                          console.log("usususu: ",componentes.codigousuario);
                          console.log("paspasp: ",componentes.password);
                          axios.post(componentes.store+'/cons3',{
                          usuarios:componentes.codigousuario,
                          contraseñas:componentes.password
                      }).then(function (response) 
                      {
                         // console.log("resp FOTO-> ", response.data)//resultado = response.data;
                          componentes.keep2 = response;
                          componentes.len=response.data;
                          console.log("len--> ", componentes.len);
                          if(componentes.len==="")
                          {
                              componentes.len=0;
                          }
                          else
                          {
                              componentes.len=1;
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


                            axios.post(pri.store+'/cusu',{
                          co:ci
                      }).then(function (response) 
                      {
                          console.log("respondio-> ", response.data)//resultado = response.data;
                          pri.lista = response.data;

                          

                          pri.codigousuario=pri.lista[0].usuario;
                          pri.password=pri.lista[0].contraseña;
                          console.log("usususu: ",pri.codigousuario);
                          console.log("paspasp: ",pri.password);


                          axios.post(pri.store+'/cons3',{
                          usuarios:pri.codigousuario,
                          contraseñas:pri.password
                      }).then(function (response) 
                      {
                         // console.log("resp FOTO-> ", response.data)//resultado = response.data;
                          pri.keep2 = response;
                          pri.len=response.data;
                          console.log("len--> ", pri.len);
                          if(pri.len==="")
                          {
                              pri.len=0;
                          }
                          else
                          {
                              pri.len=1;
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






                          

                      }).

                          catch(function (error) 
                          {
                              console.log("error", error)
                          });
                 
                },  

                consulta() 
                {
                   let compa = this;

                    console.log("carnet: ",this.codigousuario);
                    console.log("carnet: ",this.password);

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
              /*PARA DIRECTORES*/
                    var usuar_dir_daf=JSON.parse(localStorage.getItem('directores')).dir_daf_login;
                    var cont_dir_daf=JSON.parse(localStorage.getItem('directores')).dir_daf_password;

                    console.log("LOGIN DF: ", usuar_dir_daf)
                    console.log("CONTRASEÑA DF: ", usuar_dir_daf)

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

                    var sw=0;


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
                        if((usuar==usuar_apoyo_1 && cont==cont_apoyo_1)||(usuar==usuar_apoyo_2 && cont==cont_apoyo_2)||(usuar==usuar_apoyo_3 && cont==cont_apoyo_3)||(usuar==usuar_apoyo_4 && cont==cont_apoyo_4)||(usuar==usuar_apoyo_5 && cont==cont_apoyo_5))
                        {
                              varia.$store.commit('SET_LAYOUT', 'principalapoyo-layout');
                            varia.color=4;
                        }
                        else
                        {          
                            varia.$store.commit('SET_LAYOUT', 'principala-layout');
                            varia.color=2;
                                               // location.reload(); 
                        }
                      }
                }
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
#filtro{
  filter: blur(5px);
}
</style>