<template>
<center>
<v-form v-model="valid">
<v-container grid-list-md text-xs-center>
      <v-flex sm12>
            <div class="chartjs-size-monitor">
              <v-card hover="true" tile="true">
                <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;" @click="asigna()">REPORTES ADMINISTRADOR</h1></v-card-text></center>
              </v-card>
            </div>
      </v-flex>
  <br>
        <center>
        
<div class="text-xs-center">
      <v-dialog
        v-model="dialog1"
        width="1500"
      >
       <v-card>
          <v-toolbar dark color="red">
            <v-btn icon dark @click="dialog1 = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>LISTA DE PAPELETAS DE SALIDA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click="dialog1 = false">CERRAR</v-btn>
            </v-toolbar-items>
          </v-toolbar>
   
  
           <v-card-text>
            <center>
              <table style="text-align:center;" border="2px"width="100%" class="table table-hover table-striped">
                  <thead>
                      <tr id="barra">
                          <th>CI</th>
                          <th>MOTIVO DE SALIDA</th>
                          <th>LUGAR DE SALIDA</th>
                          <th>FECHA</th>
                          <th>HORA SALIDA</th>
                          <th>HORA RETORNO</th>
                          <th>ULTIMA MARCACION</th>
                          <th>OBSERVACIONES</th>
                          <th>REGISTRAR</th>
                          <th>VALIDAR</th>
                          <th>ENTREGADO</th>
                      </tr>
                  </thead>
                  <tbody> 
                      <tr v-for="keep in lista_papel">
                          <td id="dato" width="20px">{{ keep.cod_nombre}}</td>
                          <td id="dato">{{ keep.motivo }}</td>
                          <td id="dato">{{ keep.lugar }}</td>
                          <td id="dato">{{ keep.fecha}}</td>
                           
              

    <td id="dato" v-if="keep.horasalida=='NO DEFINIDO' || keep.horasalida==null || keep.horasalida=='' || keep.esEditado">
                              <v-text-field
                              error
                              v-model=keep.horasalida
                                label="NO DEFINIDO"
                              text-size:12px
                              @click="activarEditable(keep)"
                              
                              ></v-text-field>
    </td>

    <td id="dato" v-else>{{ keep.horasalida }}</td>

    <td v-if="keep.horaretorno=='NO DEFINIDO' || keep.horaretorno==null || keep.horaretorno=='' || keep.esEditado" id="dato">
                              <v-text-field 
                              error
                              v-model=keep.horaretorno
                                label="NO DEFINIDO"

                              @click="activarEditable(keep)"
                              ></v-text-field>
    </td>

    <td id="dato"  v-else>{{ keep.horaretorno }}</td>
                          <td id="dato">
                        <v-icon
                                  style="cursor:pointer;"

            class="mx-2"
            @click="fondo(keep.cod_nombre,keep.fecha)"
            color="cyan" 
          >
            assignment
          </v-icon>
          </td>
              <td id="dato">

                <v-text-field
                    label="Observaciones : "
                    textarea
                    rows="1"
                    auto-grow
                    counter=1000
                    v-model="keep.observacion"
                ></v-text-field>

              </td>
            
            <td id="dato" style="width:2px;" >
            <v-icon
            style="cursor:pointer;"
            class="mx-2"
            @click="actualizar(keep)"
            color="green" 
          >
            thumb_up
          </v-icon>
          </td>

          <td id="dato" style="width:2px;">
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="FALSESWITCH(keep)"
            >
              CANCELAR
            </v-btn>
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="TRUESWITCH(keep)"
            >
              ACEPTAR
            </v-btn>
            <img v-if="keep.entregado=='SI'" src="static/onverde.gif" alt="ON">
            <img src="static/offverde.gif" alt="OFF" v-else>

            <img v-if="keep.entregado=='NO'" src="static/onrojo.gif" alt="ON">
            <img src="static/offrojo.gif" alt="OFF" v-else>
          </td>
              <td id="dato">{{ keep.entregado}}</td> 
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

<div>
      <v-dialog
        v-model="dialog2"
        width="400"
      >
    
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            ASISTENCIAS
          </v-card-title>
  
          <v-card-text>
            <center>
              <table with="100" style="font-family:roboto;text-align:center;font-size:16px;" class="table table-hover table-striped">
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
              @click="dialog2 = false"
            >
              ACEPTAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>






     <v-dialog
        v-model="dialog3"
        width="500"
      >
    
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            NOTIFICACION
          </v-card-title>
  
          <v-card-text>
            DATOS ACTUALIZADOS EXITOSAMENTE!!!
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              @click="dialog3 = false"
            >
              ACEPTAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
   
