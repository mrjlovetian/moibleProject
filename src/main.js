import Vue  from 'vue'
import App from './App.vue'
import router from './router.js'
import Vuex from 'vuex'
import {
  Header,
  Swipe,
  SwipeItem,
  Button,
  Lazyload
} from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import VuePreview from 'vue-preview';

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Lazyload)
Vue.use(VuePreview)
Vue.use(Vuex)

Vue.http.options.root = '192.168.7.13'

var store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    add(state) {
      console.log('vvvvvvvvvvvvvvvv', state)
      state.count++;
    }
  },
  getters:{

  }
})

console.log('hello mrj')

new Vue({
   el:'#app',
   store,
   router,
   render: h=>h(App)
})
