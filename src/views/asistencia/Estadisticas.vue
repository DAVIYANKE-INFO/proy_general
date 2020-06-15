<template>
<v-container grid-list-md text-xs-center>
<v-layout row wrap>

    <v-flex sm12>
        <v-card hover="true" tile="true">
          <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;">ESTADISTICAS DE ASISTENCIA</h1></v-card-text></center>
        </v-card>
    </v-flex>
     <v-flex sm8>
     <v-card>
     <v-card-text class="px-3"><h1 style="color:blue;font-family:roboto;font-size:18px;">Rango de fechas : {{ fechainicio }} {{ " hasta " }} {{ fechafin }} </h1></v-card-text>
     </v-card>
     </v-flex>
    <v-flex sm6>
        <v-card hover="true">
          <chartjs-doughnut
          v-bind:bind="true"
          v-bind:datasets="datasets"
          v-bind:labels="labels"
          v-bind:option="option"/>
        </v-card>
    </v-flex>

    <v-flex sm6>

        <v-card hover="true">
          <chartjs-bar
          v-bind:bind="true"
            :labels="mylabels"
            :datasets="mydatasets"
            v-bind:option="option">
          </chartjs-bar>
        </v-card>

    </v-flex>

     <v-flex class="text-center" sm2.5>
        <v-card hover="true">
          PUNTUALIDAD: <h1 style="font-size:40px;" id="content1"></h1>
        </v-card>
    </v-flex>

    <v-flex class="text-center" sm2.5>
        <v-card hover="true">
          ATRASOS : <h1 style="font-size:40px;" id="content2"></h1>
        </v-card>
    </v-flex>

    <v-flex class="text-center" sm2.5>
        <v-card hover="true">
          FALTAS : <h1 style="font-size:40px;" id="content4"></h1>
        </v-card>
    </v-flex>

    <v-flex class="text-center" sm2.5>
        <v-card hover="true">
          PERMISOS : <h1 style="font-size:40px;" id="content3"></h1>
        </v-card>
    </v-flex>

    <v-flex class="text-center" sm2.5>
        <v-card hover="true">
          ABANDONOS : <h1 style="font-size:40px;" id="content5"></h1>
        </v-card>
    </v-flex>
  
</v-layout>


<v-row justify="center" align="center">
<v-col>
  <v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <v-col class="text-center">
    <h1 style="color:blue;">REPORTES DE USUARIO</h1>
    </v-col>
<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
        tile
    >
<v-row align="center" justify="center">
    <v-col cols="5">
<v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
          <v-text-field 
          v-model="dateRangeText" 
          label="Seleccione su rango de fechas / corte"
          prepend-icon="event" 
          readonly
          v-on="on"
          ></v-text-field>
          </template>
           <v-date-picker 
            locale="es" 
            v-model="dates" 
            range>
            <v-btn text color="primary" @click="modal = false">CANCELAR</v-btn>
            <v-btn text color="primary" @click="saves()">ACEPTAR</v-btn>
          </v-date-picker>
        </v-dialog>    
       </v-col> 
</v-row>    
      <h5> NOTA : Tome en cuenta que el corte elegido es del 21 del presente mes al 20 del proximo mes</h5>
      <h5> OJO : Si el corte cae en dias fines de semana y feriados escoger los dias habiles de trabajo inmediatos superiores o inferiores</h5>

      <!-- <v-text-field v-model="dateRangeText" label="Date range" prepend-icon="event" readonly></v-text-field>
      <h3> elegido: {{ dates }}</h3>-->
</v-card>

