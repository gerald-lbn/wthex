<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import WhatTheHex from '$components/WhatTheHex.svelte';
	import { verbalDate } from '$lib/helpers/date';

	import * as m from '$lib/paraglide/messages';
	import { languageTag } from '$lib/paraglide/runtime';

	export let data;
</script>

<Hero
	heading={m.challengeDate({
	date: verbalDate(data.challenge?.createdAt as string, languageTag())
})}
	subheading={m.canYouSolveIt()}
/>

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
