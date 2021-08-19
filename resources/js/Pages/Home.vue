<template>
    <div class="home">
        <div class="container">
			<div class="p-5 bg-light rounded-3 mt-3">
				<div class="container-fluid">
					<h3 class="fw-bold">Smartjen School</h3>
					<div class="col-12 col-md-8 mb-3">
						<p class="fs-4">Education made easy when you can prepare, generate and share worksheets with just a few clicks.</p>
					</div>
					<router-link :to="{ name: 'register' }" class="btn btn-primary btn-lg">Try it!</router-link>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState({
			loggedIn: state => state.auth.isLoggedIn,
		})
	}
};
</script>