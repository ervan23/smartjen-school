const routes = [
	{
		path: '',
		component: () => import('../Pages/Home.vue'),
		name: 'home',
		meta: { auth: false }
	},
	{
		path: '/dashboard',
		component: () => import('../Pages/Dashboard.vue'),
		name: 'dashboard',
		meta: { auth: true }
	},
	{
		path: '/invite',
		component: () => import('../Pages/Invite.vue'),
		name: 'invite',
		meta: { auth: true }
	},
	{
		path: '/chat/:id',
		component: () => import('../Pages/Chat.vue'),
		name: 'chat',
		meta: { auth: true }
	},
	{
		path: '/login',
		component: () => import('../Pages/Login.vue'),
		name: 'login',
		meta: { auth: false }
	},
	{
		path: '/register',
		component: () => import('../Pages/Register.vue'),
		name: 'register',
		meta: { auth: false }
	}
];

export default routes;