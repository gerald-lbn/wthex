<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import WhatTheHex from '$components/WhatTheHex.svelte';

	export let data;
</script>

<Hero heading="{data.challenge?.createdAt} challenge" subheading="Can you solve it?" />

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
