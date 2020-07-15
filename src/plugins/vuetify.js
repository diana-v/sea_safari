import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram'
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook'
import {faCircle} from '@fortawesome/free-solid-svg-icons/faCircle'
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faInstagram, faFacebook, faCircle);

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'faSvg'
    },
    theme: {
        light: {
            error: colors.red.darken4, // #E53935
        },
        options: {
            customProperties: true,
        },
    },
})



