import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css' 
import 'material-design-icons-iconfont/dist/material-design-icons.css'
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
            }
        }
    },
    icons: {
        iconfont: 'mdi' || 'md' || 'fa', 
      },
});
