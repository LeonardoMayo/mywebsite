import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";
import Vuex from 'vuex';
import store from './store';
// Components
import Home from "@/views/Home";
import ARPvPDatenschutz from '@/components/thesis/Datenschutz';
import KickoffThesisApp from "@/components/articles/KickoffThesisApp";

const routes = [
  // Home
  { path: '/', name:'home', component: Home },
  { path: '/ar-pvplatform/kickoff', name: 'ARPvPErsterArtikel', component: KickoffThesisApp },
  { path: '/ar-pvplatform/datenschutz', name: 'ARPvPDatenschutz', component: ARPvPDatenschutz },
  { path: '/ar-pvplatform/privacy', name: 'ARPvPPrivacy', component: ARPvPDatenschutz }
]

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex)

// Vue.prototype.$base_db_url = "http://localhost:8080/"

// Vue Router
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
