import Vue from 'vue'
import Router from 'vue-router'
/********************************PARA ALMACEN******************************/
import Login_almacen from './views/almacen/Login_almacen.vue'
import Principal from './views/almacen/Principal.vue'
import Producto from './views/almacen/Producto.vue'
import Unidad from './views/almacen/Unidad.vue'
import Grupo from './views/almacen/Grupo.vue'
import Reporte from './views/almacen/Reporte.vue'
import Proveedor from './views/almacen/Proveedor.vue'
import Cargo from './views/almacen/Cargo.vue'
import Dirección from './views/almacen/Dirección.vue'
import Regional from './views/almacen/Regional.vue'
import Salidas from './views/almacen/Salidas.vue'
import Usuario from './views/almacen/Usuario.vue'
import Solicitud from './views/almacen/Solicitud.vue'
import Puede from './views/almacen/Puede.vue'
import Entradas from './views/almacen/Entradas.vue'
import Rol from './views/almacen/Rol.vue'
import Ingreso from './views/almacen/Ingreso.vue'
import SalidaUsuario from './views/almacen/SalidaUsuario.vue'
import UsuarioHistorial from './views/almacen/UsuarioHistorial.vue'
/*****************************FIN PARA ALMACEN*****************************/

/********************************PARA ASISTENCIA******************************/
import Sirve from './views/asistencia/Sirve.vue'
import Login_asistencia from './views/asistencia/Login_asistencia.vue'
import PrincipalAsiste from './views/asistencia/PrincipalAsiste.vue'
import CopyPaste from './views/asistencia/CopyPaste.vue'
import Estadisticas from './views/asistencia/Estadisticas.vue'
import Papeleta from './views/asistencia/Papeleta.vue'
import Grafico from './views/asistencia/Grafico.vue'
import Configuracion from './views/asistencia/Configuracion.vue'
import Consultatodo from './views/asistencia/Consultatodo.vue'
import Consultausuarios from './views/asistencia/Consultausuarios.vue'
import Usuarios from './views/asistencia/Usuarios.vue'
import Prueba from './views/asistencia/Prueba.vue'
import Feriados from './views/asistencia/Feriados.vue'
import Papeletashoy from './views/asistencia/Papeletashoy.vue'
import Notificacion from './views/asistencia/Notificacion.vue'
import Paramesdire from './views/asistencia/Paramesdire.vue'
import Pasante from './views/asistencia/Pasante.vue'
import Reincorpora from './views/asistencia/Reincorpora.vue'
import Reporte_asiste from './views/asistencia/Reporte_asiste.vue'
import Cale from './views/asistencia/Cale.vue'
import Estadisticasadmin from './views/asistencia/Estadisticasadmin.vue'
import Admiusuarios from './views/asistencia/Admiusuarios.vue'
/*****************************FIN PARA ASISTENCIA*****************************/

import Inicio from './views/Inicio.vue'


Vue.use(Router)

export default new Router({
  routes: [
    /******************************RUTAS PARA ALMACEN******************************/
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/almacen',
      name: 'login_almacen',
      component: Login_almacen
    },
    {
      path: '/principal',
      name: 'principal',
      component: Principal
    },  
    {
      path: '/admin/producto',
      name: 'producto',
      component: Producto
    },
    {
      path: '/admin/almacen/unidad',
      name: 'unidad',
      component: Unidad
    },
    {
      path: '/admin/almacen/grupo',
      name: 'grupo',
      component: Grupo
    },
    {
      path: '/admin/reporte',
      name: 'reporte',
      component: Reporte
    },
    {
      path: '/admin/almacen/proveedor',
      name: 'proveedor',
      component: Proveedor
    },
    {
      path: '/admin/administracion/cargo',
      name: 'cargo',
      component: Cargo
    },
    {
      path: '/admin/administracion/dirección',
      name: 'dirección',
      component: Dirección
    },
    {
      path: '/admin/administracion/regional',
      name: 'regional',
      component: Regional
    },
    {
      path: '/admin/salidas',
      name: 'salidas',
      component: Salidas
    },
    {
      path: '/admin/usuario',
      name: 'usuario',
      component: Usuario
    },
    {
      path: '/admin/solicitud',
      name: 'solicitud',
      component: Solicitud
    },
    {
      path: '/puede',
      name: 'puede',
      component: Puede
    },
    {
      path: '/admin/entradas',
      name: 'entradas',
      component: Entradas
    },
    {
      path: '/admin/administracion/rol',
      name: 'roles',
      component: Rol
    },
    {
      path: '/admin/ingreso',
      name: 'ingreso',
      component: Ingreso
    },
    {
      path: '/usuario/solicitud',
      name: 'salida_usuario',
      component: SalidaUsuario
    },
    {
      path: '/usuario/historial',
      name: 'usuario_historial',
      component: UsuarioHistorial
    },
    /**************************FIN RUTAS PARA ALMACEN********************************/
    /*************************INICIO RUTAS PARA ASISTENCIA***************************/
    {
      path: '/sirve',
      name: 'Sirve',
      component: Sirve
    },
    {
      path: '/asistencia',
      name: 'login_asistencia',
      component: Login_asistencia
    },
    {
      path: '/principal_asiste',
      name: 'PrincipalAsiste',
      component: PrincipalAsiste
    },
    {
      path: '/copypaste',
      name: 'CopyPaste',
      component: CopyPaste
    },
    {
      path: '/estadisticas',
      name: 'Estadisticas',
      component: Estadisticas
    },
    {
      path: '/reporte_asiste',
      name: 'reporte_asiste',
      component: Reporte_asiste
    },
    {
      path: '/papeleta',
      name: 'Papeleta',
      component: Papeleta
    },
    {
      path: '/configuracion',
      name: 'Configuracion',
      component: Configuracion
    },
    {
      path: '/grafico',
      name: 'Grafico',
      component: Grafico
    },
    {
      path: '/consultatodo',
      name: 'Consultatodo',
      component: Consultatodo
    },
    {
      path: '/consultausu',
      name: 'Consultausuarios',
      component: Consultausuarios
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios
    },
    {
      path: '/prueba',
      name: 'Prueba',
      component: Prueba
    },
    {
      path: '/feriados',
      name: 'Feriados',
      component: Feriados
    },
    {
      path: '/notificacion',
      name: 'Notificacion',
      component: Notificacion
    },
    {
      path: '/papeletashoy',
      name: 'Papeletashoy',
      component: Papeletashoy
    },
    {
      path: '/paramesdire',
      name: 'Paramesdire',
      component: Paramesdire
    },
    {
      path: '/pasante',
      name: 'Pasante',
      component: Pasante
    },
    {
      path: '/reincorpora',
      name: 'Reincorpora',
      component: Reincorpora
    },
    {
      path: '/copiar',
      name: 'CopyPaste',
      component: CopyPaste
    },
    {
      path: '/cale',
      name: 'Calen',
      component: Cale
    },
    {
      path: '/estadisticasadmin',
      name: 'Estadisticasadmin',
      component: Estadisticasadmin
    },
    {
      path: '/adminusuario',
      name: 'Admiusuarios',
      component: Admiusuarios
    },
    /*****************************FIN RUTAS PARA ASISTENCIAS*****************************/

  ]
})
