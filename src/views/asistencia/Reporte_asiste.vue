<template>
<center>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>

            <v-flex sm12>
                <div class="chartjs-size-monitor">
                    <v-card hover="true" tile="true">
                    <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;" @click="asigna()">REPORTES USUARIO</h1></v-card-text></center>
                    </v-card>
                </div>
            </v-flex>
        
            <v-flex sm10>
           
             
                <table style="font-family:roboto;text-align:center;font-size:16px;" class="table table-hover table-striped">           
            <tbody align="center"> 
                            <td>
                                <tr style="color:blue;text-align:center;font-family:roboto;font-size:20px;" v-for="kee in lista">  
                                    {{ kee.nombre }} {{ kee.paterno }} {{ kee.materno }}  |    {{kee.id}}  
                                </tr>
                            </td>
                            <td style="color:black;text-align:center;font-family:roboto;font-size:15px;">
                                            {{ picker2 }}
                            </td>
                        </tbody>
                    </table>
                 
            </v-flex>

            <v-flex sm2>
                <v-btn v-if="color==1" style="color:white;" block color="error" @click="created()">ACTUALIZAR</v-btn>
                <v-btn v-else style="color:white;" block color="blue" @click="created()">ACTUALIZAR</v-btn>
            </v-flex>
            </v-layout>
                            </v-container>

            <v-layout row wrap>
      <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
        <v-flex sm12>
              <table v-if="color==1" id="customers1" style="text-align:center;" width="100%" class="table table-hover table-striped">

               <thead>
                                    <tr>
                                        <th>CI</th>
                                        <th>MOTIVO DE SALIDA</th>
                                        <th>LUGAR DE SALIDA</th>
                                        <th>FECHA</th>
                                        <th>HORA SALIDA</th>
                                        <th>HORA RETORNO</th>
                                        <th>ENTREGADO</th>

                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr v-for="keep in keeps">
                                        <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.cod_nombre}}</td>
                                        <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.motivo }}</td>
                                        <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.lugar }}</td>
                                        <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.fecha}}</td>




                           <td v-if="keep.horasalida=='NO DEFINIDO'" width="55px" style="margin: 8px;padding: 8px;">
                              <h3 style="color:red;">NO DEFINIDO</h3>
                              </v-text-field>
                            
                          </td>
                          <td width="20px" style="margin: 2px;padding: 2px;" v-else>{{ keep.horasalida }}</td>

                          <td v-if="keep.horaretorno=='NO DEFINIDO'" width="15px" style="margin: 8px;padding: 8px;">
                              <h3 style="color:red;">NO DEFINIDO</h3></v-text-field>
                          
                          
                          </td>
                          <td width="20px" style="margin: 2px;padding: 2px;" v-else>{{ keep.horaretorno }}</td>
                          <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.entregado }}</td>

                                    





                                    </tr>
                                </tbody>

                          
                            </table>
              

              <table v-else id="customers" style="text-align:center;" width="100%" class="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>CI</th>
                                        <th>MOTIVO DE SALIDA</th>
                                        <th>LUGAR DE SALIDA</th>
                                        <th>FECHA</th>
                                        <th>HORA SALIDA</th>
                                        <th>HORA RETORNO</th>
                                        <th>ENTREGADO</th>

                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr v-for="keep in keeps">
                                        <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.cod_nombre}}</td>
                                        <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.motivo }}</td>
                                        <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.lugar }}</td>
                                        <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.fecha}}</td>




                           <td v-if="keep.horasalida=='NO DEFINIDO'" width="55px" style="margin: 8px;padding: 8px;">
                              <h3 style="color:red;">NO DEFINIDO</h3>
                              </v-text-field>
                            
                          </td>
                          <td width="20px" style="margin: 2px;padding: 2px;" v-else>{{ keep.horasalida }}</td>

                          <td v-if="keep.horaretorno=='NO DEFINIDO'" width="15px" style="margin: 8px;padding: 8px;">
                              <h3 style="color:red;">NO DEFINIDO</h3></v-text-field>
                          
                          
                          </td>
                          <td width="20px" style="margin: 2px;padding: 2px;" v-else>{{ keep.horaretorno }}</td>
                          <td width="2px" style="margin: 2px;padding: 2px;">{{ keep.entregado }}</td>

                                    





                                    </tr>
                                </tbody>

                          
                            </table>
                            </v-flex>
                            </v-layout>
                            </v-container>
            
                           
