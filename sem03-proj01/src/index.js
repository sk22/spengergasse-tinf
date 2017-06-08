import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.css';
import './styles.scss';

import App from './components/App.vue';
import routes from './pages';

Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: 'amber',
  accent: 'deep-purple',
  warn: 'red',
});

Vue.material.registerTheme('features', {
  primary: 'blue',
  accent: 'red',
  warn: 'pink',
});

Vue.material.registerTheme('frameworks', {
  primary: 'pink',
  accent: 'cyan',
  warn: 'indigo',
});

Vue.material.registerTheme('trends', {
  primary: 'green',
  accent: 'light-blue',
  warn: 'purple',
});

Vue.material.registerTheme('history', {
  primary: 'teal',
  accent: 'pink',
  warn: 'brown',
});

Vue.material.registerTheme('imprint', {
  primary: 'blue-grey',
  accent: 'brown',
  warn: 'grey',
});

new Vue({
  el: '#app',
  router: new VueRouter({
    routes, linkActiveClass: 'md-active router-link-active',
  }),
  components: { App },
  render: c => c(App),
});
