<template>

<v-container grid-list-md text-xs-center>
<v-layout row wrap>

    <v-flex sm12>
      <div class="chartjs-size-monitor">
        <v-card hover="true" tile="true" @click="prueba()">
          <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;">NOTIFICACIONES DE USUARIO</h1></v-card-text></center>
        </v-card><br>
      </div>
    </v-flex>

<v-flex sm10>
      <table style="font-family:roboto;text-align:center;font-size:16px;" class="table table-hover table-striped">           
            <tbody align="center"> 
                            <td>
                                 <tr v-for="keep in lista">
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.id}}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.a}}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.de }}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.motivon}}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.lugarn}}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.fechan }}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.horasalidan}}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.horaretornon}}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.firmasolicitanten}}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.firmajefen }}</td>
                                        <td width="20px" style="margin: 2px;padding: 2px;">{{ keep.firmarrhhn}}</td>

</tr>
                            </td>
                            <td style="color:black;text-align:center;font-family:roboto;font-size:15px;">
                                            {{ picker2 }}
                            </td>
                        </tbody>
                    </table>
</v-flex>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in 5"
      :key="i"
    >
      <template v-slot:header>
        <div>Item</div>
      </template>
      <div class="text-xs-center">
      <v-card>
        <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-card-text>

        <v-btn outline fab color="red">
            <v-icon>check</v-icon>
        </v-btn>

        <v-btn outline fab color="orange">
            <v-icon>close</v-icon>
        </v-btn>
        <v-btn outline fab color="green">
            <v-icon>priority_high</v-icon>
        </v-btn>
      </v-card>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-layout>
</v-container>

</template>

<script>
export default {
     data(){
    return {
        lista:[],
                          color:0,
                        apoy:[]

    }
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
                      axios.post(varia.store+'/cons4',{
                       
                      }).then(function (response) 
                      {
                          console.log("resp-> ", response.data)//resultado = response.data;
                          varia.lista=response.data;
                      }).

    
                            catch(function (error) 
                          {
                              console.log("error", error)
                          });




        }

                              
}
</script>
