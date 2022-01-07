import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Task from '../views/Task.vue';
import Comment from '../views/TaskComments.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    children: [
      {
        path: 'task/:id',
        name: 'Task',
        component: Task,

        children: [
          {
            path: 'comments',
            name: 'Comments',
            component: Comment,
          },
          {
            path: 'history',
            name: 'History',
            component: import(/* webpackChunkName: "TaskHistory" */ '../views/TaskHistory.vue')
          },
          {
            path: 'worklog',
            name: 'Worklog',
            component: import(/* webpackChunkName: "TaskWorkLog" */ '../views/TaskWorkLog.vue')
          },

        ],
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
