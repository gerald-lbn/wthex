<script lang="ts">
	import type { HexChallenge } from '$lib/db/types';
	import { verbalDate } from '$lib/helpers/date';

	import * as m from '$lib/paraglide/messages';
	import { languageTag } from '$lib/paraglide/runtime';

	interface Props {
		challenge: HexChallenge;
		url: string;
		solved?: boolean;
	}

	const { challenge, url, solved }: Props = $props();
</script>

<a href={url} class="challenge-card size-7">
	<div class="color" style="background-color: #{solved ? challenge.value : 'dbdbdb'};"></div>
	<p class="color-name">
		{#if solved}
			#{challenge.value}
		{:else}
			{m.unsolvedChallenge()}
		{/if}
	</p>
	<p class="size-8 date">{verbalDate(challenge.createdAt, languageTag())}</p>
</a>

<style lang="scss">
	.challenge-card {
		text-decoration: none;
		color: inherit;

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

		& > p.date {
			text-align: end;
			margin-top: var(--space-sm);
			padding: 0 var(--space-sm) var(--space-md);
		}
	}
</style>
