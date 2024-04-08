<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	// import { Toaster } from 'svelte-french-toast';
	import '../styles/globals.scss';
</script>

<Navbar />

<!-- <Toaster /> -->

<main class="container">
	<slot />
</main>

<style lang="scss">
	main {
		margin-top: var(--space-6xl);
		margin-bottom: var(--space-6xl);
	}
</style>
