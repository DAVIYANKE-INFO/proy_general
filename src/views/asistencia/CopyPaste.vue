
<template id="t">
    <center>
    <!--<div>
        <img src="@/images/afcoop.png" width="600" height="100" alt="">
    </div>-->

    <v-container grid-list-md text-xs-center>
<v-flex sm12>
      <div class="chartjs-size-monitor">
        <v-card hover="true" tile="true">
          <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;">COPIAR Y PEGAR</h1></v-card-text></center>
        </v-card>
      </div>
</v-flex>
</v-container>
        <p>
            <div style="text-align:center;font-size:20px;" @paste="handlePaste" id='editableDiv' contenteditable='true'><img src="" alt="">Ctrl + V / PEGAR</div>
        </p>
        
<div style="width:70%;">
    <v-toolbar flat color="error">
      <v-toolbar-title style="color:black;font-size:25px;">MI ASISTENCIA</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
                  <v-btn color="green" @click="initialize" dark class="mb-2">REINICIAR</v-btn>
                                    <v-btn color="blue" @click="abredialogo" dark class="mb-2">ENVIAR</v-btn>






      <v-dialog v-model="dialog" max-width="500px">
       <!-- <v-btn slot="activator" color="primary" dark class="mb-2">ENVIAR DATOS</v-btn>-->
        <v-card>
          <v-card-title>
            <span class="headline">NOTIFICACION</span>
          </v-card-title>

          <v-card-text>
           ESTA SEGURO QUE QUIERE GUARDAR LOS DATOS!!!
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Candelar</v-btn>
            <v-btn color="blue darken-1" flat @click="enviardatos">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>


    <v-data-table :headers="headers" :items="lista" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">

        <td>{{ props.item.ci }}</td>
        <td>{{ props.item.fecha }}</td>
        <td>{{ props.item.hora }}</td>
 
      </template>
     
    </v-data-table>
  </div>
  </center>
</template>

<script>

  export default {
    data: () => 
    ({
    cliente:'123456',
      dialog: false,
      dialog2: false,
      headers: [{ text: 'CI', align: 'left', sortable: false, value: 'ci'},
                { text: 'Fecha', value: 'fecha' },{ text: 'Hora', value: 'hora' },],
      lista: [],
      editedIndex: -1,
      editedItem: { name: 7066868, name: 7066868},
      defaultItem: { fechas: '2018/13/12', fechas: "2018/13/12"},
      defaultItem: { horas: '8:30:59', horas: "8:30:59"},
      sendData:[],
      logs:[],
      cis:7066868,
      fechas:'2018/01/01',
      horas:'8:31:59',      
      aux:[],
                        color:0,
                        apoy:[]

      
    }),
    
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Elemento' : 'Edit Item'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
   
    methods: {
      reload: function(){
        window.parent.location.reload()
      },
    handlePaste (e)
    {
       // console.log("MOSTRANDO FECHAS: ",e);
        var clipboardData, pastedData;
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        // Get pasted data via clipboard API
        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData('Text');
        var res = pastedData.split("\n");       
        for (var i=0;i<res.length-1;i++)
        {
            var dt=res[i].split("\t");
            var obj={};
            obj.ci=dt[0];
            //lista[i].fecha=data[1];
            var aux=dt[1].split(' ');
            var fechaSeparada=aux[0].split('/');
            console.log("fechaSeparada",fechaSeparada);
            obj.fecha=fechaSeparada[2]+'-'+fechaSeparada[1]+'-'+fechaSeparada[0];
            obj.hora=aux[1];
            //this.desserts.push({ci: lista[i].ci,fechas: lista[i].fechasolo, horas:lista[i].hora});
             this.lista.push(obj);
        }
    },  
    abredialogo()
    {
      this.dialog=true;
    },
    enviardatos()
    {
     // this.dialog=false;
      console.log("lista: ",this.lista);
        let comp = this;
        axios.post(comp.store+'/consultadavid',
        {
            data:JSON.stringify(this.lista)
        }).then(function (response) 
                    {                        
                        console.log("de console->  ", response.data),
                        comp.keeps = response.data;

                          if(comp.keeps == [])
                          {
                            
                              comp.$toastr.error('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                          }
                          else
                          {
                            
                              comp.$toastr.success('SUS DATOS FUERON ENVIADOS EXITOSAMENTE', 'HECHO', {timeOut: 3000});
                          }
                          comp.dialog= false;
                    }).
                        catch(function (error) {
                          comp.dialog= false;
                          comp.$toastr.error('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                            console.log("error", error)
                    });

    }, 
    
      initialize () {
        this.lista = []
      },
      editItem (item) {
        this.editedIndex = this.lista.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.lista.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.lista.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.lista[this.editedIndex], this.editedItem)
        } else {
          this.lista.push(this.editedItem)
        }
        this.close()
      }
    },
        created () {
                this.initialize();
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
                        }
                      }
                }
           }
  }
</script>
