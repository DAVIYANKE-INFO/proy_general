<template>
<v-container fluid>
 <v-flex sm12>
        <v-card hover="true" @click="prueba()">
          <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;">CONFIGURACIÓN AVANZADA</h1></v-card-text></center>
        </v-card>
    </v-flex>
<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
    >
    <h3 style="color:red;">DÍAS FERIADOS</h3>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12" sm="7">
        <v-date-picker
          v-model="dates"
          multiple
          locale="es"
          color="red"
          landscape="true"
        ></v-date-picker>
      </v-col>
      <v-col cols="12" sm="5">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates"
              multiple
              chips
              media-chips
              label="Multiple picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
            <v-spacer></v-spacer>
        </v-menu>
      </v-col>
      <v-col class="text-right">
              <v-btn class="ma-2" outlined color="red darken-2" @click="enviadiasferiados(1,'FERIADOS',dates)">ENVIAR</v-btn>
        </v-col>
    </v-row>
    </v-card>

<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
    >
    <h3 style="color:red;">INICIOS DE LOS CORTES DIAS 21 AL 20</h3>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12" sm="7">
        <v-date-picker
          v-model="dates_1"
          multiple
          locale="es"
          color="red"
        ></v-date-picker>
      </v-col>
      <v-col cols="12" sm="5">
        <v-menu
          ref="menu_1"
          v-model="menu_1"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates_1"
              multiple
              chips
              media-chips
              label="Multiple picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
            <v-spacer></v-spacer>
        </v-menu>
      </v-col>
      <v-col class="text-right">
              <v-btn class="ma-2" outlined color="red darken-2" @click="enviadiasferiados(2,'CORTE DE FECHAS',dates_1)">ENVIAR</v-btn>
        </v-col>
    </v-row>
    </v-card>


    <v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
    >
    <h3 style="color:red;">DÍAS CON PERMISOS Y LICENCIAS</h3>
    <v-row align="center" justify="center">



          <v-col cols="8">
          <v-card
        class="ma-1 pa-3"
        outlined

    >
            <v-autocomplete
                v-on:change="consulta123()"
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


<v-col class="text-center" cols="6">
<v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
      <v-col class="text-center" cols="12" sm="12">
        <h4>PERMISOS</h4>
        <v-date-picker
          v-model="dates_permisos"
          multiple
          locale="es"
          color="red"
        ></v-date-picker>
      </v-col>
      
      <v-col class="text-center" cols="12" sm="12">
        <v-menu
          ref="menu_permisos"
          v-model="menu_permisos"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates_permisos"
              multiple
              chips
              media-chips
              label="Multiple picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
            <v-spacer></v-spacer>
        </v-menu>
      </v-col>
     
      <v-col class="text-right">
              <v-btn class="ma-2" outlined color="red darken-2" @click="enviadiaspermisos()">ENVIAR</v-btn>
      </v-col>

</v-card>
</v-col>

<v-col class="text-center" cols="6">
<v-card
        class="ma-1 pa-3"
        outlined
        tile
    >

<v-col class="text-center" cols="12" sm="12">
      <h4>LICENCIAS</h4>
        <v-date-picker
          v-model="dates_licencias"
          multiple
          locale="es"
          color="red"
        ></v-date-picker>
      </v-col>
 <v-col class="text-center" cols="12" sm="12">
        <v-menu
          ref="menu_licencias"
          v-model="menu_licencias"
          :close-on-content-click="false"
          :return-value.sync="dates"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates_licencias"
              multiple
              chips
              media-chips
              label="Multiple picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
            <v-spacer></v-spacer>
        </v-menu>
      </v-col>
        <v-col class="text-right">
              <v-btn class="ma-2" outlined color="red darken-2" @click="enviadiaslicencias()">ENVIAR</v-btn>
        </v-col>
</v-card>
</v-col>



    </v-row>
    </v-card>

