import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { d$auth } from '@store/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {

      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue')
    },
    //nested routed
    {
      path: '/profile',
      name: 'profile',
      redirect: { name: 'Login' },
      children: [
        {
          path: '',
          name: 'Login',
          component: () => import('@/views/Profile/LoginView.vue')
        },
        {
          //menambahkan params opsional
          path: 'detail/:id?',
          name: 'Authenticated',
          component: () => import('@/views/Profile/AuthenticatedView.vue'),
          //set route dilindungi
          meta: { auth: true }
        },
      ]
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'Match All',
      component: () => import('@/views/NotFoundView.vue')
    },


  ]
})

// navigasi untuk tamu

router.beforeEach((to, from, next) => {
  //mendapatkan state auth
  const loggedIn = d$auth().isLoggedIn
  //jika target route membutuhkan auth & no logged in user
  // maka redirect ke login 

  if (to.meta.auth && !loggedIn) {
    next({ name: 'Login' })
  } else if (to.path === '/profile' && loggedIn) {
    next({ name: 'Authenticated', params: { id: d$auth().g$user.id } })
  } else {
    //lalu proses
    next()
  }
})

export default router
