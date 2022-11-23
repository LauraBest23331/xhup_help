import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import _1_0 from '@/components/view/1_0.vue'
import _1_1 from '@/components/view/1_1.vue'
import _1_2_0 from '@/components/view/1_2_0.vue'
import _1_2_1 from '@/components/view/1_2_1.vue'
import _1_2_2 from '@/components/view/1_2_2.vue'
import _1_2_3 from '@/components/view/1_2_3.vue'
import _1_2_4 from '@/components/view/1_2_4.vue'
import _1_2_5 from '@/components/view/1_2_5.vue'
import _2_0 from '@/components/view/2_0.vue'
import _2_1 from '@/components/view/2_1.vue'
import _2_2 from '@/components/view/2_2.vue'
import _2_3 from '@/components/view/2_3.vue'
import _2_4 from '@/components/view/2_4.vue'
import _2_5 from '@/components/view/2_5.vue'
import _2_6_1 from '@/components/view/2_6_1.vue'
import _3_0 from '@/components/view/3_0.vue'
import _3_1 from '@/components/view/3_1.vue'
import _3_2 from '@/components/view/3_2.vue'
import _3_3 from '@/components/view/3_3.vue'
import _3_4 from '@/components/view/3_4.vue'
import _3_5 from '@/components/view/3_5.vue'
import _3_6 from '@/components/view/3_6.vue'
import _3_7 from '@/components/view/3_7.vue'
import _4_0 from '@/components/view/4_0.vue'
import _4_1 from '@/components/view/4_1.vue'
import _4_2 from '@/components/view/4_2.vue'
import _4_3 from '@/components/view/4_3.vue'
import _5_0 from '@/components/view/5_0.vue'
import _5_1 from '@/components/view/5_1.vue'



import Welcome from '@/components/view/Welcome.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
    redirect: '/Welcome',
    children: [
      { path : '/Welcome', component: Welcome},
      { path: '/1_0', component: _1_0},
      { path: '/1_1', component: _1_1},
      { path: '/1_2_0', component: _1_2_0},
      { path: '/1_2_1', component: _1_2_1},
      { path: '/1_2_2', component: _1_2_2},
      { path: '/1_2_3', component: _1_2_3},
      { path: '/1_2_4', component: _1_2_4},
      { path: '/1_2_5', component: _1_2_5},
      { path: '/2', component: _2_0},
      { path: '/2_1', component: _2_1},
      { path: '/2_2', component: _2_2},
      { path: '/2_3', component: _2_3},
      { path: '/2_4', component: _2_4},
      { path: '/2_5', component: _2_5},
      { path: '/2_6_1', component: _2_6_1},
      { path: '/3', component: _3_0},
      { path: '/3_1', component: _3_1},
      { path: '/3_2', component: _3_2},
      { path: '/3_3', component: _3_3},
      { path: '/3_4', component: _3_4},
      { path: '/3_5', component: _3_5},
      { path: '/3_6', component: _3_6},
      { path: '/3_7', component: _3_7},
      { path: '/4', component: _4_0},
      { path: '/4_1', component: _4_1},
      { path: '/4_2', component: _4_2},
      { path: '/4_3', component: _4_3},
      { path: '/5', component: _5_0},
      { path: '/5_1', component: _5_1},

    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航


  return next()
})
export default router
