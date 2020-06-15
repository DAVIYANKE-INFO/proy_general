
<template >
<v-app :style="{ 'background-image' : 'url(' + image + ') ','background-repeat' : 'no-repeat','background-size': '100% 100%'  }">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>REGISTRO DE ASISTENCIAS</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Usuario" v-model="codigousuario"></v-text-field>
                  
                  <v-text-field 
                  id="password" 
                  prepend-icon="lock" 
                  :append-icon="eye ? 'visibility_off' : 'visibility'"
                  @click:append="cambiaestado" 
                  v-model="password" 
                  label="Contraseña" 
                  :type="show4 ? 'text' : 'password'"
                  @keyup.enter="login()"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn style="color:white;" color="green" @click="login()">INGRESAR</v-btn>
                  <!--<v-btn block color="green" @click="CORRE()">VERIFICA</v-btn>
                  <v-btn block color="red" @click="len > 0 && 1==1 ? $router.push('/principal') : alerta()">INGRESAR</v-btn>-->
              </v-card-actions>
            </v-card>
          </v-flex>

            
        </v-layout>
            <v-btn class="ma-2" @click.stop="$router.push('/')" outlined large fab color="white">
              <v-icon color="blue">mdi-format-list-bulleted-square</v-icon>
            </v-btn>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    export default 
    {     
      data()
      {
        return{
          eye:true,
          vir:5,
          drawer: null,
          show4:false,
          valor:{},
          directores:{},
          cargoapoyos:{},
                      //image:'https://i.ibb.co/8DF2tTP/fondotarea.png',
                      //image:'https://i.ibb.co/3pjBW8G/fondidi.png',

          image:'/fondosideas.jpg',
          codigousuario:'',
          password:'',
          director_daf_login:'',
          director_daf_password:'',
          director_dcf_login:'',
          director_dcf_password:'',
          director_dj_login:'',
          director_dj_password:'',
          director_dge_login:'',
          director_dge_password:'',
          tecnico_rrhh_login:'',
          tecnico_rrhh_password:'',
          analista_rrhh_login:'',
          analista_rrhh_password:'',
          
          lista:[],
          len:0,
          listaUsuarios: [],
          listaapoyos:[],
          usus:[],
          contras:[]
          }   
        },

    props:
    {
      source: String
    },
        methods: 
        {
         cambiaestado () 
          {
          this.eye = !this.eye;
          this.show4 = !this.show4;
          },
            envio()
            {
               // this.valor={"codigousuario":this.codigousuario,"password":this.password,"director_daf_login":this.director_daf_login},
               // localStorage.setItem("usuario",JSON.stringify(this.valor))
            },
            CORRE()
            {
                console.log('LISTA:   ',this.lista)
                console.log('LONGITUD:   ',this.len)
            },
            alerta()
            {
              alert("REVISE SUS DATOS Y VUELVA A INTENTARLO")
            },
               login(e) 
                {
          
                      let comp = this;
                      axios.post(comp.store+'/cons',{
                          usuario:comp.codigousuario,
                          contraseña:comp.password
                      }).then(function (response) 
                      {
                          comp.listaUsuarios = response.data;
                          comp.len=comp.listaUsuarios.length;
                          console.log("respuesta: ", response.data)//resultado = response.data;
                          console.log("LONG: ",comp.len)//resultado = response.data;

                          if(comp.len > 0)
                          {
                              comp.valor={"codigousuario":comp.codigousuario,"password":comp.password},

                      axios.post(comp.store+'/consultasuperusers',{}).then(function (response) 
                      {
                          console.log("resp users-> ", response.data)//resultado = response.data;
                          comp.listasuperuser = response.data;  
                          //console.log("dafo->", componento.listasuperuser.DAF[0].paterno);
                          comp.director_daf_login=comp.listasuperuser.DAF[0].usuario;
                          comp.director_daf_password=comp.listasuperuser.DAF[0].contraseña;

                          comp.director_dcf_login=comp.listasuperuser.DCF[0].usuario;
                          comp.director_dcf_password=comp.listasuperuser.DCF[0].contraseña;

                          comp.director_dj_login=comp.listasuperuser.DJ[0].usuario;
                          comp.director_dj_password=comp.listasuperuser.DJ[0].contraseña;

                          comp.director_dge_login=comp.listasuperuser.DGE[0].usuario;
                          comp.director_dge_password=comp.listasuperuser.DGE[0].contraseña;

                          comp.tecnico_rrhh_login=comp.listasuperuser.RRHH[0].usuario;
                          comp.tecnico_rrhh_password=comp.listasuperuser.RRHH[0].contraseña;

                          comp.analista_rrhh_login=comp.listasuperuser.AUXRRHH[0].usuario;
                          comp.analista_rrhh_password=comp.listasuperuser.AUXRRHH[0].contraseña;

                          comp.listaapoyos=comp.listasuperuser.APOYOS;
                          console.log("apoyos SIII--> ",comp.listaapoyos);
                          var cadena;
                          var pal='';
                          for(var k=0;k<comp.listaapoyos.length;k++)
                         {
                           var p="login_apoyo_"+(k+1);
                           var q="password_apoyo_"+(k+1);
                           if(k==0)
                           {
                            pal=pal+'{"'+p+'":"'+comp.listaapoyos[k].usuario+'","'+q+'":"'+comp.listaapoyos[k].contraseña+'",';
                           }
                           else
                           {
                             if(k==(comp.listaapoyos.length-1))
                             {
                               pal=pal+'"'+p+'":"'+comp.listaapoyos[k].usuario+'","'+q+'":"'+comp.listaapoyos[k].contraseña+'"}';
                             }
                             else
                             {
                               pal=pal+'"'+p+'":"'+comp.listaapoyos[k].usuario+'","'+q+'":"'+comp.listaapoyos[k].contraseña+'",';
                             }  
                           }
                             console.log("k-->",pal);
                         }
                         console.log("pasa->: ",pal);
                         
                        var o = JSON.parse(pal);
                        comp.cargoapoyos=o;
                          console.log("list apoyitos-> ",pal);
                            comp.directores={"dir_dge_login":comp.director_dge_login,"dir_dge_password":comp.director_dge_password,"dir_daf_login":comp.director_daf_login,"dir_daf_password":comp.director_daf_password,"dir_dcf_login":comp.director_dcf_login,"dir_dcf_password":comp.director_dcf_password,"dir_dj_login":comp.director_dj_login,"dir_dj_password":comp.director_dj_password,"tec_rrhh_login":comp.tecnico_rrhh_login,"tec_rrhh_password":comp.tecnico_rrhh_password,"analis_rrhh_login":comp.analista_rrhh_login,"analis_rrhh_password":comp.analista_rrhh_password},
                            localStorage.setItem("directores",JSON.stringify(comp.directores));
                            localStorage.setItem("usuario",JSON.stringify(comp.valor));  
                            localStorage.setItem("apoyos",JSON.stringify(comp.cargoapoyos));                           
                            comp.$router.push('/principal_asiste');
                      }).

                          catch(function (error) 
                          {
                              console.log("error", error)
                          });
                          } 
                          else
                          {
                            comp.alerta();
                          }


                          }).
                          catch(function (error) 
                          {
                              console.log("error", error)
                          });
                }
            },

        created () 
        {
            this.$store.commit('SET_LAYOUT', 'logina-layout')
        }
    }
</script>

<style>
/*background-image: url('/assets/david.jpg');*/
</style>