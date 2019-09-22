import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Notifications);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
