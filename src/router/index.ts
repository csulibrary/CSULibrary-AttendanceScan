import { createRouter, createWebHistory } from 'vue-router'
import ACCESS from '../views/ACCESS.vue' 
import ACCESSEVENT from '@/views/ACCESS-EVENT.vue'
import ACCESSVISITORS from '@/views/ACCESS-VISITORS.vue'
import ACCESSOUT from '@/views/ACCESS-OUT.vue'
import ACCESSVISITORSQR from '@/views/ACCESS-VISITORS-QR.vue'
import WELCOME from '@/views/WELCOME.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WELCOME,
    },
    {
      path: '/event',
      name: 'event',
      component: ACCESSEVENT,
    },
    {
      path: '/visitors',
      name: 'visitors',
      component: ACCESSVISITORS,
    },
    {
      path: '/out',
      name: 'out',
      component: ACCESSOUT,
    },
        {
      path: '/visitors/qr',
      name: 'visitors-qr',
      component: ACCESSVISITORSQR,
    },
            {
      path: '/in',
      name: 'in',
      component: ACCESS,
    },
  ],
})

export default router