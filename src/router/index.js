import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from './../Views/HomePage.vue';
import CountryPage from './../Views/CountryPage.vue'

const routes = [
    { 
      path: '/',
      component: HomePage
    },
    { 
      path: '/country',
      name: 'CountryPage',
      component: CountryPage,
      props: true
    }
]

  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
export default new Router({
    routes // short for `routes: routes`
})