import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.orange.darken1,
                secondary: colors.orange.lighten4,
                accent: colors.orange.base,
                background: colors.blueGrey.lighten5
            },
        },
    },
});
