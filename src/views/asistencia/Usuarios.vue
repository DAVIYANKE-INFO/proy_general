<template>
<center>
<v-form v-model="valid">
<v-container grid-list-md text-xs-center>
      <v-flex sm12>
            <div class="chartjs-size-monitor">
              <v-card hover="true" tile="true">
                <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;" @click="asigna()">REPORTES USUARIO</h1></v-card-text></center>
              </v-card>
            </div>
      </v-flex>
  <br>
        <center>

<v-toolbar flat color="white">
      <v-toolbar-title>USUARIOS AFCOOP</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar Usuario"
          single-line
          hide-details
        ></v-text-field>


<div class="text-xs-center">
      <v-dialog
        v-model="dialog1"
        width="1200"
      >
         <v-card>
          <v-card-title style="color:white;"
            class="headline green lighten-1"
            primary-title
          >
            <h3>LISTA DE PAPELETAS DE SALIDA</h3>
          </v-card-title>
  
           <v-card-text>
            <center>



              <table
              style="text-align:center;" border="2px"width="100%" class="table table-hover table-striped">
                  <thead style="margin-left:5em;margin-right:5em;">
                      <tr id="barra">
                          <th>CI</th>
                          <th>MOTIVO DE SALIDA</th>
                          <th>LUGAR DE SALIDA</th>
                          <th>FECHA</th>
                          <th>HORA SALIDA</th>
                          <th>HORA RETORNO</th>
                          <th>ENTREGADO A RRHH</th>
                      </tr>
                  </thead>
                  <tbody> 
                      <tr v-for="keep in lista_papel">
                          <td id="dato">{{ keep.cod_nombre}}</td>
                          <td id="dato">{{ keep.motivo }}</td>
                          <td id="dato">{{ keep.lugar }}</td>
                          <td id="dato">{{ keep.fecha}}</td>

                          
                         <!-- <td v-if="13 > 10" width="2px" style="margin: 2px;padding: 2px;">{{ keep.horasalida }}</td>-->
                       
                          <td id="dato">{{ keep.horasalida }}</td>
                          <td id="dato">{{ keep.horaretorno }}</td>
                          <td id="dato" v-if="keep.entregado=='SI'" width="15px" style="font-size:15px;color:blue;margin: 2px;padding: 2px;">{{ keep.entregado }}</td>
                          <td id="dato" width="20px" style="font-size:15px;color:red;margin: 2px;padding: 2px;" v-else>{{ keep.entregado }}</td>

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
              @click="dialog1 = false">
              ACEPTAR
            </v-btn>

  


          </v-card-actions>
        </v-card>
      </v-dialog>









     









    </div>



    </v-toolbar>

    <v-data-table
       :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
      sort-by="paterno"
      :items-per-page="15"
      :footer-props="{ 
      'items-per-page-text': 'Filas por pagina:',
      'items-per-page-all-text': 'Todos'}"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>

        <td class="text-xs-center">{{ props.item.paterno }}</td>
        <td class="text-xs-center">{{ props.item.materno }}</td>
        <td class="text-xs-center">{{ props.item.nombre }}</td>
        <td class="text-xs-center">{{ props.item.usuario }}</td>
         <!--<td id="filtro" class="text-xs-center">{{ props.item.contraseña}}</td>-->
        <td class="text-xs-center">{{ props.item.cargo }}</td>
        <td class="text-xs-center">{{ props.item.departamento }}</td>
        <td class="justify-center layout px-0">

                                    <v-icon 
                                    style="cursor:pointer;"
                                    slot="activator" 
                                    color="blue" 
                                    class="mx-2" 
                                    @click="verItem(props.item)"
                                    >
                                    remove_red_eye
                                    </v-icon>
                                   
        </td>
      </template>
     
    </v-data-table>


                          </center>
  </v-container>
</v-form>
</center>
</template>

<script>
var CARNET_;
var dir;

