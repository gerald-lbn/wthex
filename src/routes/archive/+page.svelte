<script>
	import ChallengeCard from '$components/ChallengeCard.svelte';
</script>

<h1 class="size-1">Archive</h1>
<p>Find all the past challenges here. Each day, a new challenge will be posted.</p>

<div class="challenges">
	{#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as _}
		<ChallengeCard colorName="What The Hex ?!" hex="#FF0000" pubDate={new Date()} />
	{/each}
</div>

<style lang="scss">
	.challenges {
		margin-top: var(--space-2xl);

		display: grid;
		grid-template-columns: repeat(4, minmax(auto, 1fr));
		gap: var(--space-xl);
	}
</style>
