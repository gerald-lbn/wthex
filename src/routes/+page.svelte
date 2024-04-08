<script>
	import WhatTheHex from '$components/WhatTheHex.svelte';

	export let data;
</script>

<h1 class="size-1">What The Hex ?!</h1>
<p class="hero-text">Instead of guessing words, try guessing hex colors !</p>

{#if data.challenge}
	<div class="wth-wrap">
		<WhatTheHex challenge={data.challenge} />
	</div>
{/if}

<style lang="scss">
	.hero-text {
		max-width: 720px;
	}

	.wth-wrap {
		margin-top: var(--space-6xl);
	}
</style>
