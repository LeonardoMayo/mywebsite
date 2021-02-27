import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#EEEEEE',
                secondary: '#9CCC65',
                accent: '#8D6E63',
                error: '#b71c1c',
            },
        },
    },
});
