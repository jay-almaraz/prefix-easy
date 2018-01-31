import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import FourOhFour from '@/components/FourOhFour';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/*',
      name: 'FourOhFour',
      component: FourOhFour,
    },
  ],
});
