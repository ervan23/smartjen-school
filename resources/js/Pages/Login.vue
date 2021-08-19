<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 d-md-block m-md-auto pt-5">
                <div class="card shadow-1">
                    <div class="card-body">
                        <h4 class="text-muted">Login to your account!</h4>

                        <hr>

						<div v-if="error" class="alert alert-warning">
							<p class="m-0">{{err_msg}}</p>
						</div>

                        <form v-loading="loading" @submit.prevent="login()">
                            <div class="mb-3">
                                <input type="text" name="school_id" v-model="school_id" class="form-control form-control-sm sch-id" autocomplete="off" placeholder="School ID" required>
                            </div>

                            <div class="mb-3">
                                <input type="email" name="email" v-model="email" class="form-control form-control-sm" autocomplete="off" placeholder="Email Address" required>
                            </div>

                            <div class="mb-3">
                                <input type="password" name="password" v-model="password" class="form-control form-control-sm" autocomplete="off" placeholder="Password" required>
                            </div>

                            <div class="gap-1 d-grid mb-3">
                                <button type="submit" class="btn btn-sm btn-block btn-primary">Login</button>
                            </div>

							<p class="register-text text-secondary text-center mb-0">
								Don't have account?
								<router-link class="btn-link" :to="{ name: 'register' }">Register</router-link>
							</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			error: false,
			err_msg: null,
			school_id: null,
			email: null,
			password: null,
			loading: false
		};
	},
	methods: {
		...mapActions({
			setAuthData: 'setAuthData'
		}),
		login() {
			this.loading = true;

			const params = {
				school_code: (this.school_id || '').toUpperCase(),
				email: this.email,
				password: this.password
			};
			axios.post('api/v1/auth/signin', params).then(
				response => {
					const {data} = response;

					if(data.success) {
						this.setAuthData(data.payload);
						window.location.assign('');
					}

					this.loading = false;
				},
				error => {
					this.error = true;
					this.err_msg = error.response.data.code < 500 ? error.response.data.message : 'System Fails';
					this.loading = false;
				}
			);
		}
	}
};
</script>

<style scoped>
    .register-text {
        font-size: 0.90rem;
    }

    .sch-id {
        text-transform: uppercase;
    }
</style>