<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
    >
    <h3 style="color:red;">VACASIONES</h3>
    <v-row align="center" justify="center">


    <v-col cols="8">
          <v-card
        class="ma-1 pa-3"
        outlined

    >
            <v-autocomplete
                v-on:change="consulta12345()"
                v-model="usuarios_2"
                :items="usuario_material_2"
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
      <v-col class="text-center" cols="12" sm="7">
        <v-date-picker
          v-model="dates_vacaciones"
          multiple
          locale="es"
          color="red"
        ></v-date-picker>
      </v-col>
      <v-col cols="12" sm="5">
        <v-menu
          ref="menu_vacaciones"
          v-model="menu_vacaciones"
          :close-on-content-click="false"
          :return-value.sync="dates_vacaciones"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates_vacaciones"
              multiple
              chips
              media-chips
              label="Multiple picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
            <v-spacer></v-spacer>
        </v-menu>
      </v-col>
      <v-col class="text-right">
              <v-btn class="ma-2" outlined color="red darken-2" @click="enviadiasvacaciones()">ENVIAR</v-btn>
        </v-col>
    </v-row>
    </v-card>






<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
    >
    <h3 style="color:red;">INICIO PRIMEROS Y ULTIMOS DÍAS DEL MES</h3>
    <v-row align="center" justify="center">

      <v-col class="text-center" cols="12" sm="7">
        <v-date-picker
          v-model="dates_inicios_meses"
          multiple
          locale="es"
          color="red"
        ></v-date-picker>
      </v-col>
      <v-col cols="12" sm="5">
        <v-menu
          ref="menu_inicios_meses"
          v-model="menu_inicios_meses"
          :close-on-content-click="false"
          :return-value.sync="dates_inicios_meses"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates_inicios_meses"
              multiple
              chips
              media-chips
              label="Multiple picker in menu"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
            <v-spacer></v-spacer>
        </v-menu>
      </v-col>
      <v-col class="text-right">
              <v-btn class="ma-2" outlined color="red darken-2" @click="envia_dias_inicios_meses(3,'INICIOS',dates_inicios_meses)">ENVIAR</v-btn>
        </v-col>
    </v-row>
    </v-card>





<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
    >
    <h3 style="color:red;">ADMINISTRA DÍAS FECHAS EXCEPCIONALES</h3>
    <v-row align="center" justify="center">
    <v-col cols="10">
          <v-card
        class="ma-1 pa-3"
        outlined
    >
            <v-autocomplete
              v-model="nombreusu"
              :items="itemsusuarios"
              outlined
              dense
              chips
              small-chips
              label="Por favor seleccione sus usuarios..."
              multiple
            >
            </v-autocomplete>
        </v-card>  
        </v-col>
      <v-col class="text-center" cols="12" sm="5">
        <v-date-picker
          v-model="dates_excepcionales"
          multiple
          locale="es"
          color="red"
        ></v-date-picker>
      </v-col>
      <v-col class="text-center" cols="12" sm="7">
        <v-menu
          ref="menu_excepcionales"
          v-model="menu_excepcionales"
          :close-on-content-click="false"
          :return-value.sync="dates_excepcionales"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates_excepcionales"
              multiple
              chips
              media-chips
              label="Fechas seleccionadas"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
            <v-spacer></v-spacer>
        </v-menu>
        <v-time-picker 
         v-model="e4" 
         color="green lighten-1"
         :landscape="$vuetify.breakpoint.smAndUp"
       ></v-time-picker>
      </v-col>
      

      <v-col class="text-right">
              <v-btn class="ma-2" outlined color="red darken-2" @click="enviadiasexcepcionales(value)">ENVIAR</v-btn>
        </v-col>
    </v-row>
    </v-card>
<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
    >
    <h3 style="color:red;">DIAS CON HORARIO CONTINUO</h3>
    <v-row align="center" justify="center">
    
      <v-col class="text-center" cols="12" sm="5">
        <v-date-picker
          v-model="dates_continuos"
          multiple
          locale="es"
          color="red"
        ></v-date-picker>
      </v-col>
      <v-col class="text-center" cols="12" sm="7">
        <v-menu
          ref="menu_continuos"
          v-model="menu_continuos"
          :close-on-content-click="false"
          :return-value.sync="dates_continuos"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates_continuos"
              multiple
              chips
              media-chips
              label="Fechas seleccionadas"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
            <v-spacer></v-spacer>
        </v-menu>
      </v-col>
      

      <v-col class="text-right">
              <v-btn class="ma-2" outlined color="red darken-2" @click="envia_dias_continuos(4,'CONTINUOS',dates_continuos)">ENVIAR</v-btn>
        </v-col>
    </v-row>
    </v-card>

