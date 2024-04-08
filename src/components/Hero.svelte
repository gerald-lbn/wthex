<script lang="ts">
	interface Props {
		heading: string;
		subheading?: string;
	}

	const { heading, subheading }: Props = $props();
</script>

<h1 class="size-1">{heading}</h1>
{#if subheading}
	<p class="hero-text">{subheading}</p>
{/if}

<style lang="scss">
	.hero-text {
		max-width: 720px;
	}
</style>
