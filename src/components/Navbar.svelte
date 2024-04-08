<script lang="ts">
	import Logo from './Logo.svelte';

	import * as m from '$lib/paraglide/messages';
</script>

<header class="container">
	<Logo />
	<nav>
		<a href="/archives">{m.archives()}</a>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;

		padding: var(--space-4xl);

		& > nav {
			display: flex;
			align-items: end;
			gap: var(--space-5xl);

			& > a {
				color: inherit;
				text-decoration: none;
				font-weight: 700;
			}
		}
	}
</style>
