<template>
<center>
 <v-form v-model="valid">
<v-container grid-list-md text-xs-center>
<v-flex sm12>
      <div>
        <v-card hover="true">
          <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;">PAPELETA DE SALIDA</h1></v-card-text></center>
        </v-card>
      </div>
</v-flex>
</v-container>

  <div style="width:70%;">

        <table style="font-family:roboto;text-align:center;font-size:16px;" class="table table-hover table-striped">
            <tbody align="center">
                <tr v-for="kee in ke">
                    NOMBRE : {{ kee.nombre }} {{ kee.paterno }} {{ kee.materno }} <br>
                    C.I.: {{kee.id}}
                </tr>
            </tbody>
        </table>

  <v-container fluid>
    <v-flex sm8>

<div>
        <v-card hover="true">
          <center><v-card-text class="px-0">
          <h2 style="color:blue;">  .::TIPO DE PAPELETA::. </h2>
          <v-radio-group style="padding-left:50px;" v-model="radioGroup" column>
                          <v-radio  center
                              :key="1"
                              :label="`CON HORA DE SALIDA Y HORA DE RETORNO`"
                              :value="1"
                              color=red
                              column=true
                            ></v-radio>
                            <v-radio  center
                              :key="2"
                              :label="`SIN DETERMINAR HORAS`"
                              :value="2"
                              color=red
                              column=true
                            ></v-radio>
                            <v-radio  center
                              :key="3"
                              :label="`SOLO DEFINE HORA DE SALIDA`"
                              :value="3"
                              color=red
                              column=true
                            ></v-radio>
                      </v-radio-group>

          </v-card-text></center>
        </v-card>
      </div>
              <!--  <v-select v-bind:items="papeletas" :value="papeletas" options="papeletas" v-model="a1" label="Seleccione el tipo de papeleta..." autocomplete @keyup.enter="addValue"></v-select>-->

    </v-flex>
          </v-container>




  <div>
        <v-card width=100%>
          <center><v-card-text class="px-0">
                <v-flex lg10>
                  <v-text-field
                    v-model="motivo"
                    width=50px
                    :rules="motivoRules"
                    :counter="55"
                    label="ESCRIBA SU MOTIVO COMPLETO AQUI"
                    required
                  >{{keep.paterno}}</v-text-field>
                  </v-flex>
                  <v-flex lg10>
                  <v-text-field
                    v-model="lugar"
                    :rules="lugarRules"
                    :counter="27"
                    label="ESCRIBA LUGAR DE COMISION"
                    required
                  ></v-text-field>
                  </v-flex>

            <v-layout row wrap>
              <v-flex xs12 lg12>
                <v-layout row wrap>

                          <v-spacer></v-spacer>
                          <v-flex xs12 sm-6 md6>
                            <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Seleccione una fecha"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker locale="es" v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">Cancelar</v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(date)">Aceptar</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-flex>

      <v-spacer></v-spacer>
        </v-layout>
        <p>FECHA ELEGIDA: <strong>{{ date }}</strong></p>
      </v-flex>
    </v-layout>
  <v-layout col wrap v-if="radioGroup==1">
      <v-flex xs6>
        <h2 style="color:blue;">HORA SALIDA</h2>
        <v-flex xs6>
        <v-time-picker scrollable="true"  width="200" v-model="picker"></v-time-picker>
      </v-flex>
      </v-flex>
      <v-flex xs6>
        <h2 style="color:blue;">HORA RETORNO</h2>
        <v-flex xs6>
        <v-time-picker scrollable="true"  color=success width="200" v-model="picker1" style="font-family:roboto;font-size:15px;"></v-time-picker>
      </v-flex>
      </v-flex>
  </v-layout>

  <v-layout col wrap v-if="radioGroup==3">
      <v-flex xs6>
        <h2 style="color:blue;">HORA SALIDA</h2>
            <v-flex xs6>
            <v-time-picker scrollable="true" width="200" v-model="picker" style="font-family:roboto;font-size:15px;"></v-time-picker>
        </v-flex>
      </v-flex>
  </v-layout>
<br>
<br>
  <v-layout justify-center>
    <v-flex xs3>
      <v-btn color="info" :disabled="habilitar" @click="activabotongenerar()">VISTA PREVIA</v-btn>
    </v-flex>
    <v-flex xs3>
      <v-btn color="error" :disabled="david" @click="dialog = true">GENERAR PAPELETA</v-btn>
    </v-flex>
    <v-flex xs3>
      <v-btn color="success" @click="borrar()">BORRAR DATOS</v-btn>
    </v-flex>
  </v-layout>
           </v-card-text></center>
        </v-card>
      </div>

    </div>
  </v-form>
  <br>
