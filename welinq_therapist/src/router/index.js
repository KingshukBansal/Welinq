import { createRouter, createWebHistory } from 'vue-router'
import TherapistView from '../views/therapistView.vue'
import Home from '../views/homeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/therapist',
      name: 'therapist',
      component: TherapistView
    },
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/my-sessions',
      name:'home',
    },
    {
      path:'/quizzes',
      name:'home',
    },
    {
      path:'/webinars',
      name:'home',
    },
    {
      path:'/profile',
      name:'home',
    }
    
  ]
})

export default router
