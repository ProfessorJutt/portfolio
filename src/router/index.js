import Vue from 'vue'
import Router from 'vue-router'

/* --------- Components --------- */
import Home from '@/components/Home'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
