import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import { sync } from 'vuex-router-sync'
import store from './store/store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Notifications);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
