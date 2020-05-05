import Vue from 'vue'
import Router from 'vue-router'
import Produtos from '@/components/produtos'
import Login from '@/components/login'
import Produto from '@/components/produto'
import MeusProdutos from '@/components/meus-produtos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'produtos',
      component: Produtos
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/produto/{:id}',
      name: 'produto',
      component: Produto
    },
    {
      path: '/meus-produtos',
      name: 'meus_produtos',
      component: MeusProdutos
    }
  ]
})
