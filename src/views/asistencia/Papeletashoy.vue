<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex sm12>
                <div class="chartjs-size-monitor">
                    <v-card hover="true" tile="true">
                    <v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;" @click="asigna()">PAPELETAS DE SALIDA DE HOY</h1></v-card-text>
                    </v-card>
                </div>
            </v-flex>   
        <v-flex sm12>
            <h2 align="center">FECHA: {{today}}</h2>
        </v-flex>   

<v-layout col wrap>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md4>
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          lazy
          full-width
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dated"
              label="Seleccione una fecha..."
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="dated" scrollable locale="es" color="red">
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modal = false">CANCELAR</v-btn>
            <v-btn flat color="primary" @click="papeldefecha()">ACEPTAR</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-flex>
      
      <v-spacer></v-spacer>
    </v-layout>

        <v-flex sm12>




            <v-data-table
            :headers="headers"
                :items="papeletashoy"
                class="elevation-1"
                hide-actions
                >
                <template v-slot:items="props">

                    <td id="dato">{{ props.item.id }}</td>
                    <td id="dato" class="text-xs-center">{{ props.item.cod_nombre }}</td>
                    <td id="dato" class="text-xs-center">{{ props.item.motivo }}</td>
                    <td id="dato" class="text-xs-center">{{ props.item.lugar }}</td>
                    <td id="dato" class="text-xs-center">{{ props.item.fecha }}</td>

                    <td id="dato" v-if="props.item.horasalida=='NO DEFINIDO'">
                              <h3 style="color:red;">NO DEFINIDO</h3>
                              </v-text-field>
                            
                          </td>
                          <td id="dato" v-else>{{ props.item.horasalida }}</td>

                          <td id="dato" v-if="props.item.horaretorno=='NO DEFINIDO'">
                              <h3 style="color:red;">NO DEFINIDO</h3></v-text-field>
                          
                          
                          </td>
                          <td id="dato" v-else>{{ props.item.horaretorno }}</td>

                          
                          <td id="dato" v-if="props.item.entregado=='SI'">{{ props.item.entregado }}</td>
                          <td id="dato" v-else>{{ props.item.entregado }}</td>
    

                </template>
            </v-data-table>




                            </v-flex>
                           
</v-layout>
        </v-container>
</template>

<script>
var f = new Date();
  export default {
      data()
      {
         return{
  //    hoy: new Date().toISOString().substr(0, 10),

       today: new Date().toISOString().substr(0, 10),//f.getFullYear()+"-"+(f.getMonth() +1)+"-"+f.getDate(),
       papeletashoy:[],
           dated: new Date().toISOString().substr(0, 10),
    modal: false,
    headers: [
        {text: 'NRO.',value: 'id' },
        {text: 'CI.',value: 'id' },
        { text: 'MOTIVO', value: 'motivo' },
        { text: 'LUGAR', value: 'lugar' },
        { text: 'FECHA', value: 'fecha' },
        { text: 'HORA SALIDA', value: 'horasalida' },
        { text: 'HORA LLEGADA', value: 'horallegada' },
                { text: 'ENTREGADO', value: 'entregado' }

              ],
                         color:0,
                        apoy:[]

         }
          
    },
    methods:
    {
      verItem (item) 
      {
        this.dialog1 = true
        console.log("ITEM VER -->",item)
        console.log("ITEM CARNET VER-->",item.id)





      },
        papeldefecha()
        {
            let comparador=this;
                console.log("FECHA HOY: ",comparador.today);//resultado = response.data;
                comparador.modal=false;
                 axios.post(comparador.store+'/consultafechasalida',{
                        fechahoy:comparador.dated
                    }).then(function (response) 
                    {                        
                        console.log("PAPELETAS HOY: ", response.data)//resultado = response.data;
                        comparador.papeletashoy = response.data;


                         for(var i=0;i<comparador.papeletashoy.length;i++)
                        {

                            if((comparador.papeletashoy[i].horasalida===null)&&(comparador.papeletashoy[i].horaretorno===null))
                            {
                              comparador.papeletashoy[i].horasalida="NO DEFINIDO";
                              comparador.papeletashoy[i].horaretorno="NO DEFINIDO";
                            }
                            else
                            {
                                if(comparador.papeletashoy[i].horaretorno===null)
                                {
                                    comparador.papeletashoy[i].horaretorno="NO DEFINIDO";
                                }
                            
                            }
                            console.log("LISTA_PAPEL_gg--> ",comparador.papeletashoy[i].motivo);
                        }



                    }).
                        catch(function (error) {
                            console.log("error", error)
                        }); 

        }
     
    },
    created() 
        {

                let comparador=this;
                console.log("FECHA HOY: ",comparador.today);//resultado = response.data;

                 axios.post(comparador.store+'/consultafechasalida',{
                        fechahoy:comparador.today
                    }).then(function (response) 
                    {                        
                        console.log("PAPELETAS HOY: ", response.data)//resultado = response.data;
                        comparador.papeletashoy = response.data;


                         for(var i=0;i<comparador.papeletashoy.length;i++)
                        {

                            if((comparador.papeletashoy[i].horasalida===null)&&(comparador.papeletashoy[i].horaretorno===null))
                            {
                              comparador.papeletashoy[i].horasalida="NO DEFINIDO";
                              comparador.papeletashoy[i].horaretorno="NO DEFINIDO";
                            }
                            else
                            {
                                if(comparador.papeletashoy[i].horaretorno===null)
                                {
                                    comparador.papeletashoy[i].horaretorno="NO DEFINIDO";
                                }
                            
                            }
                            console.log("LISTA_PAPEL_gg--> ",comparador.papeletashoy[i].motivo);
                        }



                    }).
                        catch(function (error) {
                            console.log("error", error)
                        }); 


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


    

        
              
                        var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
            var cont=JSON.parse(localStorage.getItem('usuario')).password;
            console.log("usu-> ",usuar);
            console.log("cont-> ",cont);


                if((usuar==usuar_dir_daf && cont==cont_dir_daf)||(usuar==usuar_dir_dcf && cont==cont_dir_dcf)||(usuar==usuar_dir_dj && cont==cont_dir_dj)||(usuar==usuar_dir_dge && cont==cont_dir_dge))
                {
                      this.$store.commit('SET_LAYOUT', 'principalsuperadmin-layout');
                    this.color=3;

                                         // location.reload(); 

                }   
                else
                {    
                      if((usuar==usuar_tec_rrhh && cont==cont_tec_rrhh)||(usuar==usuar_analis_rrhh && cont==cont_analis_rrhh))
                      {
                            this.$store.commit('SET_LAYOUT', 'principalsuperusu-layout');
                            this.color=1;
                                                
                      }
                      else
                      {
                        if((usuar==usuar_apoyo_1 && cont==cont_apoyo_1)||(usuar==usuar_apoyo_2 && cont==cont_apoyo_2)||(usuar==usuar_apoyo_3 && cont==cont_apoyo_3)||(usuar==usuar_apoyo_4 && cont==cont_apoyo_4)||(usuar==usuar_apoyo_5 && cont==cont_apoyo_5))
                        {
                              this.$store.commit('SET_LAYOUT', 'principalapoyo-layout');
                            this.color=4;
                        }
                        else
                        {          
                            this.$store.commit('SET_LAYOUT', 'principala-layout');
                            this.color=2;
                                               // location.reload(); 
                        }
                      }
                }


                
      }
  }
</script>
<style>
#dato{
  margin:70px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  text-align: center; 
width:10%;
}
</style>