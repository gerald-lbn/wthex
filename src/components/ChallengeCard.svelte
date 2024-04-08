<script lang="ts">
	interface Props {
		colorName: string;
		hex: string;
		pubDate: Date;
		solved?: boolean;
	}

	const { colorName, hex, pubDate, solved }: Props = $props();
</script>

<div class="challenge-card size-7">
	<div class="color" style="background-color: {solved ? hex : '#dbdbdb'};"></div>
	<p class="color-name">
		{#if solved}
			{colorName}
		{:else}
			Unsolved Challenge
		{/if}
	</p>
	<footer class="size-8">
		{#if solved}
			<p>#{hex}</p>
		{:else}
			#???
		{/if}
		<p>{pubDate.toLocaleDateString()}</p>
	</footer>
</div>

<style lang="scss">
	.challenge-card {
		overflow: hidden;

		border: 3px solid var(--text-normal-neutral);
		border-radius: var(--rounded-md);

		background-color: white;

		& > .color {
			margin-bottom: var(--space-sm);
			width: 100%;
			aspect-ratio: 1 / 1;
		}

		& > .color-name {
			padding: 0 var(--space-md);
			font-weight: 500;
		}

		& > footer {
			display: flex;
			justify-content: space-between;
			align-items: center;

			padding: var(--space-sm) var(--space-md);
		}
	}
</style>
