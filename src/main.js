import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vue from 'vue'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");

