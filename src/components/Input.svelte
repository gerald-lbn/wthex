<script lang="ts">
	interface Props {
		required?: boolean;
		type: HTMLInputElement['type'];
		name?: string;
		id?: string;
		label?: string;
		placeholder?: string;
		value?: any;
		hint?: string;
		error?: string;
		min?: any;
		max?: any;
		textarea?: boolean;
		minlength?: number;
		maxlength?: number;
		pattern?: string;
	}

	let {
		required = false,
		type,
		name = '',
		id,
		label = '',
		placeholder = '',
		value = '',
		hint = '',
		error,
		min,
		max,
		textarea = false,
		minlength,
		maxlength,
		pattern
	}: Props = $props();
</script>

<div class="form-input">
	{#if label}
		<label for={id}>{label}</label>
	{/if}
	{#if !textarea}
		<input
			class="size-8"
			{type}
			{id}
			{name}
			{placeholder}
			{required}
			bind:value
			{min}
			{max}
			{minlength}
			{maxlength}
			{pattern}
		/>
	{:else}
		<textarea
			{id}
			{name}
			{placeholder}
			{required}
			bind:value
			{minlength}
			{maxlength}
			class="size-8"
		/>
	{/if}
	{#if hint && !error}
		<p class="hint font-label size-8">{hint}</p>
	{:else if error}
		<p class="error font-label size-8">{error}</p>
	{/if}
</div>

<style lang="scss">
	.form-input {
		display: flex;
		flex-direction: column;

		label {
			margin-bottom: var(--space-md);
			font-weight: 500;
		}
		input,
		textarea {
			height: 40px;
			padding: 0 var(--space-lg);
			border: 3px solid var(--text-normal-neutral);
			border-radius: var(--rounded-sm);

			&:focus {
				outline: 2px solid var(--border-strong-neutral);
			}
		}

		textarea {
			height: var(--space-9xl);
			resize: vertical;
			padding: var(--space-lg);
		}

		p.hint,
		p.error {
			margin-top: var(--space-sm);
		}

		p.error {
			color: var(--text-normal-destructive); // TODO: Add error colors
		}
	}
</style>
