<script lang="ts">
	import type { HexChallengeWithGuesses } from '$lib/db/types';
	import Guess from '$components/Guess.svelte';
	import Input from '$components/Input.svelte';
	import { enhance } from '$app/forms';
	import autoAnimate from '@formkit/auto-animate';
	// import { toast } from 'svelte-french-toast';

	import * as m from '$lib/paraglide/messages';

	interface Props {
		challenge: HexChallengeWithGuesses;
	}

	const { challenge }: Props = $props();
	let guesses = $state<typeof challenge.guesses>(challenge.guesses);
	let currentGuess = $state<string>('');
	let guessed = $derived(currentGuess.toUpperCase() === challenge.value.toUpperCase());

	$effect(() => {
		if (guesses.length > 0) {
			if (guessed) currentGuess = challenge.value;
			else currentGuess = guesses[0].value;
		} else {
			currentGuess = '000000';
		}
	});
</script>

<div class="what-the-hex">
	<div class="colors">
		<div class="column">
			<p class="size-6 label">{m.target()}</p>
			<div class="color" style="background-color: #{challenge.value};"></div>
		</div>
		<div class="column">
			<p class="size-6 label">{m.guess()}</p>
			<div class="color" style="background-color: #{currentGuess};"></div>
		</div>
	</div>

	{#if !guessed}
		<form
			method="post"
			action="/api/challenges?/guess"
			use:enhance={({ cancel }) => {
			if (guesses.length > 5) {
				// toast.error('You have reached the maximum number of guesses.');
				return cancel();
			}

			return async ({ update, result }) => {
				if (result.type === 'failure') {
					console.error(result.data);
				} else if (result.type === 'success') {
					const guess = result.data!.guess as typeof guesses[0];

					guesses = [guess, ...guesses]
					currentGuess = guess.value;

					// if (guessed) toast.success('You guessed it! 🎉');
				}
				await update();
			};
		}}
		>
			<Input required type="hidden" name="challenge" value={challenge.id} />
			<Input
				required
				type="text"
				placeholder="FFFFFF"
				name="guess"
				hint={m.hexInput()}
				pattern="[a-fA-F0-9]&lcub;6&rcub;"
			/>
		</form>
	{/if}

	<div class="guess">
		<p class="size-6">{m.guesses()}</p>
		<ul use:autoAnimate>
			{#each guesses as guess}
				<li>
					<Guess target={challenge.value} guess={guess.value} />
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.what-the-hex {
		display: flex;
		flex-direction: column;
		gap: var(--space-4xl);

		.colors {
			display: grid;
			grid-template-columns: repeat(2, minmax(auto, 1fr));
			gap: var(--space-4xl);

			& > .column {
				& > .label {
					font-weight: 600;
					margin-bottom: var(--space-sm);
				}

				& > .color {
					width: 100%;
					aspect-ratio: 16 / 9;
					border-radius: var(--rounded-md);

					// easeOutExpo: https://easings.net/fr#easeOutExpo
					transition-property: background-color;
					transition-duration: 300ms;
					transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
				}
			}
		}

		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		& > .guess {
			& > .size-6 {
				font-weight: 600;
			}
		}
	}

	ul {
		list-style: none;
	}
</style>
