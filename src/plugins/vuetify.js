import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        themes: {
            dark: {
                background: '#78909C'
            },
            light:{
                background:'#B0BEC5'
            },
           
        }
    }
});
