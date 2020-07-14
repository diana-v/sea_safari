import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import {VBScrollspyPlugin} from 'bootstrap-vue'


Vue.use(VBScrollspyPlugin);
Vue.use(vuetify);
Vue.config.productionTip = false;

import(/* webpackPreload: true */ "./views/Home");
import(/* webpackPreload: true */ "./views/Juodkrante");
import(/* webpackPreload: true */ "./views/Jura");
import(/* webpackPreload: true */ "./views/Minges-Kaimas");
import(/* webpackPreload: true */ "./views/Nida");
import(/* webpackPreload: true */ "./views/Privatus-Vakareliai");
import(/* webpackPreload: true */ "./views/Vandens-Taksi");

Vue.prototype.$http = axios;
Vue.prototype.$contact_url = process.env.VUE_APP_CONTACT_URL;
Vue.prototype.$reservation_url = process.env.VUE_APP_RESERVATION_URL;


router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

