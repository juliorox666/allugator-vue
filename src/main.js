// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(ElementUI)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

// vuex
import store from '@/store'

const axiosConfig = {
  baseURL: 'http://localhost:8000/',
  timeout: 30000,
};
Vue.prototype.$axios = axios.create(axiosConfig);
Vue.prototype.$axios.interceptors.request.use(function (request) {

  request.headers = request.headers || {};
  if (localStorage.getItem('token')) {
    // may also use sessionStorage
    request.headers.Authorization = 'Basic ' + localStorage.getItem('token');
  }

  return request;
}, function (rejection) {
  // Do something with request error
  var rejection = error.request;

  return Promise.reject(rejection);
});

// Add a response interceptor
Vue.prototype.$axios.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  // Do something with response error
  var rejection = error.response

  return Promise.reject(rejection);
});

router.beforeEach((to, from, next) => {

  if(to.name === "produto" || to.name === "meus_produtos") {
    if(localStorage.getItem('token')) {
      next();
    }
    next('/login');
  }

  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
