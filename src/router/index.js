import { createRouter, createWebHistory } from 'vue-router'
import Health from '../views/Health.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Health
		},
		{
			path: '/account',
			component: () => import('../views/Account.vue')
		},
		{
			path: '/history',
			component: () => import('../views/HistoryHealth.vue')
		},
		{
			path:'/login',
			component: () => import('../views/Login.vue')
		},
		{
			path:'/register',
			component: () => import('../views/Register.vue')
		},
	],
})

export default router