<v-card style="padding-right:30px;padding-top:20px;" align=right>


        <v-btn color="error" dark class="mb-2" @click="dialog = true">NUEVO USUARIO</v-btn>
        <v-spacer></v-spacer>
        <v-btn  flat icon color="red lighten-2" @click="$router.push('/reincorpora')">
                                  <v-icon
                                    color="red" 
                                    class="mx-3" 
                                    >person_add</v-icon>
        </v-btn>
        

      <v-dialog v-model="dialog" max-width="800px">
        
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>

                <v-flex xs12 sm6 md4>
                <div>
                  <v-text-field v-if="formTitle=='NUEVO ELEMENTO'" v-model="editedItem.id" label="C.I."></v-text-field>
                  <v-text-field v-model="editedItem.id" label="C.I." disabled v-else></v-text-field>
                </div>            
                </v-flex>

                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.paterno" label="PATERNO"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.materno" label="MATERNO"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.nombre" label="NOMBRE"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.usuario" label="USUARIO"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field id="filtro" v-model="editedItem.contraseña" label="CONTRASEÑA"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md10>
                  <v-text-field v-model="editedItem.cargo" label="CARGO"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md2>
                  <v-text-field v-model="editedItem.departamento" label="DIRECCION"></v-text-field>
                </v-flex>

      <v-flex xs12 lg6>


        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="FECHA INGRESO : "
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker locale="es" v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu1 = false">CANCELAR</v-btn>
            <v-btn text color="primary" @click="$refs.menu1.save(date)">ACEPTAR</v-btn>
          </v-date-picker>
        </v-menu>





       <!-- <v-menu
          ref="menu1"
          :close-on-content-click="false"
          v-model="menu1"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="date"
            label="FECHA INGRESO : "
            hint="AAAA/MM/DD formato"
            persistent-hint
            prepend-icon="event"
            @blur="date = parseDate(dateFormatted)"
          ></v-text-field>
          <v-date-picker locale="es" v-model="date" @input="menu1 = false"></v-date-picker>
        </v-menu>
        <p>FECHA ELEGIDA: <strong>{{ date }}</strong></p>-->




          </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancelar</v-btn>
            <v-btn v-if="formTitle=='NUEVO ELEMENTO'" color="blue darken-1" flat @click="save()">Guardar</v-btn>
            <v-btn color="blue darken-1" flat @click="actualizasave()" v-else>Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      
      <v-card-title>
        <h2>USUARIOS AFCOOP</h2>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
      :expand="false"
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

     <!--   <td class="justify-center layout px-0">
                                    <v-icon 
                                    style="cursor:pointer;"
                                    slot="activator" 
                                    color="blue" 
                                    class="mx-2" 
                                    @click="verItem(props.item)"
                                    >
                                    remove_red_eye
                                    </v-icon>
                                   

          <v-icon
          style="cursor:pointer;"
            class="mx-2"
            @click="editItem(props.item)"
            color="green" 
          >
            edit
          </v-icon>
          <v-icon
          style="cursor:pointer;"
            @click="deleteItem(props.item)"
            color="red" 
            class="mx-2"
          >
            delete
          </v-icon>
        </td>-->



      </template>
         <template v-slot:item.action="{ item }">
         <v-icon 
                                    style="cursor:pointer;"
                                    slot="activator" 
                                    color="blue" 
                                    class="mx-2" 
                                    @click="verItem(item)"
                                    >
                                    remove_red_eye
                                    </v-icon>
        <v-icon
        style="cursor:pointer;"
          class="mx-2"
          @click="editItem(item)"
          color="green" 
        >
          edit
        </v-icon>
        <v-icon
        style="cursor:pointer;"
          @click="deleteItem(item)"
          color="red"
          class="mx-2" 
        >
          delete
        </v-icon>
      </template>

      
    </v-data-table>
    </v-card>


  <br>
  <br>
  <!--<v-btn color="success" @click="dialog5 = true">GENERAR REPORTE</v-btn>-->
<v-btn color="success" @click="mesusu()">GENERAR REPORTE</v-btn>

