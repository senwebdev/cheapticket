import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import Booking from './views/Booking/Booking.vue';
import Contact from './views/Contact/Contact.vue';
import Faq from './views/Faq/Faq.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking,
    },
    {
      path: '/contact',
      name: 'contact-us',
      component: Contact,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About/About.vue'),
    },
  ],
});
