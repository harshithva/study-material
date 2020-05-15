import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import Fragment from 'vue-fragment'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import StudyMaterial from './components/StudyMaterial.vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Fragment.Plugin)
Vue.use(BootstrapVue);
Vue.use(VueRouter)



const routes = [
  { path: '/', component: Home },
  {
    path: '/chemistry', component: StudyMaterial
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
