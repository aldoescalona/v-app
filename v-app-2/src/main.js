import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2';
import Loading from 'vue-loading-overlay';
// import { LoadingPlugin } from 'vue-loading-overlay';

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './styles/styles.scss'
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'vue2-datepicker/index.css';

import 'vue2-datepicker/locale/es';
// import 'vue-loading-overlay/dist/css/index.css';

Vue.use(PiniaVuePlugin)
Vue.use(VueSweetalert2)
Vue.use(Loading, {
  color: '#DB0011',
	loader: 'dots',
	width: 128,
	height: 128,
	backgroundColor: '#ffffff',
	opacity: 0.8,
	zIndex: 999,
})

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
