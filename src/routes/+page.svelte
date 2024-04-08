<script>
	import Hero from '$components/Hero.svelte';
	import WhatTheHex from '$components/WhatTheHex.svelte';

	import * as m from '$lib/paraglide/messages';

	export let data;
</script>

<Hero heading="What The Hex ?!" subheading={m.heroDescription()} />

{#if data.challenge}
	<div class="wth-wrap">
		<WhatTheHex challenge={data.challenge} />
	</div>
{/if}

<style lang="scss">
	.wth-wrap {
		margin-top: var(--space-6xl);
	}
</style>