export default {

  data: vm => ({
    search:'',
         date: new Date().toISOString().substr(0, 10),
            menu1: false,
                  dateFormatted: new Date().toISOString().substr(0, 10),
      modal: false,
      menu2: false,
    observacion:'',
    newhorasal:'',
    newhoraret:'',
    lista:[],
    depto:'',
    lista_papel:[],
      dialog1: false,
      keeps:[],

      headers: [
        {
          text: 'CI',
          align: 'left',
          sortable: false,
          value: 'ci'
        },
        { text: 'PATERNO', value: 'paterno' },
        { text: 'MATERNO', value: 'materno' },
        { text: 'NOMBRE', value: 'nombre' },
        { text: 'USUARIO', value: 'usuario' },
        //{ text: 'CONTRASEÑA', value: 'contraseña', sortable: false },
        { text: 'CARGO', value: 'cargo' },
        { text: 'DEPTO', value: 'departamento' }

      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        paterno:'',
        materno:'',
        nombre:'',
        usuario:''
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
                        color:0,
                        apoy:[]

    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'NUEVO ELEMENTO' : 'EDITAR ELEMENTO'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    /*created () {
      this.initialize()
    },*/
      created: function()
    {
      this.initialize()
            let componento = this;
            var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
            var cont=JSON.parse(localStorage.getItem('usuario')).password;
            console.log("usu-> ",usuar);
            console.log("cont-> ",cont);

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


      
                if((usuar==usuar_dir_daf && cont==cont_dir_daf)||(usuar==usuar_dir_dcf && cont==cont_dir_dcf)||(usuar==usuar_dir_dj && cont==cont_dir_dj)||(usuar==usuar_dir_dge && cont==cont_dir_dge))
                {
                      componento.$store.commit('SET_LAYOUT', 'principalsuperadmin-layout');
                     componento.color=3;

                                         // location.reload(); 

                }   
                else
                {    
                      if((usuar==usuar_tec_rrhh && cont==cont_tec_rrhh)||(usuar==usuar_analis_rrhh && cont==cont_analis_rrhh))
                      {
                            componento.$store.commit('SET_LAYOUT', 'principalsuperusu-layout');
                            componento.color=1;
                                                
                      }
                      else
                      {
                        if((usuar==usuar_apoyo_1 && cont==cont_apoyo_1)||(usuar==usuar_apoyo_2 && cont==cont_apoyo_2)||(usuar==usuar_apoyo_3 && cont==cont_apoyo_3)||(usuar==usuar_apoyo_4 && cont==cont_apoyo_4)||(usuar==usuar_apoyo_5 && cont==cont_apoyo_5))
                        {
                              componento.$store.commit('SET_LAYOUT', 'principalapoyo-layout');
                            componento.color=4;
                        }
                        else
                        {          
                            componento.$store.commit('SET_LAYOUT', 'principala-layout');
                            componento.color=2;
                                               // location.reload(); 
                        }
                      }
                }
    },
    methods: {
      initialize () 
      {
            var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
            var cont=JSON.parse(localStorage.getItem('usuario')).password;
                let componen = this;
                      axios.post(componen.store+'/cons',{
                          usuario:usuar+'',
                          contraseña:cont
                      }).then(function (response) 
                      {
                          console.log("resp-> ", response.data)//resultado = response.data;
                          componen.lista = response.data;
                          dir=componen.lista[0].cargo;
                          console.log("direccion->",dir);

                          if(dir=='DIRECTOR ADMINISTRATIVO FINANCIERO')
                          {
                            componen.depto='DAF';
                          }
                          if(dir=='DIRECTOR DE CONTROL Y FISCALIZACION')
                          {
                              componen.depto='DCF';
                          }
                          if(dir=='DIRECTOR JURIDICO')
                          {
                              componen.depto='DJ';
                          }
                           if(dir=='DIRECTOR GENERAL EJECUTIVO')
                          {
                              componen.depto='DGE';
                          }

                            axios.post(componen.store+'/conusudire',{
                            dire:componen.depto
                            }).then(function (response) 
                            {                        
                                console.log("respuesta salida: ", response.data)//resultado = response.data;
                                componen.desserts = response.data;
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

       verItem (item) 
      {
        this.dialog1 = true
        console.log("ITEM VER -->",item)
        console.log("ITEM CARNET VER-->",item.id)

                     let comparador = this;

                    axios.post(comparador.store+'/consultasal',{

                        carnet:item.id
                    }).then(function (response) 
                    {                        
                        console.log("respuestalista_papel: ", response.data)//resultado = response.data;
                        comparador.lista_papel = response.data;

                        for(var i=0;i<comparador.lista_papel.length;i++)
                        {

                            if((comparador.lista_papel[i].horasalida===null)&&(comparador.lista_papel[i].horaretorno===null))
                            {
                              comparador.lista_papel[i].horasalida="NO DEFINIDO";
                              comparador.lista_papel[i].horaretorno="NO DEFINIDO";
                            }
                            else
                            {
                                if(comparador.lista_papel[i].horaretorno===null)
                                {
                                    comparador.lista_papel[i].horaretorno="NO DEFINIDO";
                                }
                            
                            }
                            console.log("LISTA_PAPEL_gg--> ",comparador.lista_papel[i].motivo);
                        }

                    }).
                    catch(function (error) {
                        console.log("error", error)
                    });
      },   
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      }
    }
   
    }
</script>

<style>
.containero {
    width: 300px;
    font-size:100px;
}
#dato{
  margin:70px;
  padding-top: 0px;
  border:1px solid #BDBDBD;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  text-align: center; 
width:10%;
}
#barra{
  margin:70px;
  border:1px solid #000000;
  background-color: red lighten-2;
  padding-top: 0px;
  color: blue;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  text-align: center; 
width:10%;
}
#filtro{
 white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 4ch;
}
</style> 