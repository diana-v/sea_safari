import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import axios from "axios";


Vue.config.productionTip = false
Vue.use(BootstrapVue);

Vue.prototype.$http = axios;
Vue.prototype.$FB_KEY = process.env.VUE_APP_FB_API_KEY;
Vue.prototype.$FB_HOST = process.env.VUE_APP_FB_API_HOST;
Vue.prototype.$FB_PAGE = process.env.VUE_APP_FB_PAGE;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

