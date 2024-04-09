<script lang="ts">
	import Meta from '$components/Meta.svelte';
	import Navbar from '$components/Navbar.svelte';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n';
	// import { Toaster } from 'svelte-french-toast';
	import '../styles/globals.scss';
</script>

<ParaglideJS {i18n}>
	<Meta
		title="What The Hex ?!"
		description="Instead of guessing words, try guessing hex colors !"
	/>

	<Navbar />

	<!-- <Toaster /> -->

	<main class="container">
		<slot />
	</main>
</ParaglideJS>

<style lang="scss">
	main {
		margin-top: var(--space-6xl);
		margin-bottom: var(--space-6xl);

		@media (max-width: 768px) {
			margin-top: var(--space-4xl);
			margin-bottom: var(--space-4xl);
		}
	}
</style>
