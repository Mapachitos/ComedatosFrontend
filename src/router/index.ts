import { createRouter, createWebHistory } from 'vue-router';
import presentationRoute from '@/informative/router';

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    presentationRoute,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/informative',
    },
  ],
});

export default router;