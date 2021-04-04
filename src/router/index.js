import Vue from 'vue'
import Router from 'vue-router'
import EnterForm from '@/components/EnterForm'
import Auth from "@/components/Auth";
import Game from '@/components/Game'
import Admin from "@/components/Admin";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/',
      name: 'EnterForm',
      component: EnterForm
    },
    {
      path: "/game",
      name: "game",
      component: Game
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }

  ]
})