<v-dialog
        v-model="dialog5"
        max-width="800"
      >
        <v-card>
          <v-card-title color=red class="headline">REPORTES DE PAPELETAS DE SALIDA</v-card-title>
          <v-card-text>
          Por favor seleccione una y solo una de las siguientes opciones...
          </v-card-text>
          <v-card-text>
                <v-layout wrap align-center>
                    <v-flex xs12 sm4 d-flex style="padding-right:10px;">
                        <v-select
                          :items="items1"
                          label="Seleccione mes..."
                          v-model="defaultSelected1"
                          color="red"
                          outline
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 sm4 d-flex style="padding-right:10px;">
                        <v-select
                          :items="items2"
                          label="Seleccione semestre"
                          v-model="defaultSelected2"
                          color="red"
                          outline
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 sm4 d-flex style="padding-right:10px;">
                        <v-select
                          :items="items3"
                          label="Seleccione año"
                          color="red"
                          v-model="defaultSelected3"
                          outline
                        ></v-select>
                    </v-flex>
                </v-layout>
          </v-card-text>

      
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="limpia()"
            >
              CANCELAR
            </v-btn>
  
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="exportPdf()"
            >
              ACEPTAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>




<v-dialog
        v-model="dialog10"
        width="1000"
        height="100"
      >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            REPORTE ALMACEN
          </v-card-title>
  
          <v-card-text>
            	<object style="width:100%;" v-bind:data="'data:application/pdf;base64,'   +variable_reporte" type="application/pdf" width="900" height="400">
              </object>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog10 = false"
            >
              CERRAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog11"
        width="1000"
        height="100"
      >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            REPORTE ALMACEN
          </v-card-title>
  
          <v-card-text>
            	<object style="width:100%;" v-bind:data="'data:application/pdf;base64,'   +variable_mes_usu" type="application/pdf" width="900" height="400">
              </object>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog11 = false"
            >
              CERRAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>



                          </center>
  </v-container>
</v-form>
</center>
</template>

<script>
 var a='';
        var b='';
        var c='';
