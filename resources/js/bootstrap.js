/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
// require('dotenv').config();
// eslint-disable-next-line no-undef
window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// eslint-disable-next-line no-undef
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// eslint-disable-next-line no-undef
window.axios.defaults.baseURL = process.env.MIX_API_URL;

if (localStorage.getItem('auht__token')) {
	window.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('auht__token')}`;
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
	broadcaster: 'pusher',
	key: process.env.MIX_PUSHER_APP_KEY,
	cluster: process.env.MIX_PUSHER_APP_CLUSTER,
	forceTLS: false,
	auth: {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('auht__token')}`
		},
	},
});
