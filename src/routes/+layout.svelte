<script lang="ts">
	import Meta from '$components/Meta.svelte';
	import Navbar from '$components/Navbar.svelte';
	// import { Toaster } from 'svelte-french-toast';
	import '../styles/globals.scss';
</script>

<Meta title="What The Hex ?!" description="Instead of guessing words, try guessing hex colors !" />

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