<div class="text-xs-center">
    </div>
<v-dialog
        v-model="dialog"
        max-width="500"
      >
        <v-card>
          <v-card-title class="headline">NOTIFICACIÓN</v-card-title>
          <v-card-text>
          ¡UNA VEZ ENVIADOS LOS DATOS, YA NO SERAN MODIFICABLES!
          ¿Esta seguro que quiere enviar los datos y generar la papeleta de salida?.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog = false"
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
        v-model="dialog2"
        max-width="700"
      >
        <v-card>
          <v-card-title class="headline">VISTA PREVIA</v-card-title>
          <v-card-text>
          		<object style="width:100%;" v-bind:data="variable_reporte" type="application/pdf" width="900" height="400">
              </object>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog2 = false"
            >
              CANCELAR
            </v-btn>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="activarbotongenerar()"
            >
              ACEPTAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

  <v-container grid-list-md text-xs-center>
<v-layout col wrap>

<!--<v-flex xs4>
    <v-switch color="blue"
          :label="`FIRMA SOLICITANTE.: ${switch0.toString()}`"
          v-model="switch0"
          hide-details
        ></v-switch>
</v-flex>

<v-flex xs4>
    <v-switch color="green"
          :label="`FIRMA DAF.: ${switch1.toString()}`"
          v-model="switch1"
          hide-details
        ></v-switch>
</v-flex>

<v-flex xs4>
        <v-switch color="red"
          :label="`FIRMA DE VoBo. RRHH: ${switch2.toString()}`"
          v-model="switch2"
          hide-details
        ></v-switch>
</v-flex>-->

</v-layout>
</v-container>



</center>
</template>

<script>

var hoy = new Date();
var año=hoy.getFullYear();
var mes=""+((hoy.getMonth())+1);
var mesaux=""+((hoy.getMonth())+1);
var diapre=""+(hoy.getDate()-3);
var diapost=""+(hoy.getDate()+3);


//console.log("mes actual ",mes);
//console.log("diapre ",diapre);
//console.log("diapost ",diapost);
if(diapre<0)
{
    mesaux=mesaux-1;
    diapre=28;
}

//console.log(">>>>",año,"--",mes,"--",diapre);
//console.log("mes actual ",mes);
//console.log("diapre ",diapre);
//console.log("diapost ",diapost);

//console.log("mes>>> ",(mes.length));
if((mes.length)==1)
{
  mes="0"+mes;
}
if((diapre.length)==1)
{
  diapre="0"+diapre;
}
if((diapost.length)==1)
{
  diapost="0"+diapost;
}
//console.log("final--> ",año,"-",mes,"-",diapost);

