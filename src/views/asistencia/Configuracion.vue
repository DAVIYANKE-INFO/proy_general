<template>
<center>
 <v-form v-model="valid">

        <v-container grid-list-md text-xs-center>
            <v-flex sm12>
                <div class="chartjs-size-monitor">
                    <v-card hover="true" tile="true">
                    <center><v-card-text class="px-0"><h1 style="color:blue;font-family:roboto;font-size:35px;" @click="asigna()">CONFIGURACION DE USUARIO</h1></v-card-text></center>
                    </v-card>
                </div>
            </v-flex>
        </v-container>

        <v-flex sm10>
        <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
              <v-card class="elevation-12">
                  <v-card-text>
                      <v-form>
                        <v-text-field 
                            prepend-icon="person" 
                            name="login" 
                            label="Usuario"
                            v-model="codigousuario">
                        </v-text-field>
                        <v-text-field 

             id="password" 
                  prepend-icon="lock" 
                  :append-icon="eye ? 'visibility':'visibility_off'"
                  @click:append="vero" 
                  v-model="contraseña" 
                  label="Contraseña" 
                  :type="show4 ? 'text' : 'password'"
                >
                        </v-text-field>
                  
                       </v-form>
                                <v-btn
                  slot="activator"
                  dark
                  color="success" @click="dialog = true">ACTUALIZAR DATOS</v-btn>

                  
                  </v-card-text>
              </v-card>
            </v-flex>
        </v-layout>
        </v-container>
        </v-flex>
 

      <v-container fluid>
				<v-flex xs6 class="text-xs-center text-sm-center text-md-center text-lg-center">
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Seleccione su imagen : " @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
				</v-flex>
			</v-container>

  

    <div class="col-md-2">


 <v-dialog
        v-model="dialog"
        max-width="500"
      >
        <v-card>
          <v-card-title class="headline">NOTIFICACIÓN</v-card-title>
  
          <v-card-text>
          Una vez actualizados los datos tiene que iniciar sesion con los datos cambiados.
          ¿Esta seguro que quiere actualizar los datos?.
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
              @click="actualiza()"
            >
              ACEPTAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


          <v-btn
                  slot="activator"
                  dark
                  color="info" @click="dialog2 = true">SUBIR FOTO</v-btn>
<v-dialog
        v-model="dialog2"
        max-width="300"
      >
      

     <!-- <v-icon 
                                    style="cursor:pointer;"
                                    slot="activator" 
                                    color="red" 
                                    class="mx-3" 
                                    @click="recarga()"
                                    >
                                    autorenew
                                    </v-icon>-->

         
        <v-card>
          <v-card-title class="headline">NOTIFICACIÓN</v-card-title>
  
          <v-card-text>
          ¿Esta seguro que quiere guardar la imagen?.
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
              @click="actualizando()"
            >
              ACEPTAR
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

                                 <v-btn flat icon color="red lighten-2" @click="recarga()">
          <v-icon
          color="red" 
                                    class="mx-3" 
                                    >autorenew</v-icon>
        </v-btn>


            </div>

    

 <!--<ul>
                <li v-for="list in keep">{{list.data}}</li>
                <img v-bind:src="'data:image/jpeg;base64,'+keep.data" width="200" height="200"/>
            </ul>-->



 </div>
  </v-form>
</center>
</template>