<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
        tile
    >
    <h3 style="color:blue;">ATRASOS</h3>
    
     <v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">FECHA</th>
            <th class="text-left">HORA</th>
            <th class="text-center">MINUTOS</th>
            <th class="text-center">SEGUNDOS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json_atrasos">
            <td class="text-left" style="color:blue;">{{ item.fecha }}</td>
            <td class="text-left" style="color:blue;">{{ item.hora }}</td>
            <td class="text-center" style="color:blue;">{{ item.mins }}</td>
            <td class="text-center" style="color:blue;">{{ item.segs }}</td>
          </tr>
          <tr style="font-weight:bold;">
            <td colspan="2" class="text-left">SUMA TOTAL</td>
            <td class="text-center">{{ minutostotales }}</td>
            <td class="text-center"> {{ segundostotales }}</td>
          </tr>
          <br>
          <tr>
            <td style="font-weight:bold;" colspan="4">Usted se ha atrasado : {{ minutostotales + " minutos + " + minconsegundos + " mins "}} {{ segundos + " segundos " }}</td>
          </tr>
        </tbody>

      </template>
    </v-simple-table>
</v-card>

<!--<v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <h3 style="text-align:center;color:#BC2504;">NO TIENE NINGUNA SANCION</h3>
</v-card>-->

</v-card>



