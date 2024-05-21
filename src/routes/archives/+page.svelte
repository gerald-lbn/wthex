<script lang="ts">
	import { browser } from '$app/environment';
	import ChallengeCard from '$components/ChallengeCard.svelte';
	import Hero from '$components/Hero.svelte';
	import type { HexChallenge } from '$lib/db/types';
	import { formatDateWithDash } from '$lib/helpers/date';
	import { getItem } from '$lib/helpers/localStorage';

	import * as m from '$lib/paraglide/messages';

	export let data;

	let solved = (challenge: HexChallenge) => {
		if (browser) {
			const guesses = getItem<string[]>(`guesses-${challenge.createdAt}`);
			return guesses?.map((g) => g.toLocaleLowerCase()).includes(challenge.value.toLowerCase());
		}
		return false;
	};
</script>

<Hero heading={m.archives()} subheading={m.archivesDescription()} />

<div class="challenges">
	{#each data.challenges as challenge}
		<ChallengeCard
			url="/archives/{formatDateWithDash(challenge.createdAt)}"
			{challenge}
			solved={solved(challenge)}
		/>
	{/each}
</div>

<style lang="scss">
	.challenges {
		margin-top: var(--space-2xl);

		display: grid;
		grid-template-columns: repeat(4, minmax(auto, 1fr));
		gap: var(--space-xl);

		@media (max-width: 768px) {
			grid-template-columns: repeat(3, minmax(auto, 1fr));
		}

		@media (max-width: 640px) {
			grid-template-columns: repeat(2, minmax(auto, 1fr));
		}
	}
</style>
