import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram'
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook'
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faInstagram, faFacebook);

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        light: {
            error: colors.red.darken4, // #E53935
        },
        options: {
            customProperties: true,
        },
    },
})



