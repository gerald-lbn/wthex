<script lang="ts">
	import ChallengeCard from '$components/ChallengeCard.svelte';
	import Hero from '$components/Hero.svelte';
	import { formatDateWithDash } from '$lib/helpers/date';

	import * as m from '$lib/paraglide/messages';

	export let data;

	let solved = (challenge: (typeof data.challenges)[0]) => {
		// Check if the challenge has any guesses
		// i.e if the challenge has been solved
		// We filtered guesses to only include correct guesses
		return challenge.guesses.length > 0;
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