var hoy = new Date();
var CARNET_;
export default 
    {     
      
      data()
      {
         return{
           items1: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'],
           items2: ['I / '+hoy.getFullYear(),'II / '+hoy.getFullYear()],
           items3: ['2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','2036','2037','2038','2039','2040'],
           search:'',
           nombre_completorrhh:'',
           nombre_jefaso:'',
           listajefeyrrhh:[],
        lists: [
           
        ],
        noticia_titulo_cas:'',
         date: new Date().toISOString().substr(0, 10),
            menu1: false,
                  dateFormatted: new Date().toISOString().substr(0, 10),
      modal: false,
      menu2: false,
    observacion:'',
    newhorasal:'',
    switch1: 0,
    newhoraret:'',
    lista_papel:[],
    papel:[],
        papelitos:[],

      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6:false,
      dialog7:false,
      dialog10:false,
      dialog11:false,
      keeps:[],

      headers: [
        {
          text: 'CI',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'PATERNO', value: 'paterno' },
        { text: 'MATERNO', value: 'materno' },
        { text: 'NOMBRE', value: 'nombre' },
        { text: 'USUARIO', value: 'usuario' },
        //{ text: 'CONTRASEÑA', value: 'contraseña' },
        { text: 'CARGO', value: 'cargo' },
        { text: 'DIRECCIÓN', value: 'departamento' },
        { text: 'ACCIONES', value: 'action', sortable: false },
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
                        apoy:[],
                        defaultSelected1:{},
                        defaultSelected2:{},
                        defaultSelected3:{},
                        aux:{},
                        variable_reporte:'',
                        variable_mes_usu:''

    }
      },
    computed: {
      formTitle(){
        return this.editedIndex === -1 ? 'NUEVO ELEMENTO' : 'EDITAR ELEMENTO'
      },

    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    created () {
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
      mesusu()
      {
          let compa = this;
          axios.get(compa.store+'/reporte_usuario').then(function (response) 
          { 
              console.log("david ", response.data)//resultado = response.data;
              compa.dialog11=true;
              compa.variable_mes_usu=response.data;
          }).
          catch(function (error) 
          {
              console.log("error", error)
          });
      },
      toggle(index, value, event) {
      console.log(`update ${index} ${value} ${event}`);
      this.$store.commit('update', { index, value })
    },
    limpia()
    {
        this.defaultSelected1={};
        this.defaultSelected2={};
        this.defaultSelected3={};
        this.dialog5=false;  
    },

    TRUESWITCH(item)
    {
      this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog6 = false;
        this.switch1=1;
           if(this.switch1==0)
           {
            item.entregado="NO";
           }
           else{
            item.entregado="SI";
           }
        console.log("ITEM entrega-> ",item);
        let compa = this;
          axios.post(compa.store+'/actualizapapeletaentrega',item).then(function (response) 
          { 
              console.log("entre: ", response.data)//resultado = response.data;
              item=[];
          }).
          catch(function (error) {
              console.log("error", error)
          });
    },
    FALSESWITCH(item)
    {
      this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog6 = false;
        this.switch1=0;
            if(this.switch1==0)
           {
            item.entregado="NO";
           }
           else{
            item.entregado="SI";
           }
        console.log("ITEM entrega-> ",item);
        let compa = this;
          axios.post(compa.store+'/actualizapapeletaentrega',item).then(function (response) 
          { 
              console.log("respuesta ENTRE: ", response.data)//resultado = response.data;
                            item=[];

          }).
          catch(function (error) {
              console.log("error", error)
          });
    },
      initialize () 
      {
                let comp = this;
                    axios.post(comp.store+'/consultausuarios',
                    {
                    }).then(function (response) 
                    {                        
                        console.log("respuesta salida: ", response.data)//resultado = response.data;
                        //comp.lists = response.data;
                        comp.desserts = response.data;
                    }).
                    
                        catch(function (error) {
                            console.log("error", error)
                });
      },

      fondo(val,fec)
      {
        this.dialog2 = true
                let comprador = this;
                    console.log("CI---: ", val);
                    console.log("FECHA---: ", fec);
                    axios.post(comprador.store+'/consultasuperusufechas',{
                        codigousu:val,
                        fecha:fec
                    }).then(function (response) 
                    {
                        //console.log("respuesta: ",response)//resultado = response.data;
                        console.log("SUPERUSU: ", response.data)//resultado = response.data;
                        comprador.keeps = response.data;
                        //console.log("keep -> ", comprador.keeps);
                    }).
                        catch(function (error) {
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

      editItem (item) 
      {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        console.log("ITEM-> ",item);



      },

      activarEditable(keep){
        keep.esEditado=true;
      },

   

        actualizar (item) 
      {
       
        //var observaciones=document.getElementById("observaciones").value;
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog3 = true
        console.log("ITEM-> ",item);
        console.log("newhorasal-> ",this.newhorasal);
        console.log("newhoraret-> ",this.newhoraret);
        console.log("observacion-> ",this.observacion);

        let compa = this;
        //compa.dialog= true;
                    /*axios.post(comp.store+'/actualizapapeleta',{
                         id_papeleta:item.id,
                         nuevahora_salida:item.horasalida,
                         nuevahora_retorno:item.horaretorno,
                         nuevaobservacion:item.observacion
                    }).then(function (response) 
              */
                    axios.post(compa.store+'/actualizapapeleta',item).then(function (response) 
                    { 
                        console.log("respuesta: ", response.data)//resultado = response.data;
                    }).
                    catch(function (error) {
                        console.log("error", error)
                    });

      },

      deleteItem (item)
      {
        //confirm('¿ESTA SEGURO QUE QUIERE ELIMINAR EL REGISTRO?') && this.desserts.splice(index, 1)
        //console.log('haber -->  ',confirm.value);
         var txt;
  var r =confirm('¿ESTA SEGURO QUE QUIERE ELIMINAR EL USUARIO?');
  console.log("TXT RRRRR-->",r)
  if (r == true) 
  {
    txt = "OK";
  } 
  else 
  {
    txt = "Cancel";
  }
  if(txt == "OK")
  {
  
  console.log("TXT -->",txt)
        console.log("ITEM -->",item)
        console.log("ITEM CARNET-->",item.id)
             let compra = this;
                    axios.post(compra.store+'/eliminausuarios',{
                      carnet:item.id
                    }).then(function (response) 
                    {                        
                        console.log("respuesta de elimina-> ", response.data)//resultado = response.data;
                        //compra.desserts = response.data;
                        compra.desserts.splice(index, 1)
                    }).
                        catch(function (error) {
                            console.log("error", error)
                });

        const index = this.desserts.indexOf(item)
}

      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      actualizasave()
      {
        console.log("ACTUALIZA -->",this.editedItem.id)
        var guarda_carnet=this.editedItem.id;
        console.log("ACTUALIZA -->",guarda_carnet)
        let comprador = this;
                    axios.post(comprador.store+'/actualizausuarios',{
                    ci_actual:guarda_carnet+"",
                    carnet:comprador.editedItem.id,
                    paterno:comprador.editedItem.paterno,
                    materno:comprador.editedItem.materno,
                    nombre:comprador.editedItem.nombre,
                    usuario:comprador.editedItem.usuario,
                    contraseña:comprador.editedItem.contraseña,
                    cargo:comprador.editedItem.cargo,
                    departamento:comprador.editedItem.departamento,
                    fechaingres:comprador.date
                    }).then(function (response) 
                    {           
                          if(response.data == [])
                          {
                             comprador.$toastr.success('USUARIO ACTUALIZADO EXITOSAMENTE', 'HECHO', {timeOut: 2000});
                              
                          }
                          else
                          {
                            comprador.$toastr.error('REVISE SUS DATOS POR FAVOR', 'ERROR', {timeOut: 2000});
                             
                          }
                        console.log("respuesta de actualiza -> ", response.data)//resultado = response.data;

                    }).
                        catch(function (error) {
                            console.log("error", error)
                            comprador.$toastr.error('REVISE SUS DATOS POR FAVOR', 'ERROR', {timeOut: 2000});
                });
               if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      
      },
      save () 
      {
        
        console.log("ITEM save -->",this.editedItem)
        let compr = this;
                    axios.post(compr.store+'/adicionausuarios',{

              

                     carnet:compr.editedItem.id,
                      paterno:compr.editedItem.paterno,
                      materno:compr.editedItem.materno,
                      nombre:compr.editedItem.nombre,
                      usuario:compr.editedItem.usuario,
                      contraseña:compr.editedItem.contraseña,
                      cargo:compr.editedItem.cargo,
                      departamento:compr.editedItem.departamento,
                      fechaingres:compr.date
                    }).then(function (response) 
                    {                        
                        console.log("respuesta de SAVE-> ", response.data)//resultado = response.data;

                         if(response.data == [])
                          {
                             compr.$toastr.success('USUARIO CREADO EXITOSAMENTE', 'HECHO', {timeOut: 2000});
                              
                          }
                          else
                          {
                            compr.$toastr.error('REVISE SUS DATOS POR FAVOR', 'ERROR', {timeOut: 2000});
                             
                          }

                    }).
                        catch(function (error) {
                            console.log("error", error)
                            compr.$toastr.error('REVISE SUS DATOS POR FAVOR', 'ERROR', {timeOut: 2000});
                });
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
       exportPdf()
      {
        let ahora=this;
        var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
        var cont=JSON.parse(localStorage.getItem('usuario')).password;
        ahora.dialog5=false;
a=ahora.defaultSelected1;
b=ahora.defaultSelected2;
c=ahora.defaultSelected3;
console.log("A: "+a);
console.log("B: "+b);
console.log("C: "+c);

if(Object.keys(ahora.defaultSelected1).length != 0)
{
  b='';
  c='';
}
if(Object.keys(ahora.defaultSelected2).length != 0)
{
  a='';
  c='';
}
if(Object.keys(ahora.defaultSelected3).length != 0)
{
  a='';
  b='';
}
console.log("A: "+a);
console.log("B: "+b);
console.log("C: "+c);
console.log('item mes--> ',ahora.defaultSelected1);
        console.log('item semestre--> ',ahora.defaultSelected2);
        console.log('item año--> ',ahora.defaultSelected3);
axios.get(ahora.store+'/retornapapeletas',{
  
}).then(function (response)
  {
      console.log("RESPUESTA PAPELETAS-> ", response.data)//resultado = response.data;
        ahora.papelitos=response.data;
        ahora.papel=ahora.papelitos.salidas;
        console.log("papel ", ahora.papel);
        ahora.variable_reporte=response.data;
        ahora.dialog10=true;
        }).
        catch(function (error) 
        {
            console.log("error", error)
        });
      }
     }
    }
</script>

<style>
.containero {
    width: 300px;
    font-size:100px;
}
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
  color: white;
}
#dato{
  margin:70px;
  border:1px solid #BDBDBD;
  padding-top: 0px;
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
  filter: blur(5px);
}
</style>

