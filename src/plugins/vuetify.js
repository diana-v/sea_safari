import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css';
import colors from 'vuetify/lib/util/colors'

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



