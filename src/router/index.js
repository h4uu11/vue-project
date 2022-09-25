import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
// import { createRouterLayout } from 'vue-router-layout'

// const RouterLayout = createRouterLayout(layout => {
//   // Resolves a layout component with layout type string.
//   return import('@/layouts/' + layout + '.vue')
// })
const router = createRouter({
  history: createWebHistory(/*process.env.BASE_URL*/),
  routes,
});

export default router;
