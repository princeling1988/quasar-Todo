
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/star', component: () => import('pages/Star.vue') },
      { path: '/send', component: () => import('pages/Send.vue') },
      { path: '/drafts', component: () => import('pages/Drafts.vue') },
      { path: '/swiper', component: () => import('pages/Swiper.vue') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