<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
        tile
    >
    <h3 style="color:blue;">FALTAS</h3>
     <v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <v-simple-table dense>
    
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">FECHA</th>
            <th class="text-left">DÍAS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json_faltas">
            <td style="color:blue;">{{ item.fecha }}</td>
            <td style="color:blue;">{{ item.sancion }}</td>
          </tr>
          <tr style="font-weight:bold;">
            <td class="text-left">SUMA TOTAL</td>
            <td class="text-left">{{ faltas_totales }}</td>
          </tr>
          <br>
          <tr>
            <td style="font-weight:bold;" colspan="4">Usted se ha faltado : {{ faltas_totales + " días " }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</v-card>

<!--<v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <h3 style="text-align:center;color:#BC2504;">NO TIENE NINGUNA SANCION</h3>
</v-card>-->
</v-card>


<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
        tile
    >
    <h3 style="color:blue;">PERMISOS</h3>
    <v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" style="color:blue;">FECHA</th>
            <th class="text-left" style="color:blue;">DESCRIPCIÓN</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json_permisos">
            <td>{{ item.fecha }}</td>
            <td>{{ item.observacion }}</td>
            <td>{{ item.cantidad }}</td>
            <!--<td>{{ item.valor_2 }}</td>-->
          </tr>
          <tr style="font-weight:bold;">
            <td colspan="2" class="text-left">SUMA TOTAL</td>
            <td class="text-left"> {{ permisos_totales }}</td>
          </tr>
          <br>
          <tr>
            <td style="font-weight:bold;" colspan="4">Usted se ha pedido permiso de la institución en : {{ permisos_totales + " oportunidades " }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-card>
    <!--<v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <h3 style="text-align:center;color:#BC2504;">NO TIENE NINGUNA SANCION</h3>
</v-card>-->
</v-card>

<v-card
:elevation="hover ? 24 : 6"
        class="ma-5 pa-5"
        outlined
        tile
    >
    <h3 style="color:blue;">ABANDONOS</h3>
    <v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">FECHA</th>
            <th class="text-left">HORA</th>
            <th class="text-left">MINUTOS</th>
            <th class="text-left">SEGUNDOS</th>
            <th class="text-center">CANTIDAD</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json_abandonos">
            <td style="color:blue;">{{ item.fecha }}</td>
            <td style="color:blue;">{{ item.hora }}</td>
            <td style="color:blue;">{{ item.mins }}</td>
            <td style="color:blue;">{{ item.segs }}</td>
            <td class="text-center" style="color:blue;">{{ item.abandona }}</td>
          </tr>
          <tr style="font-weight:bold;">
            <td colspan="4" class="text-left">SUMA TOTAL</td>
            <td class="text-center"> {{ abandonos_totales }}</td>
          </tr>
          <br>
          <tr>
            <td style="font-weight:bold;" colspan="4">Usted ha abandonado la institución en : {{ abandonos_totales + " oportunidades " }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-card>
  <!--  <v-card
        class="ma-1 pa-3"
        outlined
        tile
    >
    <h3 style="text-align:center;color:#BC2504;">NO TIENE NINGUNA SANCION</h3>
</v-card>-->
</v-card>




</v-card>
</v-col>
</v-row>

</v-container>
</template>

<script>
var CARNET_;
var unos=5;
var fecha=new Date();
var ceromes='';
if(fecha.getMonth()+1<10)
{
  ceromes='0';
}
  var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  var milabels=[];
  for(var t=0;t<fecha.getMonth()+1;t++)
  {
    milabels[t]=meses[t];
  }
  //var mydatasets=[20,30,40];
export default 
{

  data(){
    return {
      modal: false,
      dates: [fecha.getFullYear()+'-'+ceromes+(fecha.getMonth()+1)+'-'+fecha.getDate(), fecha.getFullYear()+'-'+ceromes+(fecha.getMonth()+1)+'-'+fecha.getDate()],
      datasets: [
        {
          data: [0,0,0,0],
          backgroundColor: ["#80e27e", "#4fc3f7", "#ff9800","#ef5350","#AE4FF6"],
          hoverBackgroundColor: ["#4caf50", "#039be5", "#e65100","#d32f2f","#9C27F5"],
          borderColor: ['#087f23','#01579b','#e65100','#c62828',"#8609E7"]}],

     //mylabels:[],
      labels:[],
      option: {},
      david:10,
      lista_estadistica:[],
      mylabels: milabels,//["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        mydatasets: [{
            label: "PUNTUALIDAD",
            backgroundColor: ['#80e27e','#80e27e','#80e27e','#80e27e','#80e27e','#80e27e','#80e27e','#80e27e','#80e27e','#80e27e','#80e27e','#80e27e'],
            borderColor: ['#087f23','#087f23','#087f23','#087f23','#087f23','#087f23','#087f23','#087f23','#087f23','#087f23','#087f23','#087f23'],
            borderWidth: 1,
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
        },
        {
            label: "ATRASOS",
            backgroundColor: ['#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7','#4fc3f7'],
            borderColor: ['#01579b','#01579b','#01579b','#01579b','#01579b','#01579b','#01579b','#01579b','#01579b','#01579b','#01579b','#01579b'],
            borderWidth: 1,
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
        },
        {
            label: "PERMISOS",
            backgroundColor: ['#ff9800','#ff9800','#ff9800','#ff9800','#ff9800','#ff9800','#ff9800','#ff9800','#ff9800','#ff9800','#ff9800','#ff9800'],
            borderColor: ['#e65100','#e65100','#e65100','#e65100','#e65100','#e65100','#e65100','#e65100','#e65100','#e65100','#e65100','#e65100'],
            borderWidth: 1,
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
        },
        {
            label: "FALTAS",
            backgroundColor: ['#ef5350','#ef5350','#ef5350','#ef5350','#ef5350','#ef5350','#ef5350','#ef5350','#ef5350','#ef5350','#ef5350','#ef5350'],
            borderColor: ['#c62828','#c62828','#c62828','#c62828','#c62828','#c62828','#c62828','#c62828','#c62828','#c62828','#c62828','#c62828'],
            borderWidth: 1,
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
        },
        {
            label: "ABANDONOS",
            backgroundColor: ['#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6','#AE4FF6'],
            borderColor: ['#8609E7','#8609E7','#8609E7','#8609E7','#8609E7','#8609E7','#8609E7','#8609E7','#8609E7','#8609E7','#8609E7','#8609E7'],
            borderWidth: 1,
            data: [0,0,0,0,0,0,0,0,0,0,0,0],
        }],
        color:0,
        apoy:[],
        json_atrasos: [],
        json_faltas: [],
        json_abandonos: [],
        json_permisos: [],
        minutostotales:0,
        minconsegundos:0,
        segundostotales:0,
        segundos:0,
        faltas_totales:0,
        abandonos_totales:0,
        permisos_totales:0,
        fechainicio:'',
        fechafin:'',
        label: "",
        backgroundColor:[],
        borderColor: [],
        borderWidth: 0,
        data: [],


    };
  },
  computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
        created()
        {

          var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
          var cont=JSON.parse(localStorage.getItem('usuario')).password;
          
              let compre = this;
              axios.post(compre.store+'/cons2',{
                  usuario:usuar+"",
                  contraseña:cont+""
              }).then(function (response)
              {
                  CARNET_= response.data;
                 
                  axios.post(compre.store+'/meses_reportes', {
                    carnetsito:CARNET_+"",
                  }).then(function (response)
                  {
                      console.log("rreportes meses ", response.data); 
                      
                    for(var u=0;u<response.data.length;u++)
                      {
                        compre.mydatasets[u].data=response.data[u].datitos;
                      }  
                    
                      
                      console.log("este es david ", compre.mydatasets)
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
              

              //var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
              //var cont=JSON.parse(localStorage.getItem('usuario')).password;
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
                          componen.ke = response.data;
                      }).

                          catch(function (error)
                          {
                              console.log("error", error)
                          });

                    console.log("usu-> ",usuar);
                    console.log("cont-> ",cont);


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
                            console.log("--> ",this.apoy[k]);
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




              //var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
              //var cont=JSON.parse(localStorage.getItem('usuario')).password;
          this.modal=false;
          console.log("jgjha",this.dates);

           let compa = this;
              axios.post(compa.store+'/cons2',{
                  usuario:usuar+"",
                  contraseña:cont+""
              }).then(function (response)
              {
                    CARNET_= response.data;
                    console.log("CI ORN-> ", response.data)//resultado = response.data;
                    axios.post(compa.store+'/consultaestad',{
                          codigousu:CARNET_+"",
                          xxx: compa.dates[0],
                          zzz: compa.dates[1],//fecha.getFullYear()+"-"+ceromes+(fecha.getMonth()+1)+"-"+fecha.getDate()+""
                          yyy: "si",
                    }).then(function (response)
                    {
                       console.log("cxcxc ", response.data);//resultado = response.data;
                        compa.lista_estadistica= response.data[1];
                        compa.json_atrasos=response.data[0];
                        compa.json_faltas=response.data[2];
                        compa.json_abandonos=response.data[3];
                        compa.json_permisos =response.data[4];
                        compa.david=response.data;
                        document.getElementById("content1").innerHTML = compa.lista_estadistica.puntualidad;
                        document.getElementById("content2").innerHTML = compa.lista_estadistica.atrasos;
                        document.getElementById("content3").innerHTML = compa.lista_estadistica.permisos;
                        document.getElementById("content4").innerHTML = compa.lista_estadistica.faltas;
                        document.getElementById("content5").innerHTML = compa.lista_estadistica.abandonos;
                        compa.labels=["PUNTUALIDAD","ATRASOS","PERMISOS","FALTAS", "ABANDONOS"];
                        compa.datasets[0].data=[compa.lista_estadistica.puntualidad,compa.lista_estadistica.atrasos,compa.lista_estadistica.permisos,compa.lista_estadistica.faltas,compa.lista_estadistica.abandonos];
                        console.log("pppp--> ", compa.datasets[0].data);

                        compa.minutostotales=compa.lista_estadistica.minstotales;
                        compa.minconsegundos=compa.lista_estadistica.minutosseg;
                        compa.segundostotales=compa.lista_estadistica.segundostotales;
                        compa.segundos=compa.lista_estadistica.segundos;
                        compa.faltas_totales=compa.lista_estadistica.cont_faltas;
                        compa.abandonos_totales=compa.lista_estadistica.abandonos;
                        compa.permisos_totales=compa.lista_estadistica.cont_permisos;
                        //console.log("zzzzzz--> ",compa.lista_estadistica.cont_permisos);
                        compa.fechainicio=compa.lista_estadistica.fecha_inicio;
                        compa.fechafin=compa.lista_estadistica.fecha_fin;
                        console.log("1. ",compa.minutostotales);
                        console.log("2. ",compa.minconsegundos);
                        console.log("3. ",compa.segundos);
                    }).
                    catch(function (error) {
                        console.log("error", error)
                    });

              console.log("ggrrrr2----> ",compa.david);
             // compa.datasets=[{data:[15,50,50,15],backgroundColor:["pink","green","pink","blue"]}];
              //compa.datasets=[{data:[a,b,c,d],backgroundColor:["orange","green","pink","blue"]}];
 }).
                          catch(function (error)
                          {
                              console.log("error", error)
                          });

             

      },
      methods:
      {
        saves()
        {
            var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
            var cont=JSON.parse(localStorage.getItem('usuario')).password;
            this.modal=false;
            console.log("jgjha",this.dates);

            let compa = this;
            axios.post(compa.store+'/cons2',{
                usuario:usuar+"",
                contraseña:cont+""
            }).then(function (response)
            {
                    CARNET_= response.data;
                    console.log("CI ORN-> ", response.data)//resultado = response.data;
                    axios.post(compa.store+'/consultaestad',{
                          codigousu:CARNET_+"",
                          xxx: compa.dates[0],
                          zzz: compa.dates[1],//fecha.getFullYear()+"-"+ceromes+(fecha.getMonth()+1)+"-"+fecha.getDate()+""
                          yyy: "no",
                    }).then(function (response)
                    {
                       console.log("cxcxc ", response.data);//resultado = response.data;
                        compa.lista_estadistica= response.data[1];
                        compa.json_atrasos=response.data[0];
                        compa.json_faltas=response.data[2];
                        compa.json_abandonos=response.data[3];
                        compa.json_permisos =response.data[4];
                        compa.david=response.data;
                        document.getElementById("content1").innerHTML = compa.lista_estadistica.puntualidad;
                        document.getElementById("content2").innerHTML = compa.lista_estadistica.atrasos;
                        document.getElementById("content3").innerHTML = compa.lista_estadistica.permisos;
                        document.getElementById("content4").innerHTML = compa.lista_estadistica.faltas;
                        document.getElementById("content5").innerHTML = compa.lista_estadistica.abandonos;
                        compa.labels=["PUNTUALIDAD","ATRASOS","PERMISOS","FALTAS", "ABANDONOS"];
                         compa.datasets[0].data=[compa.lista_estadistica.puntualidad,compa.lista_estadistica.atrasos,compa.lista_estadistica.permisos,compa.lista_estadistica.faltas,compa.lista_estadistica.abandonos];
                        console.log("pppp--> ", compa.datasets[0].data);
                        
                        compa.minutostotales=compa.lista_estadistica.minstotales;
                        compa.minconsegundos=compa.lista_estadistica.minutosseg;
                        compa.segundostotales=compa.lista_estadistica.segundostotales;
                        compa.segundos=compa.lista_estadistica.segundos;
                        compa.faltas_totales=compa.lista_estadistica.cont_faltas;
                        compa.abandonos_totales=compa.lista_estadistica.abandonos;
                                                compa.permisos_totales=compa.lista_estadistica.cont_permisos;

                        compa.fechainicio=compa.lista_estadistica.fecha_inicio;
                        compa.fechafin=compa.lista_estadistica.fecha_fin;
                        console.log("1. ",compa.minutostotales);
                        console.log("2. ",compa.minconsegundos);
                        console.log("3. ",compa.segundos);
                    }).
                    catch(function (error) {
                        console.log("error", error)
                    });
              console.log("ggrrrr2----> ",compa.david);
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
  h1{
    font-family:roboto;
  }
</style>
