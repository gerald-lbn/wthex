<script lang="ts">
	import { hexToInt } from '$lib/utils/hex';

	interface Props {
		target: string;
		guess: string;
	}

	const { target, guess }: Props = $props();

	const diffMoji = (guess: number, target: number) => {
		if (guess === target) return '✅';

		if (target - guess > 2) return '⏫';
		if (target - guess <= 2 && target - guess > 0) return '⬆️';

		if (guess - target > 2) return '⏬';
		if (guess - target <= 2 && guess - target > 0) return '⬇️';
	};
</script>

<div class="guess">
	{#each guess.split('') as digit, i}
		<div>
			<span class="digit size-7">{digit.toUpperCase()}</span>
			<span class="hint">{diffMoji(hexToInt(digit), hexToInt(target[i]))}</span>
		</div>
	{/each}
</div>

<style lang="scss">
	.guess {
		display: grid;
		grid-template-columns: repeat(3, minmax(auto, 1fr));
		gap: var(--space-lg);
		margin-top: var(--space-2xl);
		user-select: none;

		& > div {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: var(--space-md);

			border: 3px solid var(--text-normal-neutral);
			border-radius: var(--rounded-md);

			padding: var(--space-md);

			background-color: white;

			& > .digit {
				font-weight: 600;
			}
		}
	}
</style>
