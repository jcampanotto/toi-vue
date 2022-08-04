import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

import ProductsAll from './components/ProductsAll.vue'
import ProductSingle from './components/ProductSingle.vue'
import NotFound from './components/NotFound.vue'
const router = new VueRouter({
  routes: [
    { path: '/products/:id', component: ProductSingle},
    { path: '/', component: ProductsAll},
    { path: '*', component: NotFound}
  ]
})

new Vue({
  router,
  template: '<App />',
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
