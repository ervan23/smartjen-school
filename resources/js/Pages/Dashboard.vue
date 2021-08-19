<template>
    <div class="home">
		<div class="container">
			<div class="row my-4">
				<h4 class="text-dark">Hi, {{authUser.name}} </h4>
			</div>

			<div class="row">
				<div class="col-12 table-responsive">
					<div v-if="role.isAdmin" class="d-flex justify-content-end">
						<router-link class="btn btn-sm btn-success" :to="{ name: 'invite' }">Invite</router-link>
					</div>
					<div  v-if="role.isTeacher" class="d-flex justify-content-center">
						<ul class="nav nav-pills">
							<li class="nav-item">
								<a class="nav-link" :class="{ active: selectedRole == 1 }" @click="changeSelectedRole(1)" aria-current="page" href="javascript:void(0)">Teacher</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" :class="{ active: selectedRole == 2 }" @click="changeSelectedRole(2)" aria-current="page" href="javascript:void(0)">Student</a>
							</li>
						</ul>
					</div>
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="user in users" :key="user.id">
								<td>{{user.name}}</td>
								<td>{{user.email}}</td>
								<td>{{getStringRole(user.role)}}</td>
								<td>
									<div class="btn-group" role="group" aria-label="Basic example">
										<router-link :to="{ name: 'chat', params: {id: user.id} }" class="btn btn-primary">
											<i class="fa fa-comments-o"></i>
										</router-link>
										<button v-if="role.isAdmin" @click="confirmDelete(user.id)" type="button" class="btn btn-danger">
											<i class="fa fa-trash"></i>
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
import { getRole, Role } from '../Helpers/auth';

export default {
	data() {
		return {
			loading: false,
			users: [],
			selectedRole: null
		};
	},
	beforeMount() {
		if(!this.loggedIn) {
			this.$router.push('/login');
		}
	},
	mounted() {
		this.getUserByRole();
	},
	methods: {
		getUserByRole() {
			if(this.role.isAdmin) {
				this.selectedRole = null;
			} else if(this.role.isStudent) {
				this.selectedRole = Role.STUDENT;
			} else if(this.role.isTeacher) {
				this.selectedRole = Role.TEACHER;
			}

			this.getListUser(this.selectedRole);
		},
		changeSelectedRole(role) {
			this.selectedRole = role;
			this.getListUser(this.selectedRole);
		},
		getListUser(role) {
			this.users = [];
			this.loading = true;
			axios.get('api/v1/user', {
				params: {
					role
				}
			}).then(
				response => {
					const {data} = response;
					this.users = data.payload;

					this.loading = false;
				},
				// eslint-disable-next-line no-unused-vars
				error => {
					this.loading = false;
					this.$message({
						message: 'Failed to fetch user',
						type: 'warning'
					});
				}
			);
		},
		confirmDelete(id) {
			this.$msgBox.confirm('Delete this user ?', 'Confirmation', {
				confirmButtonText: 'Delete',
				cancelButtonText: 'Cancel',
				type: 'warning'
			}).then(() => {
				this.deleteUser(id);
			}).catch(() => {});
		},
		deleteUser(id) {
			axios.delete(`api/v1/user/${id}`).then(
				response => {
					const {data} = response;
					if(data.success) {
						this.getListUser();

						this.$message({
							message: 'User Deleted',
							type: 'success'
						});
					}
				},
				// eslint-disable-next-line no-unused-vars
				error => {
					this.$message({
						message: 'Failed to delete user',
						type: 'warning'
					});
				}
			);
		},
		getStringRole(role) {
			return getRole(role);
		}
	},
	computed: {
		...mapState({
			loggedIn: state => state.auth.isLoggedIn,
			authUser: state => state.auth.user,
			role: state => state.role,
		})
	}
};
</script>