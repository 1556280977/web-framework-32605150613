import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', component: () => import('../views/01-basic/Home.vue') },
    { path: '/about', name: 'About', component: () => import('../views/01-basic/About.vue') },
    { path: '/users', name: 'Users', component: () => import('../views/03-dynamic/Users.vue') },
    { path: '/user/:id', name: 'User', component: () => import('../views/03-dynamic/User.vue') },

    {
      path: '/center',
      component: () => import('../views/04-nested/Center.vue'),
      meta: { requiresAuth: true },
      children: [
        { path: '', redirect: '/center/profile' },
        { path: 'profile', component: () => import('../views/04-nested/CenterProfile.vue') },
        { path: 'orders', component: () => import('../views/04-nested/CenterOrders.vue') }
      ]
    },

    { path: '/nameddemo', name: 'NamedDemo', component: () => import('../views/05-named/NamedDemo.vue') },
    { path: '/programdemo', name: 'ProgramDemo', component: () => import('../views/06-programmatic/ProgramDemo.vue') },
    { path: '/search', name: 'Search', component: () => import('../views/06-programmatic/Search.vue') },
    { path: '/login', name: 'Login', component: () => import('../views/07-guard/Login.vue') },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/02-redirect/NotFound.vue') }
  ]
})

// =========全局前置守卫 beforeEach（安检员，课件重点）=========
router.beforeEach((to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const token = localStorage.getItem('token')

  if (requiresAuth && !token) {
    return { name: 'Login', query: { redirect: to.fullPath } }
  }
})

export default router
