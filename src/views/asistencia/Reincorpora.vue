<template>
<center>
  <v-form v-model="valid">
            <v-container grid-list-md text-xs-center>
                                    <v-flex sm12>
                                          <div class="chartjs-size-monitor">
                                            <v-card hover="true" tile="true">
                                              <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;" @click="asigna()">REINCORPORA USUARIOS</h1></v-card-text></center>
                                            </v-card>
                                          </div>
                                    </v-flex>
                      <br>
       
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

                            <v-card-title>
                                <h2>USUARIOS DADOS DE BAJA AFCOOP</h2>
                                <v-spacer></v-spacer>
                                                         <v-btn flat icon color="red lighten-2" @click="recarga()">
          <v-icon
          color="red" 
                                    class="mx-3" 
                                    >autorenew</v-icon>
        </v-btn>

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
                                    <td class="text-xs-center">{{ props.item.estado }}</td>


            <td id="dato" style="width:12%;">
             <v-spacer></v-spacer>
             <v-btn flat icon color="blue lighten-2">
          <v-icon
            style="cursor:pointer;"
            class="mx-2"
            @click="FALSESWITCH(props.item)"
            color="blue" 
          >
            thumb_up
          </v-icon>
          </v-btn>
          <v-btn flat icon color="orange lighten-2">
           <v-icon
            style="cursor:pointer;"
            class="mx-2"
            @click="TRUESWITCH(props.item)"
            color="orange" 
          >
            thumb_down
          </v-icon>
           </v-btn>
        
            <img v-if="props.item.estado=='activo'" src="static/onverde.gif" alt="ON">
            <img src="static/offverde.gif" alt="OFF" v-else>

            <img v-if="props.item.estado=='inactivo'" src="static/onrojo.gif" alt="ON">
            <img src="static/offrojo.gif" alt="OFF" v-else>
            </td>



                                </template>
                
                                </v-data-table>
    </v-card>


<v-dialog
        v-model="dialog5"
        max-width="500"
      >
        <v-card>
          <v-card-title class="headline">NOTIFICACIÓN</v-card-title>
  
          <v-card-text>
          Una vez enviados los datos ya no se podran modificar 
          ¿Esta seguro que quiere enviar los datos y generar la papeleta de salida?.
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  


  
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog5 = false"
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
  </v-container>
</v-form>
</center>
</template>


<script>
export default 
    {  
      data()
      {
         return{
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
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6:false,
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
        //{ text: 'CONTRASEÑA', value: 'contraseña' },
        { text: 'CARGO', value: 'cargo' },
        { text: 'DEPTO', value: 'departamento' },
        { text: 'ESTADO', value: 'estado' }
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
      toggle(index, value, event) {
      console.log(`update ${index} ${value} ${event}`);
      this.$store.commit('update', { index, value })
    },
    recarga()
            {
                location.reload();
            },
    TRUESWITCH(item)
    {
        item.estado='inactivo';
        let compa = this;
          axios.post(compa.store+'/actualizaestado',
          item
          ).then(function (response) 
          { 
              console.log("respuesta ENTRE: ", response.data)//resultado = response.data;
          }).
          catch(function (error) {
              console.log("error", error)
          });;
    },
    FALSESWITCH(item)
    {
        item.estado='activo';
        let compa = this;
          axios.post(compa.store+'/actualizaestado',
          item
          ).then(function (response) 
          { 
              console.log("respuesta ENTRE: ", response.data)//resultado = response.data;
          }).
          catch(function (error) {
              console.log("error", error)
          });
    },
      initialize () 
      {
                let comp = this;
                    axios.post(comp.store+'/consultausuariosconbaja',
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

