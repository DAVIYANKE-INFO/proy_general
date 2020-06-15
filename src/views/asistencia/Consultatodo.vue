<template>
 
        
<center>
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="400">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            <h3 style="text-align:center;color:blue;">{{picker}}</h3>
          </v-card-title>
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
                <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;">CONSULTA USUARIOS</h1></v-card-text></center>
              </v-card>
            </div>
      </v-flex>
  <br>




<v-col cols="10">
          <v-card
          :elevation="8"
        class="ma-1 pa-3"
        outlined

    >
            <v-autocomplete
                v-on:change="consulta12321()"
                v-model="usuarios"
                :items="usuario_material"
                color="blue-grey lighten-2"
                label="Seleccione el usuario"
                item-text="nombre"
                item-value="id"
                :filter="activeFilter"
                filled
                rounded
                dense
                
              >
                <template v-slot:selection="data">  
                    {{ data.item.nombre }}  {{ data.item.paterno }}  {{ data.item.materno }} 
                </template>
                <template v-slot:item="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-item-content v-text="data.item"></v-list-item-content>
                  </template>
                  <template v-else>
                  <!--  <v-list-item-avatar>
                      <img :src="data.item.avatar">
                    </v-list-item-avatar>-->
                    <v-list-item-content>
                      <v-list-item-title v-html="data.item.nombre+' '+data.item.paterno+' '+data.item.materno"></v-list-item-title>
                      <v-list-item-subtitle v-html="data.item.id"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </template>
            </v-autocomplete>
        </v-card>  
        </v-col>

                <v-flex sm4>
                    <div style="align-items: center;">
                        <v-card hover="true">
                        <center>
                                    <table style="text-align:center;font-family:roboto;font-size:16px;" class="table table-hover table-striped">
                                    <center>
                                        <tbody  v-for="kee in lista" style="color:blue;font-family:roboto;font-size:30px;"> 
                                              
                                                <tr v-if="len==1" style="color:blue;font-family:roboto;font-size:15px;">  
                                                <img v-bind:src="'data:image/jpeg;base64,'+keep2.data" width="140" height="140"/> 
                                                   <!-- <img src="@/images_usu/usuario.png" width="140" height="140" alt="daviud">-->
                                                </tr>
                                                <tr style="color:blue;font-family:roboto;font-size:15px;" v-else>  
                                                <!--<img v-bind:src="'data:image/jpeg;base64,'+keep2.data" width="140" height="140"/>-->
                                                <img src="/usuario.png" width="140" height="140" alt="usuario">

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
                                        </center>
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
                                    color="red lighten-0" 
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
var ci;
var f = new Date();

    export default 
    {
        data () {
      return {
           usuarios:[],
      usuario_material:[],
          defaultSelected: {
      id: "",
      nombrecompleto:""
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
                consulta12321()
                {
                    var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
                    var cont=JSON.parse(localStorage.getItem('usuario')).password;
                    //this.lista=[];
                     let componentes = this;
                    // componentes.dialog= true;
                     console.log("zzz: ",this.defaultSelected);

                      axios.post(componentes.store+'/cusu',{
                          co:componentes.usuarios
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
                        // Mostrando en pantalla la clave junto a su valor
                        //  alert("La clave es " + clave+ " y el valor es " + json[clave]);
                       // this.apoy[t]=clave;
                        this.apoy[t]=json[clave];
                        t=t+1;
                      }
                    }

                    var sw=0;




             let comp = this;
                   axios.post(comp.store+'/consultausuarios',{
                }).then(function (response) 
                {
                    console.log("RESPUESTA USUARIO SERVIDOR: ",response); 
                    comp.usuario_material=response.data;
                    console.log("total--> ",response.data.length);
                    for(var m=1;m<response.data.length;m++)
                    {
                      var tt=response.data[m].nombre+" "+response.data[m].paterno+" "+response.data[m].materno +" "+response.data[m].id;
                      varia.itemsusuarios.push(tt);
                    }  
                }).
                catch(function (error) 
                {
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
</style>