import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Enfermedad from './components/Enfermedad.vue'
import Signo from './components/Signo.vue'
import Agenda from './components/Agenda.vue'
import Alerta from './components/Alerta.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/enfermedades',
      name: 'enfermedades',
      component: Enfermedad
    },
    {
      path: '/signos',
      name: 'signos',
      component: Signo
    },
    {
      path: '/agendas',
      name: 'agendas',
      component: Agenda
    },
    {
      path: '/alertas',
      name: 'alertas',
      component: Alerta
    }
  ]
})
