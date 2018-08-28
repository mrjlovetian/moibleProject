import VueRouter from 'vue-router'
import HomeContainer from './components/Tabbar/HomeContainer.vue'
import MemberContainer from './components/Tabbar/MemberContainer.vue'
import ShopCarContainer from './components/Tabbar/ShopCarContainer.vue'
import SearchContainer from './components/Tabbar/SearchContainer.vue'
import NewList from './components/News/NewList.vue'
import NewDetail from './components/News/NewDetail.vue'
import PhotoList from './components/photos/PhontoList.vue'
import PhotoDetail from './components/photos/PhotoDetail.vue'
import GoodsList from './components/Goods/GoodsList.vue'
import GoodDetal from './components/Goods/goodDetail.vue'

var router = new VueRouter({
  routes: [
    {
      path:'/home',
      component:HomeContainer
    },{
      path: '/member',
      component: MemberContainer
    }, {
      path: '/shopcar',
      component: ShopCarContainer
    }, {
      path: '/search',
      component: SearchContainer
    }, {
      path: '/home/newlist',
      component: NewList
    }, {
      path: '/home/newdetail/:title',
      component: NewDetail
    }, {
      path: '/home/photolist',
      component: PhotoList
    }, {
      path: '/home/photolist/detail',
      component: PhotoDetail
    }, {
      path: '/home/goodslist',
      component: GoodsList
    }, {
      path: '/home/gooddetal',
      component: GoodDetal,
      name: 'gooddetail'
    },
    {
      path:'*',
      redirect: '/home'
    },{
      path:'/',
      redirect: '/home'
    }
  ],
  linkActiveClass: 'mui-active',
  // router-link-active:
})

export default router
