import Router from 'vue-router';
import routes from './routes';

const router = new Router({
	mode: 'history',
	history: true,
	routes
});

export default router;