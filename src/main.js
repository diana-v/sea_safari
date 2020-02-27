import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import toolbar from './components/toolbar'
import VueScrollSnap from "vue-scroll-snap";

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.component("app-toolbar", toolbar)
Vue.component("vue-scroll-snap", VueScrollSnap)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