<script>
var CARNET_;
export default {
  data: () => ({
    codigousuario:JSON.parse(localStorage.getItem('usuario')).codigousuario+"",
    codigoRules: [
        v => !!v || 'El codigo es requerido',
        v => v.length <= 50 || 'El codigo tiene que tener mas de 10 caracteres'
      ],
      contraseña: JSON.parse(localStorage.getItem('usuario')).password+"",
      contraseñaRules: [
        v => !!v || 'La contraseña es requerido',
        v => v.length <= 50 || 'La contraseña tiene que tener mas de 50 caracteres'
      ],
valor:{},
keep:[],
        title: "Image Upload",
        dialog: false,
        dialog2: false,
         show4:false,
		imageName: '',
		imageUrl: '',
		imageFile: '',
                      color:0,
                      apoy:[]

    }),

    methods: {
        pickFile () {
            this.$refs.image.click ()
        },
           vero () {
      this.eye = !this.eye;
      this.show4 = !this.show4;


    },
      
		
		onFilePicked (e) 
    {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name;
        console.log("NOMBRE : ", this.imageName);
				if(this.imageName.lastIndexOf('.') <= 0) 
        {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => 
          {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
                    console.log("NOMBRE : ", this.imageUrl);

          })
			} 
      else 
      {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
		},
     actualizando()
     {
       this.dialog2= true;
          var USUA=JSON.parse(localStorage.getItem('usuario')).codigousuario;
          var CONT=JSON.parse(localStorage.getItem('usuario')).password;

                      let compa = this;
                      
                      axios.post(compa.store+'/cons2',{
                          usuario:USUA+"",
                          contraseña:CONT+"",
                      
                      }).then(function (response) 
                      {
                           CARNET_= response.data;
                           console.log("CI ORIGEN-> ", response.data)//resultado = response.data;
                          // axios.post('/api/upload',{image: this.image}).then(response => {   });
                              axios.post(compa.store+'/primero', {
                              cii:CARNET_+"", 
                              imag: compa.imageUrl,
                              nameimg:compa.imageName
                              })
                              .then(function (response) {


                                      console.log(response);
                                      compa.keep=response;
                                      console.log(compa.keep.data);

                                       if(compa.keep == [])
                          {
                            
                              compa.$toastr.error('VERIFIQUE LOS DATOS POR FAVOR.', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});
                          }
                          else
                          {
                              compa.$toastr.success('La imagen fue enviada exitosamente.', 'HECHO', {timeOut: 2000});
                          }
                       compa.dialog2= false;
                              })
                              .catch(function (error) {
                          compa.dialog2= false;
                                compa.$toastr.error('VERIFIQUE LOS DATOS POR FAVOR.', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});

                              console.log(error);
                              });
                      })
                      .catch(function (error) {
                      console.log(error);
                      });
            },
            recarga()
            {
                location.reload();
            },

  actualiza() 
        {
          var USUA=JSON.parse(localStorage.getItem('usuario')).codigousuario;
          var CONT=JSON.parse(localStorage.getItem('usuario')).password;
          this.imag=document.getElementById("file");

          console.log('david acoore: ',this.imageName);
                      let compa = this;
                      axios.post(compa.store+'/cons2',{
                          usuario:USUA+"",
                          contraseña:CONT+"",

                      }).then(function (response) 
                      {
                           CARNET_= response.data;
                           console.log("CI ORIGEN-> ", response.data)//resultado = response.data;


                      console.log("ACTUAL USUARIO: ", USUA);
                      console.log("ACTUAL PASSWORD: ", CONT);
                      console.log("LOGIN NEW: ", compa.codigousuario);
                      console.log("PASSWORD NEW: ", compa.contraseña);
                    compa.dialog= true;
                    axios.post(compa.store+'/configuracion',{
                         carnetactual:CARNET_+"",
                        nuevo_login:compa.codigousuario,
                       nuevo_password:compa.contraseña,
                       imag: compa.image,
                  nameimg:compa.nombre_imagen
                       }).then(function (response) 
                    { 
                        console.log("respuesta: ", response.data)//resultado = response.data;
                        compa.keep=response.data

                        localStorage.removeItem("usuario");

                        console.log("%%% : ",compa.keep.usuario);
                        console.log("### : ",compa.keep.contraseña);
                        compa.valor={"codigousuario":compa.keep.usuario,"password":compa.keep.contraseña},
                        localStorage.setItem("usuario",JSON.stringify(compa.valor));

                          if(compa.keep == [])
                          {
                            
                              compa.$toastr.error('REVISE SUS DATOS POR FAVOR.', 'ERROR', {timeOut: 2000});
                          }
                          else
                          {
                        
                              compa.$toastr.success('DATOS ACTUALIZADOS CORRECTAMENTE.', 'HECHO', {timeOut: 2000});
                          }
                          compa.dialog= false;
                    
                    }).
                    catch(function (error) {

                        console.log("error", error)
                        compa.dialog= false;
                         compa.$toastr.error('REVISE SUS DATOS POR FAVOR.', 'ERROR', {positionClass:"toast-bottom-center",timeOut: 2000});

                    });


 }).
                          catch(function (error) 
                          {
                              console.log("error", error)
                          });



                }
                          
   
  },
   created: function()
    {
          var usuar=JSON.parse(localStorage.getItem('usuario')).codigousuario;
          var cont=JSON.parse(localStorage.getItem('usuario')).password;
          console.log("LOGIN: ", usuar);
          console.log("CONTRASEÑA: ", cont);

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

          /*PARA LOS APOYOS*/
   /*var usuar_apoyo_1=JSON.parse(localStorage.getItem('apoyos')).login_apoyo_1;
                    var cont_apoyo_1=JSON.parse(localStorage.getItem('apoyos')).password_apoyo_1;
                    console.log("LINO: ", usuar_apoyo_1);
                    console.log("CONÑAO: ", cont_apoyo_1);
                    var usuar_apoyo_2=JSON.parse(localStorage.getItem('apoyos')).login_apoyo_2;
                    var cont_apoyo_2=JSON.parse(localStorage.getItem('apoyos')).password_apoyo_2;
                    var usuar_apoyo_3=JSON.parse(localStorage.getItem('apoyos')).login_apoyo_3;
                    var cont_apoyo_3=JSON.parse(localStorage.getItem('apoyos')).password_apoyo_3;
                    var usuar_apoyo_4=JSON.parse(localStorage.getItem('apoyos')).login_apoyo_4;
                    var cont_apoyo_4=JSON.parse(localStorage.getItem('apoyos')).password_apoyo_4;
                    var usuar_apoyo_5=JSON.parse(localStorage.getItem('apoyos')).login_apoyo_5;
                    var cont_apoyo_5=JSON.parse(localStorage.getItem('apoyos')).password_apoyo_5;*/
//Object.keys(objetoJson).length
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
          /*PARA LOS APOYOS*/

           let varia =this;
                
                if((usuar==usuar_dir_daf && cont==cont_dir_daf)||(usuar==usuar_dir_dcf && cont==cont_dir_dcf)||(usuar==usuar_dir_dj && cont==cont_dir_dj)||(usuar==usuar_dir_dge && cont==cont_dir_dge))
                {
                      varia.$store.commit('SET_LAYOUT', 'principalsuperadmin-layout');
                                         // location.reload(); 
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
          
          axios.post(varia.store+'/cons',{
              usuario:usuar+'',
              contraseña:cont
          }).then(function (response) 
          {
              console.log("resp-> ", response.data)//resultado = response.data;
              varia.lista = response.data;
          }).

          catch(function (error) 
          {
              console.log("error", error)
          });



    }
}
    
           

</script>