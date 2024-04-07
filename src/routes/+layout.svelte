<script lang="ts">
	import '../styles/globals.scss';
</script>

<main class="container">
	<slot />
</main>

<style lang="scss">
	main {
		margin-top: var(--space-6xl);
		margin-bottom: var(--space-6xl);
	}
</style>
