<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-1">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="https://www.smartjen.com/img/smart-jen-logo-horizontal-v3.png" alt="smartjen logo" width="150" height="49">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div v-if="loggedIn" class="collapse navbar-collapse" id="navbar-content">
                <ul class="navbar-nav w-100 mb-2 mb-lg-0 me-md-2 justify-content-end">
					<li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" :to="{ name: 'dashboard' }">User List</router-link>
                    </li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="profile-drop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Hi, {{user.email}}
						</a>
						<ul class="dropdown-menu" aria-labelledby="profile-drop">
							<li>
								<a @click="logout" class="dropdown-item text-danger" href="javascript:void(0)">Logout</a>
							</li>
						</ul>
					</li>
                </ul>
            </div>
			<div v-else class="d-flex">
				<router-link :to="{ name: 'login' }" class="btn btn-outline-primary btn-sm">Login</router-link>
			</div>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
	methods: {
		logout() {
			axios.get('api/v1/auth/signout').then(
				response => {
					const {data} = response;

					if(data.success) {
						this.$store.dispatch('setAuthLogout');
						window.location.assign('/login');
					}
				},
				// eslint-disable-next-line no-unused-vars
				error => {
					this.$message({
						message: 'Failed to signout',
						type: 'warning'
					});
				}
			);
		}
	},
	computed: {
		...mapState({
			loggedIn: state => state.auth.isLoggedIn,
			user: state => state.auth.user
		})
	}
};
</script>
