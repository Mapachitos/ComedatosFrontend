import { createRouter, createWebHistory } from 'vue-router';
import informativeRoute from '@/informative/router';
import authRoute from '@/auth/router';
import contestsRouter from '@/contests/router';

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {...informativeRoute},
    {...authRoute},
    {...contestsRouter},
    {
      path: '/:pathMatch(.*)*',
      redirect: '/informative/areas',
    },
  ],
});

export default router;