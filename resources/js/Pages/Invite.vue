<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 d-md-block m-md-auto pt-5">
                <div class="card shadow-1">
                    <div class="card-body">
                        <h4 class="text-muted">Invite User</h4>

                        <hr>

						<div v-if="error" class="alert alert-warning">
							<p class="m-0">{{err_msg}}</p>
						</div>

                        <form v-loading="loading" @submit.prevent="invite()">
                            <div class="mb-3">
                                <input type="text" name="name" v-model="name" class="form-control form-control-sm sch-id" autocomplete="off" placeholder="Name" required>
                            </div>

                            <div class="mb-3">
                                <input type="email" name="email" v-model="email" class="form-control form-control-sm" autocomplete="off" placeholder="Email Address" required>
                            </div>

                            <div class="mb-3">
                                <select name="role" v-model="role" class="form-control form-control-sm" required>
                                    <option value="" disabled selected>--Select Role--</option>
                                    <option value="1">Teacher</option>
                                    <option value="2">Student</option>
                                </select>
                            </div>

                            <div class="gap-1 d-grid mb-3">
                                <button type="submit" class="btn btn-sm btn-block btn-primary">Sent Invitation</button>
                            </div>
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
			name: null,
			email: null,
			role: '',
			loading: false
		};
	},
	methods: {
		...mapActions({
			setAuthData: 'setAuthData'
		}),
		invite() {
			this.loading = true;

			const params = {
				name: this.name,
				email: this.email,
				role: this.role
			};
			axios.post('api/v1/user/invite', params).then(
				response => {
					const {data} = response;

					if(data.success) {
						this.$message({
							message: 'User invited',
							type: 'success'
						});
						this.$router.push('/dashboard');
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
</style>