</v-layout>
        

</center>
</template>

<script>
var zzz;
var CARNET_;

export default {
    data: vm => ({
        newhorasal:'',
    newhoraret:'',
        lista:[],
        keeps:[],
      nombre:JSON.parse(localStorage.getItem('usuario')).password+"",
      codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario,
      password:JSON.parse(localStorage.getItem('usuario')).password,
                        color:0,
                        apoy:[]

    }),

    created: function()
    {
            var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
                    var cont=JSON.parse(localStorage.getItem('usuario')).password;
                    console.log("LOGIN: ", usuar)
                    console.log("CONTRASEÑA: ", cont)

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

                    let componen = this;
                      axios.post(componen.store+'/cons',{
                          usuario:usuar+'',
                          contraseña:cont
                      }).then(function (response) 
                      {
                          console.log("resp-> ", response.data)//resultado = response.data;
                          componen.lista = response.data;
                      }).

                          catch(function (error) 
                          {
                              console.log("error", error)
                          });
           
             let comparador = this;
                      axios.post(comparador.store+'/cons2',{
                          usuario:this.codigousuario,
                          contraseña:this.password
                      }).then(function (response) 
                      {
                           CARNET_= response.data;
                           console.log("CI ORIGEN-> ", response.data)//resultado = response.data;

                    axios.post(comparador.store+'/consultasal',{

                        carnet:CARNET_+""
                    }).then(function (response) 
                    {                        
                        console.log("respuesta salida: ", response.data)//resultado = response.data;
                        comparador.keeps = response.data;


                         for(var i=0;i<comparador.keeps.length;i++)
                        {

                            if((comparador.keeps[i].horasalida===null)&&(comparador.keeps[i].horaretorno===null))
                            {
                              comparador.keeps[i].horasalida="NO DEFINIDO";
                              comparador.keeps[i].horaretorno="NO DEFINIDO";
                            }
                            else
                            {
                                if(comparador.keeps[i].horaretorno===null)
                                {
                                    comparador.keeps[i].horaretorno="NO DEFINIDO";
                                }
                            
                            }
                            console.log("LISTA_PAPEL_gg--> ",comparador.keeps[i].motivo);
                        }



                    }).
                        catch(function (error) {
                            console.log("error", error)
                        });

 }).
                            catch(function (error) 
                          {
                              console.log("error", error)
                          });

     
                if((usuar==usuar_dir_daf && cont==cont_dir_daf)||(usuar==usuar_dir_dcf && cont==cont_dir_dcf)||(usuar==usuar_dir_dj && cont==cont_dir_dj)||(usuar==usuar_dir_dge && cont==cont_dir_dge))
                {
                      comparador.$store.commit('SET_LAYOUT', 'principalsuperadmin-layout');
                   comparador.color=3;

                                         // location.reload(); 

                }   
                else
                {    
                      if((usuar==usuar_tec_rrhh && cont==cont_tec_rrhh)||(usuar==usuar_analis_rrhh && cont==cont_analis_rrhh))
                      {
                            comparador.$store.commit('SET_LAYOUT', 'principalsuperusu-layout');
                            comparador.color=1;
                                                
                      }
                      else
                      {
                         for(var k=0;k<(this.apoy.length);k++)
                          {
                            console.log("--> ",this.apoy[k]);
                              if((usuar==this.apoy[k] && cont==this.apoy[k+1]))
                            {
                                  comparador.$store.commit('SET_LAYOUT', 'principalapoyo-layout');
                                comparador.color=4;
                                sw=1;
                            }
                          }
                      
                        if(sw==0)
                        {          
                            comparador.$store.commit('SET_LAYOUT', 'principala-layout');
                            comparador.color=2;
                                               // location.reload(); 
                        }
                      }
                }
           
    },
    methods:{
       
    }
  }
</script>

<style>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #2A6FDA;
  color: white;
}



#customers1 {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers1 td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers1 tr:nth-child(even){background-color: #f2f2f2;}

#customers1 tr:hover {background-color: #ddd;}

#customers1 th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: red;
  color: white;
}
</style>