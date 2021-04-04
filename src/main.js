// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import LoadScript from 'vue-plugin-load-script';
import VueCookies from 'vue-cookies'
import qs from 'qs'
import CyrillicToTranslit from 'cyrillic-to-translit-js';


const cyrillicToTranslit = new CyrillicToTranslit();
Vue.prototype.translit = cyrillicToTranslit
Vue.prototype.qs = qs

import 'bootstrap/dist/css/bootstrap.css'

// Optionally install the BootstrapVue icon components plugin

Vue.use(LoadScript);
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  components: { App },
}).$mount("#app")
