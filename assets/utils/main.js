import Vue from 'vue'
import App from '../../src/App.vue'
// import element from 'element-ui'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element);
new Vue({
  el: '#app',
  render: h => h(App)
})
