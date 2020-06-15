<template>
  <component :is="layout"></component>
</template>
<script>
  /********************************PARA ALMACEN******************************/
  import LoginLayout from './components/layouts/almacen/Login'
  import PanelprincipalLayout from './components/layouts/almacen/Panelprincipal'
  //import UsuarioLayout from './components/layouts/almacen/PanelPrincipalUsuario'
  import PrincipalLayout from './components/layouts/almacen/Principal'
  /*****************************FIN PARA ALMACEN*****************************/

  import LoginaLayout from './components/layouts/asistencia/LoginAsistencia'
  import PrincipalaLayout from './components/layouts/asistencia/PrincipalAsiste'
  import PrincipalsuperusuLayout from './components/layouts/asistencia/Principalsuperusu'
  import PrincipalsuperadminLayout from './components/layouts/asistencia/Principalsuperadmin'
  import PrincipalapoyoLayout from './components/layouts/asistencia/Principalapoyo'

  import {mapState} from 'vuex'
  
  export default
  {
    components: {LoginLayout, PanelprincipalLayout,LoginaLayout, PrincipalaLayout,PrincipalsuperusuLayout,PrincipalsuperadminLayout,PrincipalapoyoLayout},//PrincipalsuperadminLayout,PrincipalapoyoLayout},
    computed: mapState(['layout'])
  }
</script>

