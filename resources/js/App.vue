<template>
    <div class="app">
        <Navbar />

        <router-view></router-view>
    </div>
</template>

<script>

export default {
	components: {
		Navbar: () => import('./Components/Navbar.vue')
	}
};
</script>