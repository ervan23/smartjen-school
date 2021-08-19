<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 d-md-block m-md-auto pt-5">
                <div class="card shadow-1">
                    <div class="card-body">
                        <h4 class="text-muted">Create new account!</h4>

                        <hr>

						<div v-if="error" class="alert alert-warning" role="alert">
							<p class="m-0">{{err_msg}}</p>
						</div>

                        <form v-if="!success" v-loading="loading" @submit.prevent="register()">
                            <div class="mb-3">
                                <input type="email" name="email" v-model="email" class="form-control form-control-sm" autocomplete="off" placeholder="Email Address" required>
                            </div>

                            <div class="mb-3">
                                <input type="text" name="name" v-model="name" class="form-control form-control-sm" autocomplete="off" placeholder="Username" required>
                            </div>

                            <div class="mb-3">
                                <input type="text" name="school_name" v-model="school_name" class="form-control form-control-sm" autocomplete="off" placeholder="School Name" required>
                            </div>

                            <div class="mb-3">
                                <input type="password" name="password" v-model="password" class="form-control form-control-sm" autocomplete="off" placeholder="Password" required>
                            </div>

                            <div class="gap-1 d-grid mb-3">
                                <button type="submit" class="btn btn-sm btn-block btn-primary">Create account!</button>
                            </div>

							<p class="register-text text-secondary text-center mb-0">
								Already have account?
								<router-link class="btn-link" :to="{ name: 'login' }">Login</router-link>
							</p>
                        </form>

						<div v-if="success" class="row">
							<div class="col-12">
								<h2 class="text-success text-center">Register Success!</h2>
								<p class="register-text text-secondary text-center mb-0">
									Check your mail (inbox/spam) and login
									<router-link class="btn-link" :to="{ name: 'login' }">here</router-link>
								</p>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			email: null,
			name: null,
			school_name: null,
			password: null,
			loading: false,
			error: false,
			err_msg: null,
			success: false
		};
	},
	methods: {
		register() {
			this.loading = true;

			const {email, name, school_name, password} = this;
			const params = {
				email,
				name,
				school_name,
				password
			};

			axios.post('api/v1/auth/signup', params).then(
				response => {
					const {data} = response;
					this.error = false;
					this.success = data.success;
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
</style>