var zzz;
var nombre_completo;
var CARNET_;
export default {
    data: vm => ({
       a1:null,
       variable_reporte:'',
        date: new Date().toISOString().substr(0, 10),
        modal: false,

      papeletas:[
        'PAPELETA A','PAPELETA B','PAPELETA C'
      ],
        loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      radioGroup: 1,
      gggg: JSON.parse(localStorage.getItem('usuario')).codigousuario,
      codigousu: JSON.parse(localStorage.getItem('usuario')).password,
      nombre_completo:"",
      ci:"",
      dialog: false,
      dialog2: false,
      keep:[],
      ke:[],
      nombre:JSON.parse(localStorage.getItem('usuario')).password+"",
      codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario,
      password:JSON.parse(localStorage.getItem('usuario')).password,
      //nombre:"DAVID ALEGRIA QUISPE",
      valor:200,
      valor1:'',
      david:true,
      habilitar:false,
      lista: [],
      lista1: [],
      switch0: true,
      switch1: true,
      switch2: true,
      texto : 'PAPELETA DE SALIDA',
      picker: null,
      picker1: null,
      valid: false,
 


      firmasol:0,
      firmajefe:0,
      firmarrhh:0,
      observacion:null,
      menu1: false,
      menu2: false,

      motivo: '',
      motivoRules: [
        v => !!v || 'El motivo es requerido',
        v => v.length <= 100 || 'El motivo tiene que tener menos de 110 caracteres'
      ],
      lugar: '',
      lugarRules: [
        v => !!v || 'El lugar es requerido',
        v => v.length <= 55 || 'El lugar tiene que tener mas de 55 caracteres'
      ],
                        color:0,
                        apoy:[]

    }),
    watch: {
    /*loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }************/
  },
        /*computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      }
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },*/
    methods: {
      /*formatDate (date) {
        if (!date) return
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },*/
       addValue: function(e){
      this.papeletas.push(e.target.value)
    },
    activarbotongenerar()
    {
      this.dialog2=false;
      this.david=false;
      this.habilitar=true;
    },
    activabotongenerar:function()
    {
      console.log("motivo--> ",this.motivo);
      console.log("lugar--> ",this.lugar);
      console.log("fecha--> ",this.date);
      console.log("salida--> ",this.picker);
      console.log("llegada--> ",this.picker1);
     
      if(this.radioGroup==2)
      {
        this.picker="";
        this.picker1="";
      }
      if(this.radioGroup==3)
      {
        this.picker1="";
      }

                                      if((this.motivo!="")&&(this.lugar!="")&&(this.picker!=null)&&(this.picker1!=null))
                                      {  
                                                    let compa = this;
                                                    compa.dialog= false;
                                                    axios.post(compa.store+'/cons2',{
                                                        usuario:compa.codigousuario,
                                                        contraseña:compa.password
                                                    }).then(function (response)
                                                    {
                                                          CARNET_= response.data;
                                                    if(compa.radioGroup==2)
                                                    {
                                                      compa.picker='00:00:00';
                                                      compa.picker1='00:00:00';
                                                    }
                                                    if(compa.radioGroup==3)
                                                    {
                                                      compa.picker1='00:00:00';
                                                    }

                                                                        axios.post(compa.store+'/vistaprevia',{
                                                                            nombre:CARNET_+"",
                                                                            motivo:compa.motivo,
                                                                            lugar:compa.lugar,
                                                                            date:compa.date,
                                                                            picker:compa.picker,
                                                                            picker1:compa.picker1,
                                                                            tipo_papeleta:compa.radioGroup,
                                                                            firmasol:compa.firmasol,
                                                                            firmajefe:compa.firmajefe,
                                                                            firmarrhh:compa.firmarrhh,
                                                                            observacion:compa.observacion
                                                                        }).then(function (response)
                                                                        {
                                                                            console.log("respuesta salidad zzz: ", response.data);//resultado = response.data;
                                                                            zzz=response.data;

                                                      var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
                                                      var cont=JSON.parse(localStorage.getItem('usuario')).password;
                                                      axios.post(compa.store+'/cons1',{
                                                          usuario:usuar+'',
                                                          contraseña:cont+''
                                                      }).then(function (response)
                                                      {
                                                          //console.log("RESPUESTAGG-> ", response.data)//resultado = response.data;
                                                          nombre_completo = response.data;

                                                          if(nombre_completo == "")
                                                          {
                                                              compa.$toastr.error('POR FAVOR, REVISE SUS DATOS', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                                                          }
                                                          else
                                                          {

                                                              compa.$toastr.success('SUS DATOS FUERON ENVIADOS EN UN MOMENTO SE GENERARA SU PDF', 'HECHO', {timeOut: 3000});
                                                          }
                                        compa.valor1=nombre_completo;
                                        compa.valor=zzz;



                                var imgData = 'data:image/png;base64,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'








                                        var val=compa.valor+"";
                                        var valor=compa.valor1+"";
                                        var doc = new jsPDF('p','mm','letter');
                                        //var logo = new Image();
                                        //var imgData = 'images/david.jpg';


                                        //console.log("imagen:  ",imgData);

                                        doc.setDrawColor(0)
                                        doc.setFillColor(255, 255, 255)
                                        //doc.setLineWidth(0.5)
                                      // doc.roundedRect(15, 15, 185, 110, 10, 10, 'FD')
                                      // doc.roundedRect(15, 155, 185, 110, 10, 10, 'FD')



                                      var imgTij='data:image/png;base64,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'

                                        doc.addImage(imgData, 'JPEG', 1, 0.5, 213, 138)
                                        //doc.addImage(imgTij, 'JPEG', 1, 5, 213, 138)
                                      //  doc.addImage(tijera, 'JPEG', 130, 135, 213, 138)
                                        doc.addImage(imgData, 'JPEG', 1, 140, 213, 138)
                                        //doc.addImage(imgData2, 'JPEG', 15, 30, 185, 84)
                                        //doc.addImage(imgData2, 'JPEG', 15, 170, 185, 84)
                                        
                                        doc.setFont('helvetica')
                                        doc.setFontType('bold')
                                        doc.setFontSize(22)
                                        doc.text(compa.texto,70, 43)
                                        doc.text(compa.texto,70, 183)

                                        var tamaño_texto=11;
                                        var empuja_texto=0;
                                        var sw=0;
                                        var motivo1="";
                                        var motivo2="";
                                        var aux_motivo="";

                                        //console.log("SOL-> "+compa.motivo.length);
                                        if(compa.motivo.length>55)
                                        {

                                          aux_motivo=compa.motivo;
                                          motivo1 = compa.motivo.substring(0, 57);

                                            var l=motivo1.length;
                                            var bandera=0;
                                            var cont=0;
                                            var a=0;
                                            for(var i=0;i<=l;i++)
                                            {
                                              var cadena=motivo1.substring(i,i+1);
                                              cont++;
                                              if(cadena===" ")
                                              {
                                                a=cont;
                                              }
                                            }

                                          motivo1 = compa.motivo.substring(0, a);
                                          motivo2 = compa.motivo.substring(a,compa.motivo.length);
                                          tamaño_texto=10;
                                          empuja_texto=4;
                                          sw=1;
                                        }

                                        doc.setFont('arial')
                                        doc.setFontType('bold')
                                        doc.setFontSize(tamaño_texto)
                                        doc.text("NOMBRE: ",25, 55)
                                        doc.text("CI: ",25, 63)
                                        doc.text("MOTIVO: ",25, 71)
                                        doc.text("LUGAR: ",25, 79+empuja_texto)
                                        doc.text("FECHA: ",25, 87+empuja_texto)
                                        doc.text("HORA SALIDA: ",25, 95+empuja_texto)
                                        doc.text("HORA RETORNO: ",115, 95+empuja_texto)



                                        doc.setFont('arial')
                                        doc.setFontType('bold')
                                        doc.setFontSize(tamaño_texto)
                                        doc.text("NOMBRE: ",25, 196)
                                        doc.text("CI: ",25, 204)
                                        doc.text("MOTIVO: ",25, 212)
                                        doc.text("LUGAR: ",25, 220+empuja_texto)
                                        doc.text("FECHA: ",25, 228+empuja_texto)
                                        doc.text("HORA SALIDA: ",25, 236+empuja_texto)
                                        doc.text("HORA RETORNO: ",115, 236+empuja_texto)




                                        doc.setFont('roboto')
                                        doc.setFontType('normal')
                                        doc.setFontSize(tamaño_texto)



                                        doc.text(""+valor,70, 55)
                                        doc.text(""+CARNET_,70, 63)


                                        doc.text(""+valor,70, 196)
                                        doc.text(""+CARNET_,70, 204)

                                        if(sw==1)
                                        {
                                            doc.text(motivo1,70, 71)
                                            doc.text(motivo2,70, 75)
                                            doc.text(motivo1,70, 212)
                                            doc.text(motivo2,70, 216)
                                        }
                                        else
                                        {
                                            doc.text(compa.motivo,70, 71)
                                            doc.text(compa.motivo,70, 212)
                                        }

                                        doc.text(compa.lugar,70, 79+empuja_texto)
                                        doc.text(compa.date,70, 87+empuja_texto)


                                        doc.text(compa.lugar,70, 220+empuja_texto)
                                        doc.text(compa.date,70, 228+empuja_texto)

                                        if((compa.picker==="00:00:00")&&(compa.picker1==="00:00:00"))
                                        {
                                            doc.text("NO DEFINIDO",70, 95+empuja_texto)
                                            doc.text("NO DEFINIDO",70, 236+empuja_texto)
                                            doc.text("NO DEFINIDO",165, 95+empuja_texto)
                                            doc.text("NO DEFINIDO",165, 236+empuja_texto)
                                        }
                                        else
                                        {
                                          if(compa.picker1==="00:00:00")
                                          {
                                            doc.text(compa.picker,70, 95+empuja_texto)
                                            doc.text(compa.picker,70, 236+empuja_texto)
                                            doc.text("NO DEFINIDO",165, 95+empuja_texto)
                                            doc.text("NO DEFINIDO",165, 236+empuja_texto)
                                          }
                                          else
                                          {
                                            doc.text(compa.picker,70, 236+empuja_texto)
                                            doc.text(compa.picker,70, 95+empuja_texto)
                                            doc.text(compa.picker1,165, 236+empuja_texto)
                                            doc.text(compa.picker1,165, 95+empuja_texto)
                                          }
                                        }

                                        doc.text("........................................",30, 116)
                                        doc.text("...........................................",92, 116)
                                        doc.text("..........................",156, 116)

                                        doc.text("FIRMA SOLICITANTE",30, 120)
                                        doc.text("FIRMA INM. SUPERIOR",92, 120)
                                        doc.text("FIRMA RR.HH.",156, 120)





                                        var imgcopia='data:image/png;base64,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'










                                        doc.text("........................................",30, 256)
                                        doc.text("...........................................",92, 256)
                                        doc.text("..........................",156, 256)

                                        doc.text("FIRMA SOLICITANTE",30, 260)
                                        doc.text("FIRMA INM. SUPERIOR.",92, 260)
                                        doc.text("FIRMA RR.HH.",156, 260)


                                        doc.setFontSize(20)
                                        doc.text("# "+val,173, 37)
                                        doc.text("# "+val,173, 177)
                                        doc.setFont('times')
                                        doc.setFontType('italic')
                                        doc.setFontSize(8)
                                        if(compa.radioGroup==1)
                                        {
                                          doc.text("SERIE : A",175,42)
                                          doc.text("SERIE : A",175, 182)
                                        }
                                        else
                                        {
                                          if(compa.radioGroup==2)
                                          {
                                            doc.text("SERIE : B",175,42)
                                            doc.text("SERIE : B",175, 182)
                                          }
                                          else
                                          {
                                            doc.text("SERIE : C",175,42)
                                            doc.text("SERIE : C",175, 182)
                                          }

                                        }
                                        doc.text("FECHA: "+(hoy.getDate() + "/" + (hoy.getMonth() +1) + "/" + hoy.getFullYear()),170,47)


                                      //         doc.output('datauri');



                                        doc.setFont('helvetica')
                                        doc.setFontType('normal')
                                        doc.setFontSize(18)




                                        doc.addImage(imgcopia, 'JPEG', 25, 240, 45, 15 )
                                        doc.addImage(imgcopia, 'JPEG', 90, 240, 45, 15 )
                                        doc.addImage(imgcopia, 'JPEG', 148, 240, 45, 15 )


                                var string = doc.output('datauristring');
                                  //console.log(string);
                                compa.variable_reporte = string;

                                //console.log("VAR--> ", compa.variable_reporte);



                                compa.dialog2 = true;
                                //    doc.save('boleta_salida.pdf');

                                  //        doc.addPage();



                                                      }).

                                                          catch(function (error)
                                                          {
                                                              console.log("error", error)
                                                          compa.$toastr.error('POR FAVOR, REVISE SUS DATOS', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                                                          });







                                                                                      }).
                                                                                          catch(function (error) {
                                                                                              console.log("error", error)
                                                                                              compa.$toastr.error('POR FAVOR, REVISE SUS DATOS', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                                                                                      });
                                                    }).
                                                    catch(function (error)
                                                    {
                                                        console.log("error", error)
                                                    });

                                      }
                                      else
                                      {
                                        this.$toastr.info('POR FAVOR, COMPLETE TODOS LOS CAMPOS', 'INFORMACION', {positionClass:"toast-bottom-center",timeOut: 3000});
                                      }

                



    },

      prioridadnoti:function()
      {
                    let compa = this;
                    axios.post(compa.store+'/cons2',{
                        usuario:compa.codigousuario,
                        contraseña:compa.password
                    }).then(function (response)
                    {
                          CARNET_= response.data;
                    if(compa.radioGroup==2)
                    {
                      compa.picker='00:00:00';
                      compa.picker1='00:00:00';
                    }
                     if(compa.radioGroup==3)
                    {
                      compa.picker1='00:00:00';
                    }
                          axios.post(compa.store+'/consultasalida2',{
                              nombre:CARNET_+"",
                              motivo:compa.motivo,
                              lugar:compa.lugar,
                              date:compa.date,
                              picker:compa.picker,
                              picker1:compa.picker1,
                              firmasol:compa.firmasol,
                              firmajefe:compa.firmajefe,
                              firmarrhh:compa.firmarrhh
                          }).then(function (response)
                          {
                              //console.log("respuesta notificacion: ", response.data);//resultado
                          }).
                          catch(function (error)
                          {
                              console.log("error", error)
                          compa.$toastr.error('POR FAVOR, REVISE SUS DATOS', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                          });
 }).

                          catch(function (error)
                          {
                              console.log("error", error)
                          compa.$toastr.error('POR FAVOR, REVISE SUS DATOS', 'ERROR',       {positionClass:"toast-bottom-center",timeOut: 2000});
                          });

      },
      borrar:function()
      {
        this.motivo='';
        this.motivoRules=[
        v => !!v || 'El motivo es requerido',
        v => v.length <= 100 || 'El motivo tiene que tener menos de 110 caracteres'
      ];
        this.lugar='';
        this.date=new Date().toISOString().substr(0, 10);
        this.picker=null;
        this.picker1=null;
        this.david=true;
        this.habilitar=false;

      },

      exportPdf:function()
      {
                    let compa = this;
                    compa.dialog= false;
                    axios.post(compa.store+'/cons2',{
                        usuario:compa.codigousuario,
                        contraseña:compa.password
                    }).then(function (response)
                    {
                          CARNET_= response.data;
                          //console.log("CI ORIGEN-> ", response.data)//resultado = response.data;
                    //console.log("CARNET : ", CARNET_);
                    //console.log("MOTIVO: ",compa.motivo);
                    //console.log("LUGAR : ", compa.lugar);
                    //console.log("FECHA: ",compa.date);
                    if(compa.radioGroup==2)
                    {
                      compa.picker='00:00:00';
                      compa.picker1='00:00:00';
                    }
                     if(compa.radioGroup==3)
                    {
                      compa.picker1='00:00:00';
                    }
                    //console.log("HORARET : ", compa.picker1);
                    //console.log("HORASAL: ",compa.picker);
                    //console.log("FIRMA SOL : ", compa.firmasol);
                    //console.log("FIRMA JEFE: ",compa.firmajefe);
                    //console.log("FIRMA RRHH: ",compa.firmarrhh);

                                                      axios.post(compa.store+'/consultasalida',{
                                                          nombre:CARNET_+"",
                                                          motivo:compa.motivo,
                                                          lugar:compa.lugar,
                                                          date:compa.date,
                                                          picker:compa.picker,
                                                          picker1:compa.picker1,
                                                          tipo_papeleta:compa.radioGroup,
                                                          firmasol:compa.firmasol,
                                                          firmajefe:compa.firmajefe,
                                                          firmarrhh:compa.firmarrhh,
                                                          observacion:compa.observacion
                                                      }).then(function (response)
                                                      {
                                                          //console.log("respuesta salidad zzz: ", response.data);//resultado = response.data;
                                                          zzz=response.data;











                      var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
                      var cont=JSON.parse(localStorage.getItem('usuario')).password;
                      axios.post(compa.store+'/cons1',{
                          usuario:usuar+'',
                          contraseña:cont+''
                      }).then(function (response)
                      {
                          //console.log("RESPUESTAGG-> ", response.data)//resultado = response.data;
                          nombre_completo = response.data;

                          if(nombre_completo == "")
                          {
                              compa.$toastr.error('POR FAVOR, REVISE SUS DATOS', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                          }
                          else
                          {

                              compa.$toastr.success('SUS DATOS FUERON ENVIADOS EN UN MOMENTO SE GENERARA SU PDF', 'HECHO', {timeOut: 3000});
                          }
        compa.valor1=nombre_completo;
        compa.valor=zzz;



var imgData = 'data:image/png;base64,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'














        var val=compa.valor+"";
        var valor=compa.valor1+"";
        var doc = new jsPDF('p','mm','letter');
        //var logo = new Image();
        //var imgData = 'images/david.jpg';


        //console.log("imagen:  ",imgData);

        doc.setDrawColor(0)
        doc.setFillColor(255, 255, 255)
        //doc.setLineWidth(0.5)
       // doc.roundedRect(15, 15, 185, 110, 10, 10, 'FD')
       // doc.roundedRect(15, 155, 185, 110, 10, 10, 'FD')

        doc.addImage(imgData, 'JPEG', 1, 0.5, 213, 138)
        doc.addImage(imgData, 'JPEG', 1, 140, 213, 138)
        //doc.addImage(imgData2, 'JPEG', 15, 30, 185, 84)
        //doc.addImage(imgData2, 'JPEG', 15, 170, 185, 84)


        doc.setFont('helvetica')
        doc.setFontType('bold')
        doc.setFontSize(22)
        doc.text(compa.texto,70, 43)
        doc.text(compa.texto,70, 183)

        var tamaño_texto=11;
        var empuja_texto=0;
        var sw=0;
        var motivo1="";
        var motivo2="";
        var aux_motivo="";

        //console.log("SOL-> "+compa.motivo.length);
        if(compa.motivo.length>55)
        {

          aux_motivo=compa.motivo;
          motivo1 = compa.motivo.substring(0, 57);

            var l=motivo1.length;
            var bandera=0;
            var cont=0;
            var a=0;
            for(var i=0;i<=l;i++)
            {
              var cadena=motivo1.substring(i,i+1);
              cont++;
              if(cadena===" ")
              {
                a=cont;
              }
            }

          motivo1 = compa.motivo.substring(0, a);
          motivo2 = compa.motivo.substring(a,compa.motivo.length);
          tamaño_texto=10;
          empuja_texto=4;
          sw=1;
        }

        doc.setFont('arial')
        doc.setFontType('bold')
        doc.setFontSize(tamaño_texto)
        doc.text("NOMBRE: ",25, 55)
        doc.text("CI: ",25, 63)
        doc.text("MOTIVO: ",25, 71)
        doc.text("LUGAR: ",25, 79+empuja_texto)
        doc.text("FECHA: ",25, 87+empuja_texto)
        doc.text("HORA SALIDA: ",25, 95+empuja_texto)
        doc.text("HORA RETORNO: ",115, 95+empuja_texto)



        doc.setFont('arial')
        doc.setFontType('bold')
        doc.setFontSize(tamaño_texto)
        doc.text("NOMBRE: ",25, 196)
        doc.text("CI: ",25, 204)
        doc.text("MOTIVO: ",25, 212)
        doc.text("LUGAR: ",25, 220+empuja_texto)
        doc.text("FECHA: ",25, 228+empuja_texto)
        doc.text("HORA SALIDA: ",25, 236+empuja_texto)
        doc.text("HORA RETORNO: ",115, 236+empuja_texto)




        doc.setFont('roboto')
        doc.setFontType('normal')
        doc.setFontSize(tamaño_texto)



        doc.text(""+valor,70, 55)
        doc.text(""+CARNET_,70, 63)


        doc.text(""+valor,70, 196)
        doc.text(""+CARNET_,70, 204)

        if(sw==1)
        {
            doc.text(motivo1,70, 71)
            doc.text(motivo2,70, 75)
            doc.text(motivo1,70, 212)
            doc.text(motivo2,70, 216)
        }
        else
        {
            doc.text(compa.motivo,70, 71)
            doc.text(compa.motivo,70, 212)
        }

        doc.text(compa.lugar,70, 79+empuja_texto)
        doc.text(compa.date,70, 87+empuja_texto)


        doc.text(compa.lugar,70, 220+empuja_texto)
        doc.text(compa.date,70, 228+empuja_texto)

        if((compa.picker==="00:00:00")&&(compa.picker1==="00:00:00"))
        {
            doc.text("NO DEFINIDO",70, 95+empuja_texto)
            doc.text("NO DEFINIDO",70, 236+empuja_texto)
            doc.text("NO DEFINIDO",165, 95+empuja_texto)
            doc.text("NO DEFINIDO",165, 236+empuja_texto)
        }
        else
        {
          if(compa.picker1==="00:00:00")
          {
            doc.text(compa.picker,70, 95+empuja_texto)
            doc.text(compa.picker,70, 236+empuja_texto)
            doc.text("NO DEFINIDO",165, 95+empuja_texto)
            doc.text("NO DEFINIDO",165, 236+empuja_texto)
          }
          else
          {
            doc.text(compa.picker,70, 236+empuja_texto)
            doc.text(compa.picker,70, 95+empuja_texto)
            doc.text(compa.picker1,165, 236+empuja_texto)
            doc.text(compa.picker1,165, 95+empuja_texto)
          }
        }

        doc.text("........................................",30, 116)
        doc.text("...........................................",92, 116)
        doc.text("..........................",156, 116)

        doc.text("FIRMA SOLICITANTE",30, 120)
        doc.text("FIRMA INM. SUPERIOR",92, 120)
        doc.text("FIRMA RR.HH.",156, 120)





        var imgcopia='data:image/png;base64,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'










        doc.text("........................................",30, 256)
        doc.text("...........................................",92, 256)
        doc.text("..........................",156, 256)

        doc.text("FIRMA SOLICITANTE",30, 260)
        doc.text("FIRMA INM. SUPERIOR.",92, 260)
        doc.text("FIRMA RR.HH.",156, 260)


        doc.setFontSize(20)
        doc.text("# "+val,173, 37)
        doc.text("# "+val,173, 177)
        doc.setFont('times')
        doc.setFontType('italic')
        doc.setFontSize(8)
        if(compa.radioGroup==1)
        {
          doc.text("SERIE : A",175,42)
          doc.text("SERIE : A",175, 182)
        }
        else
        {
          if(compa.radioGroup==2)
          {
            doc.text("SERIE : B",175,42)
            doc.text("SERIE : B",175, 182)
          }
          else
          {
            doc.text("SERIE : C",175,42)
            doc.text("SERIE : C",175, 182)
          }

        }
        doc.text("FECHA: "+(hoy.getDate() + "/" + (hoy.getMonth() +1) + "/" + hoy.getFullYear()),170,47)


       //         doc.output('datauri');



        doc.setFont('helvetica')
        doc.setFontType('normal')
        doc.setFontSize(18)




        doc.addImage(imgcopia, 'JPEG', 25, 240, 45, 15 )
        doc.addImage(imgcopia, 'JPEG', 90, 240, 45, 15 )
        doc.addImage(imgcopia, 'JPEG', 148, 240, 45, 15 )

        
      compa.david=true;
      doc.save('boleta_salida.pdf');

          doc.addPage();



                      }).

                          catch(function (error)
                          {
                              console.log("error", error)
                          compa.$toastr.error('POR FAVOR, REVISE SUS DATOS', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                          });







                                                      }).
                                                          catch(function (error) {
                                                              console.log("error", error)
                                                              compa.$toastr.error('POR FAVOR, REVISE SUS DATOS', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                                                      });
                    }).
                    catch(function (error)
                    {
                        console.log("error", error)
                    });





      },

        parseDate (date) {
        if (!date) return null
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    },
    created: function()
    {

              var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
              var cont=JSON.parse(localStorage.getItem('usuario')).password;
              //console.log("LOGIN: ", usuar)
              //console.log("CONTRASEÑA: ", cont)

                /*PARA DIRECTORES*/
                var usuar_dir_daf=JSON.parse(localStorage.getItem('directores')).dir_daf_login;
              var cont_dir_daf=JSON.parse(localStorage.getItem('directores')).dir_daf_password;

              //console.log("LOGIN DF: ", usuar_dir_daf)
              //console.log("CONTRASEÑA DF: ", usuar_dir_daf)

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


                    //console.log("jjj-> ",Object.keys(JSON.parse(localStorage.getItem('apoyos'))).length);
                    //console.log("amigo",JSON.parse(localStorage.getItem('apoyos')));

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


                    let componen = this;
                      axios.post(componen.store+'/cons',{
                          usuario:usuar+'',
                          contraseña:cont
                      }).then(function (response)
                      {
                          //console.log("resp-> ", response.data)//resultado = response.data;
                          componen.ke = response.data;
                      }).

                          catch(function (error)
                          {
                              console.log("error", error)
                          });

                    //console.log("usu-> ",usuar);
                    //console.log("cont-> ",cont);


if((usuar==usuar_dir_daf && cont==cont_dir_daf)||(usuar==usuar_dir_dcf && cont==cont_dir_dcf)||(usuar==usuar_dir_dj && cont==cont_dir_dj)||(usuar==usuar_dir_dge && cont==cont_dir_dge))
                {
                      componen.$store.commit('SET_LAYOUT', 'principalsuperadmin-layout');
                     componen.color=3;

                                         // location.reload();

                }
                else
                {
                     if((usuar==usuar_tec_rrhh && cont==cont_tec_rrhh)||(usuar==usuar_analis_rrhh && cont==cont_analis_rrhh))
                      {
                            componen.$store.commit('SET_LAYOUT', 'principalsuperusu-layout');
                            componen.color=1;

                      }
                      else
                      {
                         for(var k=0;k<(this.apoy.length);k++)
                          {
                            //console.log("--> ",this.apoy[k]);
                              if((usuar==this.apoy[k] && cont==this.apoy[k+1]))
                            {
                                  componen.$store.commit('SET_LAYOUT', 'principalapoyo-layout');
                                componen.color=4;
                                sw=1;
                            }
                          }

                        if(sw==0)
                        {
                            componen.$store.commit('SET_LAYOUT', 'principala-layout');
                            componen.color=2;
                                               // location.reload();
                        }
                      }
                }
        }

    }
</script>


<style>
#appas {
  margin: 0px auto;
  margin-top: 60px;
  width: 400px;
}  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