</v-container>
</template>

<script>
  export default {
    data: () => ({

      usuarios:[],
      usuarios_2:[],
      usuario_material:[],
      usuario_material_2:[],
      e4: null,
      nombreusu:null,
      itemsusuarios: [],
      value: null,


        codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario,
        password:JSON.parse(localStorage.getItem('usuario')).password,
        dates: ['2020-01-01','2020-01-22'],
        menu: false,
        dates_1: ['2020-01-21','2020-02-20'],
        menu_1: false,
        dates_permisos: [],
        menu_permisos: false,
        dates_licencias: [],
        menu_licencias: false,
        dates_vacaciones: [],
        menu_vacaciones: false,
        dates_excepcionales: [],
        menu_excepcionales: false,

        dates_continuos: [],
        menu_continuos: false,

        dates_inicios_meses: [],
        menu_inicios_meses: false,
        
        
    apoy:[],
    color:0
    }),
    methods:
    {
      envia_dias_continuos(idem,item,fechitas)
      {
        let comp=this;
          axios.post(comp.store+'/dias_feriados',
                        { 
                            identico:idem,
                            nombre:item,
                            diaferia:fechitas+"",
                            horas:"SIN HORAS",
          }).then(function (response) 
          {
            comp.$toastr.info('DATOS ENVIADOS EXITOSAMENTE', 'HECHO', {timeOut: 3000});
            console.log("respuesta ",response.data);
          }).
          catch(function (error) 
          {
              console.log("error", error)
              comp.$toastr.info('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
          });
      },

      envia_dias_inicios_meses(idem,item,fechitas)
      {
        console.log("usuario--> ",this.dates_inicios_meses);
        let comp=this;
          axios.post(comp.store+'/dias_feriados',
                        { 
                            identico:idem,
                            nombre:item,
                            diaferia:fechitas+"",
                            horas:"SIN HORAS",
          }).then(function (response) 
          {
            comp.$toastr.info('DATOS ENVIADOS EXITOSAMENTE', 'HECHO', {timeOut: 3000});

            
            console.log("respuesta ",response.data);
          }).
          catch(function (error) 
          {
              console.log("error", error)
              comp.$toastr.info('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
          });

      },

      enviadiasexcepcionales(item)
      {
        console.log("usuario--> ",this.nombreusu);
        console.log("fecha--> ",this.dates_excepcionales);
        console.log("hora--> ",this.e4+":00");
        let comp=this;
          axios.post(comp.store+'/dias_excepcionales',
          { 
              nombre:comp.nombreusu+"",
              fecha:comp.dates_excepcionales+"",
              hora:comp.e4+":00"
          }).then(function (response) 
          {
            comp.$toastr.info('USUARIO OBTENIDO EXITOSAMENTE', 'HECHO', {timeOut: 3000});
            console.log("repuesta ",response.data);
          }).
          catch(function (error) 
          {
              console.log("error", error)
              comp.$toastr.info('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
          });

      },
      consulta123()
      {
          let comp=this;
          axios.post(comp.store+'/dias_permisos_usuario',
          { 
              cii:comp.usuarios,
          }).then(function (response) 
          {
            console.log("respuesta-> ", response.data)//resultado = response.data;
            if(response.data=="")
            {
                comp.dates_permisos = [];
            }
            else
            {
              comp.dates_permisos = response.data.split(",");
            }
            comp.$toastr.info('USUARIO OBTENIDO EXITOSAMENTE', 'HECHO', {timeOut: 3000});
            
          }).
          catch(function (error) 
          {
              console.log("error", error)
              comp.$toastr.info('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});

          }); 
      },
      consulta12345()
      {
          let comp=this;
          axios.post(comp.store+'/dias_vacaciones_usuario',
          { 
              cii:comp.usuarios_2,
          }).then(function (response) 
          {
            console.log("respuesta-> ", response.data)//resultado = response.data;
            if(response.data=="")
            {
                comp.dates_vacaciones = [];
            }
            else
            {
              comp.dates_vacaciones = response.data.split(",");
            }
            comp.$toastr.info('USUARIO OBTENIDO EXITOSAMENTE', 'HECHO', {timeOut: 3000});
            
          }).
          catch(function (error) 
          {
              console.log("error", error)
              comp.$toastr.info('POR FAVOR, REVISE SUS DATOS DE COPIAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});

          }); 
      },
      enviadiaspermisos()
        {
                        console.log("usuarios ",this.usuarios);
                        //console.log("usuario_material  ",this.usuario_material.id);
                       let comp=this;
                        axios.post(comp.store+'/dias_permisos',
                        { 
                            cii:comp.usuarios,
                            rfechas:comp.dates_permisos+"",
                        }).then(function (response) 
                        {
                          console.log("respuesta-> ", response.data)//resultado = response.data;
                          comp.$toastr.success('SUS DATOS FUERON ENVIADOS EXITOSAMENTE', 'HECHO', {timeOut: 3000});

                        }).
                        catch(function (error) 
                        {
                            console.log("error", error)
                            comp.$toastr.error('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                        });            

        },
        enviadiasvacaciones()
        {
                        console.log("usuarios ",this.usuarios_2);
                        //console.log("usuario_material  ",this.usuario_material.id);
                       let comp=this;
                        axios.post(comp.store+'/dias_vacaciones',
                        { 
                            cii:comp.usuarios_2,
                            rfechas:comp.dates_vacaciones+"",
                        }).then(function (response) 
                        {
                          console.log("respuesta vacaciones-> ", response.data)//resultado = response.data;
                          comp.$toastr.success('SUS DATOS FUERON ENVIADOS EXITOSAMENTE', 'HECHO', {timeOut: 3000});

                        }).
                        catch(function (error) 
                        {
                            console.log("error", error)
                            comp.$toastr.error('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                        });            

        },
        enviadiasferiados(idem,item,fechitas)
        {
                        console.log("jala soft ",idem);
                        console.log("jala  ",item);
                        console.log("jef  ",fechitas);
                        console.log("jef  ",this.dates_1);
                        let comp=this;
                        axios.post(comp.store+'/dias_feriados',
                        { 
                            identico:idem,
                            nombre:item,
                            diaferia:fechitas+"",
                            horas:"SIN HORAS",
                        }).then(function (response) 
                        {
                          console.log("resp XXX-> ", response.data)//resultado = response.data;
                          comp.$toastr.success('SUS DATOS FUERON ENVIADOS EXITOSAMENTE', 'HECHO', {timeOut: 3000});

                        }).

                          catch(function (error) 
                          {
                              console.log("error", error)
                              comp.$toastr.error('POR FAVOR, REVISE SUS DATOS DE COPIAR Y PEGAR', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});

                          });              

        },
        inicializausuarios()
        {   
                let comp = this;
                axios.post(comp.store+'/consultausuarios',{
                }).then(function (response) 
                {
                    console.log("RESPUESTA USUARIO SERVIDOR: ",response); 
                    comp.usuario_material=response.data;
                    comp.usuario_material_2=response.data;
                    console.log("total--> ",response.data.length);
                    comp.itemsusuarios.push('TODOS');
                    for(var m=1;m<response.data.length;m++)
                    {
                      var tt=response.data[m].nombre+" "+response.data[m].paterno+" "+response.data[m].materno +" "+response.data[m].id;
                      comp.itemsusuarios.push(tt);
                    }  
                }).
                catch(function (error) 
                {
                    console.log("error", error)
                });   
        },
    },
    created:function() 
        {
                        this.inicializausuarios();
                        let comp=this;
                        axios.get(comp.store+'/dias',
                        { 
                        }).then(function (response) 
                        {
                          console.log("resp ferias-> ", response.data);//resultado = response.data;
                          comp.dates = response.data[0].fechas.split(",");
                           console.log("solano ferias-> ", comp.dates);
                          comp.dates_inicios_meses=response.data[2].fechas.split(",");
                          comp.dates_continuos=response.data[3].fechas.split(",");
                          console.log("solano inicios meses-> ", comp.dates_inicios_meses);
                        }).
                        catch(function (error) 
                        {
                            console.log("error", error)
                        });
       
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