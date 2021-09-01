import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        text: '#000000',
        primary: '#f8f8fb',
        secondary: '#ffffff',
        chevron: '#270561',
        btn: '#7c5dfa',
        del: '#FA5D5D',
        form: '#888eb0',
        due: '#888eb0'
      },
      dark: {
        text: '#FFFFFF',
        primary: '#141625',
        secondary: '#252945',
        chevron: '#270561',
        btn: '#7c5dfa',
        del: '#FA5D5D',
        form: '#7e88c3',
        due: '#7e88c3'
      }
    },
  },
});
